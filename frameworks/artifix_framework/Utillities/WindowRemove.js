ART.WindowRemove = {
  keyDown: function(evt) {
    debugger;
      sc_super();
      var codes = evt.commandCodes(), cmd = codes[0];
      if (cmd === 'meta_[' && cmd === "w") {
        return NO;
      }
      return YES;
    }
};
