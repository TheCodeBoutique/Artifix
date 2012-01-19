//Mixin is used to drag about any object that its mixin with
ART.Draggable = {
  /**
   @type Boolean
   @default NO
   */
  isAnchored: NO,

  /** @private */
  _mouseOffsetX: null,

  /** @private */
  _mouseOffsetY: null,

  /** @private
   Drag & drop palette to new position.
   */
  mouseDown: function(evt) {
    var f = this.get('frame');
    this._mouseOffsetX = f ? (f.x - evt.pageX) : 0;
    this._mouseOffsetY = f ? (f.y - evt.pageY) : 0;
    return YES;
  },

  /** @private */
  mouseDragged: function(evt) {
    if (!this.isAnchored) {
      this.set('layout', { width: this.layout.width, height: this.layout.height, left: this._mouseOffsetX + evt.pageX, top: this._mouseOffsetY + evt.pageY });
      this.updateLayout();
    }
    return YES;
  },

  /** @private */
  touchStart: function(evt) {
    return this.mouseDown(evt);
  },

  /** @private */
  touchesDragged: function(evt) {
    return this.mouseDragged(evt);
  }
};