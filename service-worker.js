chrome.commands.onCommand.addListener((command) => {
    if (command === "set-clip") {
        console.log("Set clip");
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { message: "clip" });
        });
    }
});