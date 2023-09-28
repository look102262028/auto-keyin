// 個網銀 - 一般測試帳號 F121374529
let keyInDefaultAccount = document.getElementById("keyInDefaultAccount");
// 個網銀 - 外匯測試帳號 A237772047
let keyInFxAccount = document.getElementById("keyInFxAccount");
// 個網銀 - 額外帳號 B121194483
let keyInOtherAccount = document.getElementById("keyInOtherAccount");
// 個網銀 - 企業戶帳號
let keyInCompanyAccount = document.getElementById("keyInCompanyAccount");
// 工作單-同步ISWP其他頁簽
let synISWPTime = document.getElementById("synISWPTime");
// 變更單-衝擊分析表
let synISWPTime2 = document.getElementById("synISWPTime2");
// // 弱掃工作單
// let fortifyISWP = document.getElementById("fortifyISWP");
// 憑證-F121374529
let caF = document.getElementById("caF");
let caF2 = document.getElementById("caF2");
// // 憑證-A237772047
let caA = document.getElementById("caA");
let caA2 = document.getElementById("caA2");
// // 憑證-B121194483
let caB = document.getElementById("caB");
let caB2 = document.getElementById("caB2");

// 信用卡驗證
let cardA = document.getElementById("cardA");
let cardB = document.getElementById("cardB");
let cardA_edit = document.getElementById("cardA_edit");
let cardB_edit = document.getElementById("cardB_edit");
//QRCODE信用卡申請
let qrApply0 = document.getElementById("qrApply0");
let qrVerifyCard = document.getElementById("qrVerifyCard");
let qrApply1 = document.getElementById("qrApply1");
let qrApply2 = document.getElementById("qrApply2");


let qrVerifyOTP = document.getElementById("qrVerifyOTP");
let qrApply3 = document.getElementById("qrApply3");

//<---------------------------------------------網銀帳號----------------------------------------->
// 個網銀 - F121374529 事件註冊
keyInDefaultAccount.addEventListener("click", async () => {
    // 現行頁面
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setDefaultAccount,
    });
});
// 個網銀 - A237772047 事件註冊
keyInFxAccount.addEventListener("click", async () => {
    // 現行頁面
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setFxAccount,
    });
});
// 個網銀 - B121194483 事件註冊
keyInOtherAccount.addEventListener("click", async () => {
  // 現行頁面
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setOtherAccount,
  });
});


// function setPNG(val){
//  console.log(val);
//  let png=document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:gCode');
//  png.value=val;
// }
//<---------------------------------------------網銀帳號----------------------------------------->



//<---------------------------------------------憑證----------------------------------------->

caF.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      args: ['F121374529'],
      target: { tabId: tab.id },
      function: setCAF,
    });
});
caF2.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      args: ['F121374529'],
      target: { tabId: tab.id },
      function: setCAF2,
    });
});
//A237772047
caA.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      args: ['A237772047'],
      target: { tabId: tab.id },
      function: setCAF,
    });
});
caA2.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      args: ['A237772047'],
      target: { tabId: tab.id },
      function: setCAF2,
    });
});
//B121194483 N123401230
caB.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      // args: ['B121194483'], 
      // args: ['N123401230'], 
      args: ['X178734889'], 
      target: { tabId: tab.id },
      function: setCAF,
    });
});
caB2.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      // args: ['B121194483'], 
      // args: ['N123401230'], 
      args: ['X178734889'], 
      target: { tabId: tab.id },
      function: setCAF2,
    });
});



//<---------------------------------------------憑證END----------------------------------------->

// 工作單-同步ISWP其他頁簽 事件註冊
synISWPTime.addEventListener("click", async () => {
  // 現行頁面
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setISWPTime,
  });
});
// 變更單-衝擊分析表
synISWPTime2.addEventListener("click", async () => {
  // 現行頁面
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setISWPTime2
  });
})
// 弱掃工作單
// fortifyISWP.addEventListener("click", async () => {
//   // 現行頁面
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setFortifyISWP
//   });
// })

