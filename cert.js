// 憑證-F121374529
let caF = document.getElementById("caF");
let caF2 = document.getElementById("caF2");
// // 憑證-A237772047
let caA = document.getElementById("caA");
let caA2 = document.getElementById("caA2");
// // 憑證-B121194483
let caB = document.getElementById("caB");
let caB2 = document.getElementById("caB2");
// // 憑證-自行輸入
let caID = document.getElementById("caID");
let caID2 = document.getElementById("caID2");
let caIdInput = document.getElementById("id");


//10.0.5.60 10.0.59.5 10.0.59.6
let URL = '10.0.5.60';

//<---------------------------------------------憑證----------------------------------------->

caF.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      args: ['F121374529',URL],
      target: { tabId: tab.id },
      function: setCAF,
    });
});
caF2.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      args: ['F121374529',URL],
      target: { tabId: tab.id },
      function: setCAF2,
    });
});
//A237772047
caA.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      args: ['A237772047',URL],
      target: { tabId: tab.id },
      function: setCAF,
    });
});
caA2.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      args: ['A237772047',URL],
      target: { tabId: tab.id },
      function: setCAF2,
    });
});
//B121194483 N123401230
caB.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      args: ['B121194483',URL], 
      // args: ['B121194483'], 
      // args: ['N123401230'], 
      // args: ['X178734889'], 
      target: { tabId: tab.id },
      function: setCAF,
    });
});
caB2.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      args: ['B121194483',URL], 
      // args: ['N123401230'], 
      // args: ['X178734889'], 
      target: { tabId: tab.id },
      function: setCAF2,
    });
});
caID.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.storage.sync.set({'id':id.value},function(){
      console.log('set id.value',id.value)
    });
    chrome.scripting.executeScript({
      args: [id.value,URL], 
      target: { tabId: tab.id },
      function: setCAF,
    });
});
caID2.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      args: [id.value,URL], 
      target: { tabId: tab.id },
      function: setCAF2,
    });
});
// chrome.storage.sync.get(['id'],function(result){
//   let custIdText = result.id;
//   console.log(custIdText);
//   id.value=custIdText;
// });


//<---------------------------------------------憑證END----------------------------------------->


/**
 *  憑證第一步
 */
 function setCAF(custId,URL) {
   if(!document.getElementsByName('newkey1')[0]){
    let certIP = URL;
    window.location.href='http://'+certIP+'/raapi/FSRA/CreateUser.htm';
   }else{
    let localobj=JSON.parse(localStorage.getItem(custId)?localStorage.getItem(custId):"{}");  //localstorage
    console.log('localobj', localobj);
    let local_today='';  
    let count=0;
    if(localobj){
      local_today=localobj['today']; 
      count=localobj['count'];
    }
    console.log('localobj[count]',localobj['count']);
    let date=new Date().toISOString().split('T')[0].replaceAll('-',''); //今日
    console.log('**local:',custId,' , ',count);
    if(local_today!=date){  //今日沒建立過
      count=0;
    }
    count++;
    //'F121374529-00-20220920001'
    
    let obj={
      'today':date,
      'count':count,
      'count_submit':localobj.count_submit,
    }
    localStorage.setItem(custId,JSON.stringify(obj));
  
    if(count<10){
      count='00'+count;
    }else{
      count='0'+count;
    }
    let val = custId + '-00-' + date + count.toString();
    console.log(JSON.stringify(obj));
  
    console.log(val);
    // document.getElementsByName('url')[0].value='https://localhost/TCBRAServlet/RA21';
    document.getElementsByName('url')[0].value='http://localhost/TCBRAServlet/RA21';
    document.getElementsByName('newkey1')[0].value=val;
    document.getElementsByName('account')[0].value=val;
    document.getElementsByName('otherinfo')[0].value='[PID='+custId+'][NAME=DanaWu][EMAIL=dana@formosoft.com][BIRTH=1973/12/31]|{ROLEID=0}|{GROUPID=1}';
    document.getElementsByName('fm2')[0].submit();
   }
  

  
}
//憑證第二步
function setCAF2(custId,URL) {
  if(!document.getElementsByName('userkey1')[0]){
    let certIP = URL;
    window.location.href='http://'+certIP+'/raapi/FSRA/ApplyCertOnDesk.htm';
  }else{

    console.log('setCAF2',custId);
    let localobj=JSON.parse(localStorage.getItem(custId)?localStorage.getItem(custId):"{}");  //localstorage
    console.log('localobj',localobj);
    let local_today='';  
    let count_submit=0;
    if(localobj){
      local_today=localobj['today']; 
      count_submit=localobj['count_submit']?localobj['count_submit']:0;
    }
    let date=new Date().toISOString().split('T')[0].replaceAll('-',''); //今日
    if(local_today!=date){  //今日沒建立過
      count_submit=0;
    }
    count_submit++;
    
    console.log('1',localobj);
    let obj={
      'today':date,
      'count_submit':count_submit,
      'count':localobj.count
    }
    console.log('2',obj);
    localStorage.setItem(custId,JSON.stringify(obj));
    if(count_submit<10){
      count_submit='00'+count_submit;
    }else{
      count_submit='0'+count_submit;
    }
    let val = custId + '-00-' + date + count_submit.toString();
    console.log(val);
    console.log(JSON.stringify(obj));
    // document.getElementsByName('url')[0].value='https://localhost/TCBRAServlet/RA21';
    document.getElementsByName('url')[0].value='http://localhost/TCBRAServlet/RA21';
    document.getElementsByName('userkey1')[0].value=val;
    document.getElementsByName('subject')[0].value=val;
    document.getElementsByName('mediatype')[0].value='7005';
    document.getElementsByName('fm2')[0].submit();
  }
}



 

   
