var currTabID;

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "open_tabs.js"});
});

function saveCurrentTabID() {
    chrome.tabs.getSelected(function(tab) {
        currTabID = tab.id;
    });
}
    
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message == "save")
            saveCurrentTabID();
        else if(request.message == "switch")
          chrome.tabs.update(currTabID, {selected: true});
        else
            console.log("Unknown message from content script: " + request.message);
});