ART.DesktopCanvas = SC.View.extend({
  layout:{top:0,bottom:0,left:0,right:0},
  childViews:['desktopBackground','canvasView'],

  desktopBackground:SC.ImageView.design({
    layout: { centerX: 0, centerY: 0, height: 554, width: 302 },
    useCanvas: YES,
    backgroundColor:'black'
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
      //remove object from selection
      ART.objectSelectionController.set('content', null);
      obj.$().removeClass('selection-class');
    }
  })
});