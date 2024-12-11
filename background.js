// Modified background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("xendit")) {
      chrome.storage.local.get(['isHidden'], (result) => {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          func: (hidden) => {
            const announcement = document.querySelector('.js-notice.pt-3.pb-2.px-4.px-lg-5.border-bottom.color-border-subtle.color-bg-default');
            if (announcement) {
              announcement.style.display = hidden ? 'none' : 'block';
            }
          },
          args: [result.isHidden]
        });
      });
    }
  });