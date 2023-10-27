chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: getSelectedText,
    });
  });
  
  function getSelectedText() {
    const selectedText = window.getSelection().toString();
    chrome.runtime.sendMessage({ selectedText });
  }
  