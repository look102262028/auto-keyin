// 個網銀 - 一般測試帳號 F121374529
let keyInDefaultAccount = document.getElementById("keyInDefaultAccount");
// 個網銀 - 外匯測試帳號 A237772047
let keyInFxAccount = document.getElementById("keyInFxAccount");
// 個網銀 - 額外帳號 B121194483
let keyInOtherAccount = document.getElementById("keyInOtherAccount");
// 個網銀 - 企業戶帳號
let keyInCompanyAccount = document.getElementById("keyInCompanyAccount");


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


//<---------------------------------------------網銀帳號----------------------------------------->



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


 

   
