chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.selectedText) {
      // You can implement a way to fetch the meaning of the selected word here.
      const meaning = "This is the meaning of " + message.selectedText;
      sendResponse({ meaning });
    }
  });
  