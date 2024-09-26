browser.runtime.onInstalled.addListener(() => {
  browser.alarms.create("lockTimer", {delayInMinutes: 30});
});

browser.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "lockTimer") {
    unlockTabs();
  }
});

function lockTabs(allowedTabIds) {
  browser.tabs.onActivated.addListener((activeInfo) => {
    if (!allowedTabIds.includes(activeInfo.tabId)) {
      browser.tabs.update(allowedTabIds[0], {active: true});
    }    
  });
}

function unlockTabs() {
  browser.tabs.onActivated.removeListener();
}
