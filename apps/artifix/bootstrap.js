function isSupportedBrowser() {
  SC.info("Are you using Safari = %@".fmt(SC.browser.isSafari));
  SC.info("Current browser is = %@".fmt(SC.browser.current));
  SC.info("Current browser version is = %@".fmt(SC.browser.version));
  SC.info("Current browser language = %@".fmt(SC.browser.language));


  if (SC.browser.isSafari && SC.browser.version >= "534.51.22") {
    return true;
  }
  return false;
}

function redirectToUnsupported() {
  var unsupported = window.location.href.replace(window.location, "http://www.apple.com/safari/download/");
  window.location.href = unsupported;
}


function init() {

  if (!isSupportedBrowser()) {
    redirectToUnsupported();
  }
}

init();

