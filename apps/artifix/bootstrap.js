function isSupportedBrowser() {

  if (SC.browser.isSafari && SC.browser.version >= "534.51.22" || SC.browser.isChrome) {
    return true;
  }
  return false;
}

function redirectToUnsupported() {
  var unsupported = window.location.href.replace(Artifix.APP_WEB_URL, Artifix.UNSUPPORTED_WEB_URL);
  window.location.href = unsupported;
}


function init() {

  if (!isSupportedBrowser()) {
    redirectToUnsupported();
  }
}

init();

