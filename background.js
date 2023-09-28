let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
 //let tab] = chrome.tabs.query({ active: true, currentWindow: true });
//console.log('444');
//console.log([tab]);
// function onClickHandler(info, tab) {
//   let id = document.getElementById('name');


//   id.value= "test"


// }
// chrome.contextMenus.onClicked.addListener(onClickHandler);

// chrome.runtime.onInstalled.addListener(function (details) {
//   chrome.contextMenus.create({
//     type: 'normal',
//     title: 'Hello, World!',
//     id: 'myContextMenuItem',
//     contexts: ['all']
//   }, function () {
//     console.log('contextMenus are create.');
//   });
// });
