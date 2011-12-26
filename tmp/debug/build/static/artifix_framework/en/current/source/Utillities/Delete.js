ART.Delete = {
  objectRemoval:'',
  keyDown: function(evt) {
    debugger;
      arguments.callee.base.apply(this,arguments);
      var codes = evt.commandCodes(), cmd = codes[0];
      if (cmd === 'backspace') {
        Artifix.getPath('mobilePage.mainPane.canvasView').doRemoveChild(this.objectRemoval);
        return NO;
      }
      return NO;
    }
};
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('artifix_framework');