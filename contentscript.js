console.log("CS running............h");
var i=0;
setInterval(() => {
    i++;
    chrome.runtime.sendMessage({bgData: "D-"+i});    
}, 100);






