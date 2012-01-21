ART.Delete = {
  objectRemoval:'',
  keyDown: function(evt) {
      sc_super();
      var codes = evt.commandCodes(), cmd = codes[0];
      if (cmd === 'backspace') {
        Artifex.getPath('mobilePage.mainPane.canvasView').doRemoveChild(this.objectRemoval);
        return NO;
      }
      return NO;
    }
};