//F121374529
function setDefaultAccount() {
    document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:graphicImg').click();
    let id = document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:shadedCustomerId');
    let customerId = document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:customerId');
    let account = document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:userId');
    let password = document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:clearPassword');
    id.value= "F121374529"
    customerId.value="F121374529"
    account.value="F12137452999"
    password.value="1qaz2wsx"
}
//A237772047 
function setFxAccount() {
  document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:graphicImg').click();
  let id = document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:shadedCustomerId');
  let customerId = document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:customerId');
  let account = document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:userId');
  let password = document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:clearPassword');
  id.value= "A237772047"
  customerId.value="A237772047"
  account.value="A23777204799"
  password.value="1qaz2wsx"

}
//B121194483
 function setOtherAccount() {
  let id_v="B121194483";
  let account_v="B12119448388";
  let password_v="1qaz2wsx";
  if(document.getElementById('iframe')){
    document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:graphicImg').click();
    document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:shadedCustomerId').value=id_v;
    document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:customerId').value=id_v;;
    document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:userId').value=account_v;
    document.getElementById('iframe').contentWindow.document.getElementById('viewFragment1:form1:clearPassword').value=password_v;
  }else{
    document.getElementsByTagName('input')[0].value=id_v;
    document.getElementsByTagName('input')[1].value=account_v;
    document.getElementsByTagName('input')[2].value=password_v;
    document.getElementsByTagName('input')[3].value='123';
    document.getElementsByTagName('input')[0].dispatchEvent(new Event('input'));
    document.getElementsByTagName('input')[1].dispatchEvent(new Event('input'));
    document.getElementsByTagName('input')[2].dispatchEvent(new Event('input'));
    document.getElementsByTagName('input')[3].dispatchEvent(new Event('input')); 
    document.getElementsByClassName('btn2 main')[0].click();
  }

}
/**
 *  憑證第一步
 */
 function setCAF(custId) {
   if(!document.getElementsByName('newkey1')[0]){
    // window.location.href='http://10.0.59.5/raapi/FSRA/CreateUser.htm';
    window.location.href='http://10.0.5.60/raapi/FSRA/CreateUser.htm';
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
function setCAF2(custId) {
  if(!document.getElementsByName('userkey1')[0]){
    // window.location.href='http://10.0.59.5/raapi/FSRA/ApplyCertOnDesk.htm';
    window.location.href='http://10.0.5.60/raapi/FSRA/ApplyCertOnDesk.htm';
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




//<---------------------------------------------MYDATA信用卡驗證 START----------------------------------------->

// 自行卡信用卡驗證驗證
cardA.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setCardSelf,
  });
});
cardB.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setCardSelf,
  });
});
// QRCODE他行卡驗證
qrVerifyCard.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setQrVerifyCard,
  });
});
// QRCODE-OTP驗證
qrVerifyOTP.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setQrVerifyOTP,
  });
});

// 自行、他行卡驗證
function setCardSelf() {
  

  document.getElementsByName('custId')[0].value='N123401230';
  //angular input 要加上以下去觸發! 不然ngModel吃不到
  document.getElementsByName('custId')[0].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));

  
  document.getElementsByName('creditCardNO')[0].value='5261220644559103';
  document.getElementsByName('creditCardNO')[0].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));

  document.getElementsByName('ValidMonthYear')[0].value='0726';
  document.getElementsByName('ValidMonthYear')[0].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  
  document.getElementsByName('checkCode')[0].value='013';
  document.getElementsByName('checkCode')[0].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  
  document.getElementsByName('viewFragment1')[0].value='1997/11/16';
  document.getElementsByName('viewFragment1')[0].dispatchEvent(new Event('input'));
  document.getElementsByName('viewFragment1')[0].dispatchEvent(new Event('change'));
  
  document.getElementsByName('c_01')[0].checked=true;
  document.getElementsByName('c_01')[0].dispatchEvent(new Event('click', { 'bubbles': true, 'cancelable': false }));
}

//<---------------------------------------------MYDATA信用卡驗證 END----------------------------------------->

//<---------------------------------------------QRCODE信用卡申請 START----------------------------------------->
// QRCODE他行卡驗證
function setQrVerifyCard() {

  document.getElementsByTagName('input')[2].value='5261';
  document.getElementsByTagName('input')[3].value='2206';
  document.getElementsByTagName('input')[4].value='4455';
  document.getElementsByTagName('input')[5].value='9103';
  document.getElementsByTagName('input')[6].value='0726';
  document.getElementsByTagName('input')[7].value='013';
  document.getElementsByTagName('input')[8].value='';
  //angular input 要加上以下去觸發! 不然ngModel吃不到
  document.getElementsByTagName('input')[2].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[3].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[4].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[5].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[6].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[7].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[8].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
}
// QRCODE OTP驗證
function setQrVerifyOTP(){

  document.getElementsByTagName('input')[0].value='N123401230';
  document.getElementsByTagName('input')[0].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[1].value='1997/11/16';
  document.getElementsByTagName('input')[1].dispatchEvent(new Event('input'));
  document.getElementsByTagName('input')[1].dispatchEvent(new Event('change'));

}
//<---------------------------------------------QRCODE信用卡申請 END----------------------------------------->

