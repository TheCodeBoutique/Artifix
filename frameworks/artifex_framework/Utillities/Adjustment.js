/**
 * Using this mixin ONLY with textfield's that contain a hint
 * @param hint is required if there is no hint, animation will not occur
 */
ART.Adjustment = {
  keyDown: function(evt) {
    if (!this.get('hint')) return;
    var codes = evt.commandCodes(), cmd = codes[0];
    if (cmd === 'return') {
      if (this.get('hint') !== 'height' || this.get('hint') !== 'width') {
        ART.objectSelectionController.get('content').animate(this.get('hint'),this.get('value'),{duration:.3, timing:'ease-in-out'});
      } else {
        ART.objectSelectionController.get('content').adjust(this.get('hint'), this.get('value'));
      }
      return YES;
    }
    return sc_super();
  }
};
