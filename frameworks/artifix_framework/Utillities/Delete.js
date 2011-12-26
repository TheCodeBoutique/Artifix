ART.Delete = {
  objectRemoval:'',
  keyDown: function(evt) {
    debugger;
      sc_super();
      var codes = evt.commandCodes(), cmd = codes[0];
      if (cmd === 'backspace') {
        Artifix.getPath('mobilePage.mainPane.canvasView').doRemoveChild(this.objectRemoval);
        return NO;
      }
      return NO;
    }
};
