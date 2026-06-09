// Listener for the alarm
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "eyeBreakReminder") {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png",
            title: "Time for a Break!",
            message: "Take a 20-second break and look at something 20 feet away.",
            priority: 1,
            buttons: [{ title: "Start Timer" }]
        });

        // Reset alarm
        chrome.alarms.create("eyeBreakReminder", { delayInMinutes: 20 }); // change to 20 for actual use
    }
});

// Handle button click on notification
chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
    if (buttonIndex === 0) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    files: ["injectTimer.js"]
                });
            }
        });

        chrome.alarms.create("eyeBreakReminder", { delayInMinutes: 20 });
    }
});

// Set alarm when installed
chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create("eyeBreakReminder", { delayInMinutes: 20 });
});