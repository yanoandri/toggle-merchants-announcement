// popup.js
document.getElementById('toggleBtn').addEventListener('click', () => {
    chrome.storage.local.get(['isHidden'], (result) => {
      const newState = !result.isHidden;
      chrome.storage.local.set({ isHidden: newState });
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: (hidden) => {
            const announcement = document.querySelector('.js-notice.pt-3.pb-2.px-4.px-lg-5.border-bottom.color-border-subtle.color-bg-default');
            const expandWindow = document.querySelector('[data-testid="project-memex-info-button"]');
            if (announcement) {
              announcement.style.display = hidden ? 'none' : 'block';

              if (hidden) {
                expandWindow.click();
              }
            }
          },
          args: [newState]
        });
      });
    });
  });