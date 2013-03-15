chrome.extension.sendMessage({message: "save"});

var results = document.getElementsByClassName("r");

for(var i = 0; i < 3; ++i) {
    window.open(results[i].children[0].getAttribute("href"));
}

chrome.extension.sendMessage({message: "switch"});