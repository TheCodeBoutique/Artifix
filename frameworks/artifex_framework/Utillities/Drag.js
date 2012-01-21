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
          instanceView = ART.ButtonView.create(ART.PartsDrag, {
            layout:{top:175,left:72,height:30,width:120},
            isEnabled:NO
          });
          break;
        case "label":
          instanceView = ART.LabelView.create(ART.PartsDrag, {
            layout:{top:175,left:72,height:30,width:120}
          });
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