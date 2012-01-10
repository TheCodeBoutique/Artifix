// ==========================================================================
// UI Component:   ART.ButtonView
// Copyright: ©2011 The Code Boutique, LLC.
// ==========================================================================
// globals ART

// @class
// This component is the ButtonView but it is mapping the default SC.Button to the ART namespace.

// @author Chad Eubanks
// @extends SC.Button
ART.ButtonView = SC.ButtonView.extend({             //SCUI.Mobility,    //ART.Draggable,
  classNames: 'art_button'.w(),
  childViews:['resize'],
  layout: {},
  action: '',
  target: '',
  title:'',
  isEnabled:NO,
  resize:SC.View.design(SCUI.Resizable, {
    classNames:['handles'],
    backgroundColor:"black",
    layout:{bottom:0,right:0,height:5,width:5},
  }),


  isAnchoredBinding: SC.Binding.oneWay("Artifix.partsController.isMovementLocked"),

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
});
