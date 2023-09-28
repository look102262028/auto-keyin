// 工作單-同步ISWP其他頁簽
let synISWPTime = document.getElementById("synISWPTime");
// 變更單-衝擊分析表
let synISWPTime2 = document.getElementById("synISWPTime2");




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
 

 

   
