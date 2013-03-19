chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "open_tabs.js"});
});

function openNewTabs(urls) {
    chrome.tabs.getSelected(function(tab) {
        console.log(tab);
        var currTabID = tab.id;
        for(var i = 0; i < urls.length; ++i) {
            chrome.tabs.create({url: urls[i]});
        }
        chrome.tabs.update(currTabID, {selected: true});
    });
}
    
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        openNewTabs(request);
});