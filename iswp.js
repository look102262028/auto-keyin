// 變更單-衝擊分析表
let job_chg = document.getElementById("job_chg");
job_chg.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setjob_chg
  });
});

// 弱掃
let fortify = document.getElementById("fortify");
fortify.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setFortify
  });
});

// 工作單-行動
let job_mobile = document.getElementById("job_mobile");
job_mobile.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setJob_mobile
  });
});

// 工作單-線上申請
let job_online = document.getElementById("job_online");
job_online.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setJob_online
  });
});

// 同步
let sync = document.getElementById("sync");
sync.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setSycn
  });
});



//--------------------------以下method--------------------//

/**
 *  變更單-衝擊分析表
 */
 function setjob_chg() {
  console.log("setjob_chg");
  for(let i=0;i<=16;i++) { 
    document.getElementsByName('targetFraction')[i].value='25';
    document.getElementsByName('targetFraction')[i].dispatchEvent(new Event('click', { 'bubbles': true, 'cancelable': false }));
  } 
  document.getElementsByName('targetFraction')[3].value='50';
  document.getElementsByName('targetFraction')[7].value='75';
  document.getElementsByName('targetFraction')[11].value='75';
}
//工作單-行動
async function setJob_mobile() {
  console.log("setJob_mobile");
  document.getElementById('A01419-DC-DC3').checked=true;
  document.getElementById('A01419-SP').checked=true;
  document.getElementById('content').value=
  '* 請資管科協助進行過版作業：\n'+
   '中台:\n'+
      '(1). 由ap2ftp/EA/MOBILE目錄下載打包完成的EAR檔案。 \n'+
      '(2). 以行動網銀之wasconsole(10.0.39.6)進行程式過版。\n'+
    'APP:\n'+
      '(1).  行動網銀配合需求調整，請資管科協助包版ADM Android 0.Ｘ及 iOS 0.Ｘ，發布Android及iOS。\n'+
      '\n'+
  '* 請系統科OP組協助：\n'+
   '(1)過版時關閉行動/網路銀行簡訊。\n'+
   '(2)切換行動網銀流量及WAS node agent。\n';
}
//工作單-線上申請
async function setJob_online() {
  console.log("job_online");
  document.getElementById('A01419-DC-DC3').checked=true;
  document.getElementById('A01419-SP').checked=true;
  document.getElementById('content').value=
  '* 請資管科協助進行過版作業：\n'+
  '使用TFS進行備份及自動包、佈版\n'+
  '工作單號:'+document.getElementById('formId').innerHTML+'。\n'+
  '版號:RTM_113SC00\n'+
  '組建 : EA-PRIVATE-BUILD-PROD\n'+
  '版本 : EA-PRIVATE-DEPLOY-PROD \n'+
  '\n'+
  '* 請系統科OP組協助：\n'+
  '關閉網銀告警與切換F5流量。\n'+
  '(TWNB、PIB、HKNB、EAI、newEA、MB、MP)\n'+
  '切換流量Server及node agent:\n'+
  'F5網址 : 10.0.36.6/7\n'+
  'twnbweb1P(172.29.100.19)\n'+
  'twnbweb2P(172.29.100.20)\n';
}
//同步
async function setSycn() {
  console.log("setSycn");
  let mfmtType=document.getElementById('A01421-MGMT').checked;  //資安
  let dcType=document.getElementById('A01419-DC-DC3').checked;  //open
  let spType=document.getElementById('A01419-SP').checked;  //系統
  let tct=document.getElementById('tct').value; //測試系統完成日期
  let sct=document.getElementById('sct').value; //連線系統完成日期	
  let sit=document.getElementById('sit').value; //連線系統實施日期	
  let content=document.getElementById('content').value; //執行內容	
  let split_string = '* 請系統科OP組協助：';
  let content_dc=content.split(split_string)[0];
  let content_sp=split_string+content.split(split_string)[1];

  console.log("mfmtType",mfmtType);
  if(mfmtType){ //資安
    document.getElementById('tabMgmt').click()
    return new Promise((resolve) => setTimeout(function(){
      document.getElementById('sct').value=sct;
      document.getElementById('sit').value=sit;
      document.getElementById('description').value=content;
    }, 500));
  }
  if(dcType && spType){
    document.getElementById('tabDc3').click()
    return new Promise((resolve) => setTimeout(function(){
      document.getElementById('tct').value=tct;
      document.getElementById('sct').value=sct;
      document.getElementById('sit').value=sit;
      document.getElementById('description').value=content_dc;
      document.getElementById('tabSp').click()
      setTimeout(function(){
        document.getElementById('isProduction').checked = true;
        document.getElementById('isTest').checked = false;
        document.getElementById('sct').value=sct;
        document.getElementById('description').value=content_sp;
      }, 500)
    }, 500))
  }else if(dcType && !spType){  //only 資管
    document.getElementById('tabDc3').click()
    return new Promise((resolve) => setTimeout(function(){
      document.getElementById('tct').value=tct;
      document.getElementById('sct').value=sct;
      document.getElementById('sit').value=sit;
      document.getElementById('description').value=content_dc;
    }, 500));
  }else if(!dcType && spType){ //only 系統
    document.getElementById('tabSp').click()
    return new Promise((resolve) => setTimeout(function(){
      document.getElementById('isProduction').checked = true;
      document.getElementById('isTest').checked = false;
      document.getElementById('sct').value=sct;
      document.getElementById('description').value=content_sp;
    }, 500));
  }
}

