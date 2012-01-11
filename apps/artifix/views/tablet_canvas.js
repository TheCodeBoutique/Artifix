//These can be moved to separate files if we want
ART.TabletCanvas = SC.View.extend({
  layout:{top:0,bottom:0,left:0,right:0},
  childViews:['tabletBackground','canvasView'],

  tabletBackground:SC.ImageView.design({
    layout: { centerX: 0, centerY: 0, height: 554, width: 650 },
    useCanvas: YES,
    backgroundColor:'cyan'
//    value: sc_static('images/mobile_blueprint.png')
  }),

  canvasView:SC.View.design(ART.DropZone, {
    layout: { centerX: 0, centerY: 0, height: 380, width: 256 },
    childViews:[],
    doRemoveChild:function(view) {
      return this.removeChild(view);
    },
    mouseDown:function(evt) {
      var obj = ART.objectSelectionController.get('content');
      if (obj === null || obj === "button") {
        return NO;
      }
      obj.$().removeClass('selection-class');
    }
  })
});