//<---------------------------------------------MYDATA信用卡編輯----------------------------------------->

// 自行、他行卡編輯
cardA_edit.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setCardAEdit,
  });
});
cardB_edit.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setCardBEdit,
  });
});
// mydata自行卡編輯
function setCardAEdit() {
 //中文姓名
 document.getElementsByName('cnName')[0].value='陳導俊';
 document.getElementsByName('cnName')[0].dispatchEvent(new Event('input'));
 //生日
 document.getElementsByName('viewFragment1')[0].value='1964/02/29';
 document.getElementsByName('viewFragment1')[0].dispatchEvent(new Event('input'));
 document.getElementsByName('viewFragment1')[0].dispatchEvent(new Event('change'));
 //mail
 document.getElementsByName('email')[0].value='tcb1@gmail.com';
 document.getElementsByName('email')[0].dispatchEvent(new Event('input'));
 //行動
 document.getElementsByName('mobile')[0].value='0958123456';
 document.getElementsByName('mobile')[0].dispatchEvent(new Event('input'));
 //畢業國小名稱
 document.getElementsByName('elemSchool')[0].value='大安國小';
 document.getElementsByName('elemSchool')[0].dispatchEvent(new Event('input'));
 //往來分行
 document.getElementsByName('citySelect')[0].value='2: 台北市';
 document.getElementsByName('citySelect')[0].dispatchEvent(new Event('change'));
 document.getElementsByName('branchSelect')[0].value=document.getElementsByName('branchSelect')[0].children[2].value;
 document.getElementsByName('branchSelect')[0].dispatchEvent(new Event('change'));
}
// mydata他行卡編輯
function setCardBEdit() {
  //angular input 要加上以下去觸發! 不然ngModel吃不到
  //中文姓名
  document.getElementsByName('cnName')[0].value='陳導俊';
  document.getElementsByName('cnName')[0].dispatchEvent(new Event('input'));
  //英文姓名
  document.getElementsByName('enName')[0].value='chendaojim';
  document.getElementsByName('enName')[0].dispatchEvent(new Event('input'));
  //生日
  document.getElementsByName('viewFragment1')[0].value='1964/02/29';
  document.getElementsByName('viewFragment1')[0].dispatchEvent(new Event('input'));
  document.getElementsByName('viewFragment1')[0].dispatchEvent(new Event('change'));
  //mail
  document.getElementsByName('email')[0].value='tcb1@gmail.com';
  document.getElementsByName('email')[0].dispatchEvent(new Event('input'));
  //行動
  document.getElementsByName('mobile')[0].value='0958123456';
  document.getElementsByName('mobile')[0].dispatchEvent(new Event('input'));
  //電話H住家
  document.getElementsByName('currentTelArea')[0].value='02';
  document.getElementsByName('currentTelArea')[0].dispatchEvent(new Event('input'));
  document.getElementsByName('currentTel')[0].value='21738888';
  document.getElementsByName('currentTel')[0].dispatchEvent(new Event('input'));
  //通訊地址
  document.getElementsByName('sameAs')[0].value='1';
  document.getElementsByName('sameAs')[1].dispatchEvent(new Event('click'));
  document.getElementsByName('currentCity')[0].value='1: 臺北市';
  document.getElementsByName('currentCity')[0].dispatchEvent(new Event('change'));
  document.getElementsByName('currentTown')[0].value='5: 大安區';
  document.getElementsByName('currentTown')[0].dispatchEvent(new Event('change'));
  document.getElementsByName('currentAddr')[0].value='信義路5號';
  document.getElementsByName('currentAddr')[0].dispatchEvent(new Event('input'));
  //教育程度
  document.getElementsByName('eduRadio')[0].value='1';
  document.getElementsByName('eduRadio')[0].dispatchEvent(new Event('change'));
  //畢業國小名稱
  document.getElementsByName('elemSchool')[0].value='大安國小';
  document.getElementsByName('elemSchool')[0].dispatchEvent(new Event('input'));
  //公司
  document.getElementsByName('compName')[0].value='谷哥';
  document.getElementsByName('compName')[0].dispatchEvent(new Event('input'));
  //公司地址
  document.getElementsByName('compCity')[0].value='3: 新北市';
  document.getElementsByName('compCity')[0].dispatchEvent(new Event('change'));
  document.getElementsByName('compTown')[0].value='3: 板橋區';
  document.getElementsByName('compTown')[0].dispatchEvent(new Event('change'));
  document.getElementsByName('compAddr')[0].value='新北科技園區99號';
  document.getElementsByName('compAddr')[0].dispatchEvent(new Event('input'));
  //統一編號
  document.getElementsByName('compId')[0].value='98678888';
  document.getElementsByName('compId')[0].dispatchEvent(new Event('input'));
  //公司電話
  document.getElementsByName('compTelArea')[0].value='02';
  document.getElementsByName('compTelArea')[0].dispatchEvent(new Event('input'));
  document.getElementsByName('compTel')[0].value='27049999';
  document.getElementsByName('compTel')[0].dispatchEvent(new Event('input'));
  //行業別
  document.getElementsByName('indusSelect')[0].value='other';
  document.getElementsByName('indusSelect')[0].dispatchEvent(new Event('change'));
  document.getElementsByName('indusOther')[0].value='youtuber';
  document.getElementsByName('indusOther')[0].dispatchEvent(new Event('input'));
  //職業
  document.getElementsByName('posTitle')[0].value='金融保險';
  document.getElementsByName('posTitle')[0].dispatchEvent(new Event('input'));
  //年資
  document.getElementsByName('workYear')[0].value='7';
  document.getElementsByName('workYear')[0].dispatchEvent(new Event('input'));
  //平均月收入
  document.getElementsByName('avgSalary')[0].value='300';
  document.getElementsByName('avgSalary')[0].dispatchEvent(new Event('input'));
  //帳單寄送地址
  document.getElementsByName('billMailAddr')[0].value='2';
  document.getElementsByName('billMailAddr')[0].dispatchEvent(new Event('change'));
  //往來分行
  document.getElementsByName('citySelect')[0].value='2: 台北市';
  document.getElementsByName('citySelect')[0].dispatchEvent(new Event('change'));
  document.getElementsByName('branchSelect')[0].value=document.getElementsByName('branchSelect')[0].children[1].value;
  document.getElementsByName('branchSelect')[0].dispatchEvent(new Event('change'));

}




