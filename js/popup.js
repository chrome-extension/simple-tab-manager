function storeTab(e) {
  // TODO: storage
  // chrome.storage.local.get('storage')
  // removal
  chrome.tabs.getSelected(null, function(tab) {
    // chrome.tabs.create({"url": tab.url});
    chrome.tabs.remove(tab.id);
  });
}

function storeWindow(e) {
  // TODO: storage

  // removal
  // TODO (secondary): find way to close entire window instead of iterate
  chrome.tabs.query({"currentWindow": true}, function(tabArr) {
    for (var i = 0; i < tabArr.length; i++) {
      chrome.tabs.remove(tabArr[i].id);
    }
  });
}

function openManager(e) {
  chrome.tabs.create({"url": "html/manager.html"});
}

function main() {
  // $('.store-tab').hide();
  // $('.store-tab').fadeIn(400);
  $('#store-tab').on('click', storeTab);
  $('#store-window').on('click', storeWindow);
  $('#manage').on('click', openManager);
}

$(document).ready(main);
