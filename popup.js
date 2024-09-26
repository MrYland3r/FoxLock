document.getElementById('startLock').addEventListener('click', () => {
  const time = parseInt(document.getElementById('timeInput').value);
  browser.alarms.create("lockTimer", {delayInMinutes: time});

  browser.tabs.query({}, (tabs) => {
    const allowedTabIds = tabs.map(tab => tab.id);
    browser.runtime.sendMessage({type: 'lockTabs', allowedTabIds});
  });
});
