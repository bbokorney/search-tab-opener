var results = document.getElementsByClassName("r");
var urls = new Array();
for(var i = 0; i < 3; ++i) {	
	urls.push(results[i].children[0].getAttribute("href"));
}
chrome.extension.sendMessage(urls);