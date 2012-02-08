ART.Drag = {

  view:'',
  objectController: '',
  dataSource:'',
  ghostView:'',
  slideBack:YES,

  mouseDown: function(evt) {

    if (this.objectController) {
      this.objectController.set('content', this.view);
    }

    if (SC.typeOf(this.view) === SC.T_STRING) {
      var instanceView;
      switch (this.view) {
        case "button":
          instanceView = ART.ButtonView.create(SCUI.Mobility, {
            layout:{top:0,left:0,height:30,width:120},
            isEnabled:NO
          });
          break;
        case "label":
          instanceView = ART.LabelView.create(SCUI.Mobility, {
            layout:{top:0,left:0,height:30,width:120}
          });
          break;
        case "toolbar":
          instanceView = ART.ToolbarView.create(SCUI.Mobility, {
            layout:{top:15,left:3,height:30,width:253},
          });
          break;
        case "hrView":
          Artifex.viewController.set('isDraggingHrView', YES);
          instanceView = ART.HorzontalView.create({
            layout:{top:16,left:4,bottom:0,right:0}
          });
          this.objectController.set('content', instanceView);
          break;
        case 0:
          break;
        default:
          ""
      }
    }

    SC.Drag.start({
      event: evt,
      source: this,
      ghost: YES,
      ghostView:this.ghostView ? this.ghostView : this,
      anchorView:instanceView,
      ghostOffset: { x: 0, y: 0 },
      dataSource:this.dataSource,
      slideBack:this.slideBack ? this.slideBack : YES
    });

  }

};