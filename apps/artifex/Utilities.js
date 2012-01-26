SC.mixin(Artifex, {

  doRemoveQuotes:function(str) {
    return (str = str.replace(/["']{1}/gi, ""));
  }
});