//弱掃
  async function setFortify() {
    console.log("setFortify");
    document.getElementById('content').value='配合修改XXX，調整行動網銀XXX線上申請平台\n\n程式碼弱掃路徑另外提供。';
    document.getElementById('A01421-MGMT').checked=true
    document.getElementById('isModifyProgram').checked=true
    document.getElementById('isProgramOnline').checked=true
  }





/**
 *  同步ISWP - 其他頁簽
 */
 async function setISWPTime() {

  console.log("setISWPTime");

  // 測試系統完成時間
  let testCompleteTime = document.getElementById('tct').value;
  // 連線系統完成日期
  let connectCompleteTime = document.getElementById('sct').value;
  // 連線系統實施日期
  let connectStatTime = document.getElementById('sit').value;
  // 資管科 - OPEN
  let dataController = document.getElementById('A01419-DC-DC3');
  // 系統科
  let systemProduct = document.getElementById('A01419-SP');
  // 執行內容
  let content = document.getElementById('content').value;

  if(dataController.checked == true){

    console.log("資管科 - OPEN 畫面");

    // 列表頁簽
    let dataControllerTab = document.getElementById('tabDc3');
    dataControllerTab.click();

    await sleep(1500);

    // 測試系統完成時間
    let tct = document.getElementById('tct');
    // 連線系統完成日期
    let sct = document.getElementById('sct');
    // 連線系統實施日期
    let sit = document.getElementById('sit');
    // 工作說明
    let description = document.getElementById('description');
    // 工作明細
    let dataControllerContent = content.substring(content.indexOf("[資管科]"));

    tct.value = testCompleteTime;
    sct.value = connectCompleteTime;
    sit.value = connectStatTime;
    description.value = dataControllerContent.substring(dataControllerContent.indexOf("[資管科]"),dataControllerContent.indexOf("。") + 1)


  }

  if(systemProduct.checked == true){

    console.log("系統科畫面");

    // 列表頁簽
    let systemProductTab = document.getElementById('tabSp');
    systemProductTab.click();

    await sleep(1500);

    // 連線系統完成日期
    let sct = document.getElementById('sct');
    // PRODUCTION
    let prod = document.getElementById('isProduction');
    // 工作說明
    let description = document.getElementById('description');
    // 工作明細
    let systemContent = content.substring(content.indexOf("[系統科]"));
    
    sct.value = connectCompleteTime;
    description.value = systemContent.substring(systemContent.indexOf("[系統科]"),systemContent.indexOf("。") + 1)
    prod.click();
  }

  // sleep 實作
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
	
   
}


 

 

   
