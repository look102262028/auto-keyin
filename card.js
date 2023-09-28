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

 

   
