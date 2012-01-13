//Used to bind and update the position cell. Note that the mixin must be added with .create() of that instance
//and not on the original object
ART.PartsDrag = {
  /**
   * binding prop to to lock the positioning
   */
  isAnchoredBinding: SC.Binding.oneWay("Artifix.partsController.isMovementLocked"),
  isAnchoredSetBinding: SC.Binding.oneWay("Artifix.partsController.isAnchoredSet"),

  /** @private */
  _mouseOffsetX: null,

  /** @private */
  _mouseOffsetY: null,

  /** @private
   Drag & drop palette to new position.
   */
  mouseDown: function(evt) {
    //need to genersize this....
    ART.objectSelectionController.set('content', this);
    //set the selection class
    this.$().addClass('selection-class');
    var f = this.get('frame');
    if(this.getPath('layout.top')){
    this._mouseOffsetX = f ? (f.x - evt.pageX) : 0;
    this._mouseOffsetY = f ? (f.y - evt.pageY) : 0;
    } else {
      this._mouseOffsetX = f ? (f.x + evt.pageX) : 0;
      this._mouseOffsetY = f ? (f.y + evt.pageY) : 0;
    }
    return YES;
  },

  /** @private */
  mouseDragged: function(evt) {
    //not sure if the is the right way to do it we are getting the right results?
    ART.objectSelectionController.set('content', null);
    ART.objectSelectionController.set('content', this);

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