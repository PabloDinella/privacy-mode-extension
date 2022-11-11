const inject = (tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["injectcss.js"],
  });
};

// chrome.runtime.onInstalled.addListener(() => {
//   inject();
// });

chrome.action.onClicked.addListener(function (tab) {
  console.log("clicked");
  inject(tab);
});
// ,
//   "content_scripts": [
//     {
//       "matches": [
//         "https://web.whatsapp.com/*"
//       ],
//       "css": [
//         "src/inject/inject.css"
//       ]
//     }
//   ]
