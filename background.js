const ICONS = {
  "default": {
    "16": "images/default/icon-16.png",
    "32": "images/default/icon-32.png",
    "48": "images/default/icon-48.png",
    "128": "images/default/icon-128.png"
  },
  "active": {
    "16": "images/active/icon-16.png",
    "32": "images/active/icon-32.png",
    "48": "images/active/icon-48.png",
    "128": "images/active/icon-128.png"
  }
}


chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ isActive: false });
  chrome.action.setIcon({ path: ICONS.default });
});

chrome.action.onClicked.addListener(async (tab) => {
  const storedState = await chrome.storage.local.get('isActive');
  const state = !storedState.isActive;

  if (state) {
    chrome.action.setIcon({ path: ICONS.active });
  }
  else {
    chrome.action.setIcon({ path: ICONS.default });
  }

  chrome.storage.local.set({ isActive: state });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});
