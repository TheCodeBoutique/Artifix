ART.WindowRemove = {
  keyDown: function(evt) {
    debugger;
      arguments.callee.base.apply(this,arguments);
      var codes = evt.commandCodes(), cmd = codes[0];
      if (cmd === 'meta_[' && cmd === "w") {
        return NO;
      }
      return YES;
    }
};
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('artifix_framework');