//<---------------------------------------------MYDATA信用卡編輯END----------------------------------------->


//<---------------------------------------------QRCODE信用卡編輯START----------------------------------------->
qrApply0.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setQrApply0,
  });
});

qrApply1.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setQrApply1,
  });
});
//QRCODE信用卡編輯
qrApply2.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setQrApply2,
  });
});
qrApply3.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setQrApply3,
  });
});


function setQrApply0(){
  document.getElementsByTagName('input')[0].value='on';
  document.getElementsByTagName('input')[0].dispatchEvent(new Event('click', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByClassName('btn2 main')[1].click();
  document.getElementsByTagName('input')[1].value='on';
  document.getElementsByTagName('input')[1].dispatchEvent(new Event('click', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByClassName('btn2 main')[1].click();
  document.getElementsByTagName('input')[2].value='on';
  document.getElementsByTagName('input')[2].dispatchEvent(new Event('click', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByClassName('js_terms_scrollArea')[0].scrollTop=document.getElementsByClassName('js_terms_scrollArea')[0].scrollHeight;
  setTimeout(function(){
    document.getElementsByClassName('btn2 main')[1].click();
    document.getElementsByTagName('input')[3].value='on';
    document.getElementsByTagName('input')[3].dispatchEvent(new Event('click', { 'bubbles': true, 'cancelable': false }));
    document.getElementsByClassName('js_terms_scrollArea')[0].scrollTop=document.getElementsByClassName('js_terms_scrollArea')[0].scrollHeight;
    setTimeout(function(){
      document.getElementsByClassName('btn2 main')[1].click();
      document.getElementsByTagName('input')[4].value='on';
      document.getElementsByTagName('input')[4].dispatchEvent(new Event('click', { 'bubbles': true, 'cancelable': false }));
      document.getElementsByClassName('js_terms_scrollArea')[0].scrollTop=document.getElementsByClassName('js_terms_scrollArea')[0].scrollHeight;
      setTimeout(function(){
        document.getElementsByClassName('btn2 main')[1].click();
        document.getElementsByTagName('input')[5].value='on';
        document.getElementsByTagName('input')[5].dispatchEvent(new Event('click', { 'bubbles': true, 'cancelable': false }));
        document.getElementsByClassName('js_terms_scrollArea')[0].scrollTop=document.getElementsByClassName('js_terms_scrollArea')[0].scrollHeight;
        setTimeout(function(){
          document.getElementsByClassName('btn2 main')[1].click();
          document.getElementsByClassName('btn2 main')[0].click()
        },100);
      },100);
    },100);
  },100);
 



  
}
function setQrApply1(){
  document.getElementsByTagName('input')[0].value='測試姓名';
  document.getElementsByTagName('input')[0].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[2].value='test english name';
  document.getElementsByTagName('input')[2].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('select')[1].value='3: Object'; //教育
  document.getElementsByTagName('select')[1].dispatchEvent(new Event('change'));
  document.getElementsByTagName('input')[6].value='測試國小';
  document.getElementsByTagName('input')[6].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[7].value='02';
  document.getElementsByTagName('input')[7].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[8].value='21738888';
  document.getElementsByTagName('input')[8].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[9].value='0911123456';
  document.getElementsByTagName('input')[9].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('select')[2].value='2: 台北市';
  document.getElementsByTagName('select')[2].dispatchEvent(new Event('change'));
  document.getElementsByTagName('select')[3].value='2: 西門分行';
  document.getElementsByTagName('select')[3].dispatchEvent(new Event('change'));
  document.getElementsByTagName('select')[4].value='10: Object';
  document.getElementsByTagName('select')[4].dispatchEvent(new Event('change'))
  document.getElementsByTagName('input')[13].value='123123';
  document.getElementsByTagName('input')[13].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[14].value='testmail';
  document.getElementsByTagName('input')[14].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[15].value='gmail.com';
  document.getElementsByTagName('input')[15].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[16].value='on';
  document.getElementsByTagName('input')[16].dispatchEvent(new Event('click', { 'bubbles': true, 'cancelable': false }));
}
function setQrApply2(){
  document.getElementsByTagName('input')[0].value='測試公司';
  document.getElementsByTagName('input')[0].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[1].value='12345678';
  document.getElementsByTagName('input')[1].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[2].value='02';
  document.getElementsByTagName('input')[2].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[3].value='22559911';
  document.getElementsByTagName('input')[3].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[4].value='236';
  document.getElementsByTagName('input')[4].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('select')[1].value='2: 西門分行';
  document.getElementsByTagName('select')[1].dispatchEvent(new Event('change')); 
  document.getElementsByTagName('select')[2].value='2: 西門分行';
  document.getElementsByTagName('select')[2].dispatchEvent(new Event('change'));
  document.getElementsByTagName('input')[5].value='大安路55號';
  document.getElementsByTagName('input')[5].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('select')[3].value='1: Object';
  document.getElementsByTagName('select')[3].dispatchEvent(new Event('change'));
  document.getElementsByTagName('input')[6].value='總柴';
  document.getElementsByTagName('input')[6].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[7].value='7';
  document.getElementsByTagName('input')[7].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[8].value='30';
  document.getElementsByTagName('input')[8].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
}
function setQrApply3(){
  document.getElementsByTagName('input')[0].value='測試姓名';
  document.getElementsByTagName('input')[0].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[3].value='測試國小';
  document.getElementsByTagName('input')[3].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[4].value='0911123456';
  document.getElementsByTagName('input')[4].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('select')[1].value='2: 台北市';
  document.getElementsByTagName('select')[1].dispatchEvent(new Event('change'));
  document.getElementsByTagName('select')[2].value='2: 西門分行';
  document.getElementsByTagName('select')[2].dispatchEvent(new Event('change'));
  document.getElementsByTagName('select')[3].value='3: Object';
  document.getElementsByTagName('select')[3].dispatchEvent(new Event('change'));
  document.getElementsByTagName('input')[9].value='testmail';
  document.getElementsByTagName('input')[9].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[10].value='gmail.com';
  document.getElementsByTagName('input')[10].dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
  document.getElementsByTagName('input')[11].value='on';
  document.getElementsByTagName('input')[11].dispatchEvent(new Event('click', { 'bubbles': true, 'cancelable': false }));
}
//<---------------------------------------------QRCODE信用卡編輯END----------------------------------------->
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

/**
 *  變更單-衝擊分析表
 */
 function setISWPTime2() {
    console.log("setISWPTime2");
    for(let i=1;i<=17;i++) { 
      document.getElementsByName('targetFraction')[i].value='25';
    } 
    document.getElementsByName('targetFraction')[3].value='50';
    document.getElementsByName('targetFraction')[7].value='75';
    document.getElementsByName('targetFraction')[11].value='75';
  }
  /**
   *  弱掃工作單
   */
  function setFortifyISWP() {
    console.log("setFortifyISWP");
    // document.getElementsByName('purpose')[3].value='50';
    // document.getElementsByName('targetFraction')[7].value='75';
    // document.getElementsByName('targetFraction')[11].value='75';
  }

 

   
