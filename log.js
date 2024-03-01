let id = document.getElementById("id");
let day = document.getElementById("day");

let sql = document.getElementById("sql");
let url = document.getElementById("url");
let traceId = document.getElementById("traceId");
let log1 = document.getElementById("log1");
let log2 = document.getElementById("log2");
let log3 = document.getElementById("log3");
let log4 = document.getElementById("log4");




//<---------------------------------------------憑證----------------------------------------->

sql.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.storage.sync.set({'id':id.value},function(){
    console.log('set id.value',id.value)
  });
  chrome.storage.sync.set({'day':day.value},function(){
    console.log('set day.value',day.value)
  });
  chrome.scripting.executeScript({
    args: [id.value, day.value],
    target: { tabId: tab.id },
    function: getSQL,
  });
});



url.addEventListener("click", function () {
  //  另開分頁
  //  chrome.windows.create({url:[
  //   'https://10.0.59.1:9443/HouseKeeping/jdbctest.jsp',
  //   'http://10.0.59.1:9080/MobileBankAdm/runSynchronize.html',
  //   'http://10.0.59.2:9080/MobileBankAdm/runSynchronize.html' 
  // ]});
   chrome.tabs.create({url:'http://10.0.39.6:9080/MobileBankAdm/runSynchronize.html'},function(tab1){
    chrome.tabs.create({url:'http://10.0.39.7:9080/MobileBankAdm/runSynchronize.html'},function(tab2){
      chrome.tabs.create({url:'http://10.0.39.7:9080/HouseKeeping/jdbctest.jsp'});
    });
   });
});

function executeScript(url, type) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tab = tabs[0];
    chrome.storage.sync.set({ 'traceId': traceId.value, 'day': day.value }, function () {
      console.log('set traceId', traceId.value);
      console.log('set day.value', day.value);
      chrome.scripting.executeScript({
        args: [traceId.value, day.value, url, type],
        target: { tabId: tab.id },
        function: getAPI,
      });
    });
  });
}

log1.addEventListener("click", async () => {
  // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // chrome.storage.sync.set({'traceId':traceId.value},function(){
  //   console.log('set traceId',traceId.value)
  // });
  // chrome.storage.sync.set({'day':day.value},function(){
  //   console.log('set day.value',day.value)
  // });
  // chrome.scripting.executeScript({
  //   args: [traceId.value, day.value,'1','s'],
  //   target: { tabId: tab.id },
  //   function: getAPI,
  // });
  executeScript('1', 's');
});
log2.addEventListener("click", async () => {
  executeScript('2', 'r');
});
log3.addEventListener("click", async () => {
  executeScript('3', 's');
});
log4.addEventListener("click", async () => {
  executeScript('4', 'r');
});


//<---------------------------------------------同步get----------------------------------------->
chrome.storage.sync.get(['id'],function(result){
  let custIdText = result.id;
  console.log(custIdText);
  id.value=custIdText;
});
chrome.storage.sync.get(['day'],function(result){
  let day_ = result.day;
  console.log(day_);
  day.value=day_;
});
chrome.storage.sync.get(['traceId'],function(result){
  let traceId_ = result.traceId;
  console.log(traceId_);
  traceId.value=traceId_;
});
//<---------------------------------------------憑證END----------------------------------------->


/**
 *  sql
 */
function getSQL(custId, day) {
  console.log('getSQL, custId:', custId, ',day:', day);

  let sqlUrl = 'http://10.0.39.7:9080/HouseKeeping/jdbctest.jsp'
  if (location.href !== sqlUrl) {
    console.log('go search');
    window.location.href = sqlUrl;
  }
  if (!custId || !day) {
    alert('custId or day empty');
    return;
  }
  if (custId.length != 10 || day.length != 4 || isNaN(day) || isNaN(custId.substring(1))) {
    alert('custId or day illeagle');
    return;
  }
  let sql = 'select * from MNBDB.mb_fnct_log where cust_id=\'' + custId + '\' and op_dttm between \'2024' + day + '0000000\' and \'2024' + day + '235900\' order by op_dttm with ur';
  document.getElementsByName('DatasourceNameText')[0].value = 'jdbc/MNBDB';
  document.getElementsByName('QueryStringText')[0].value = sql;
  // document.getElementsByName('Submit')[0].click();

}


/**
 *  api 上下行
 */
function getAPI(traceId, day, url, type) {
  console.log('getAPI, traceId:', traceId, ',day:', day);

  let sqlUrl = 'http://10.0.39.6:9080/MobileBankAdm/runSynchronize.html'
  if(url=='3' || url=='4'){
    sqlUrl = 'http://10.0.39.7:9080/MobileBankAdm/runSynchronize.html'
  }
  if (location.href !== sqlUrl) {
    console.log('go search');
    window.location.href = sqlUrl;
  }
  if (!traceId || !day) {
    alert('traceId or day empty');
    return;
  }
  let mon=day.substring(0,2);
  let date=day.substring(2);

  let command = '/MB/message/2024/'+mon+'/'+date+'/'+traceId.trim()+'.'+type;
  console.log('command:',command);

  document.getElementsByName('path')[0].value = command;
  document.getElementsByTagName('input')[1].click();

  
  
}











