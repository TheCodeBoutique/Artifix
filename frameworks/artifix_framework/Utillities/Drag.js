ART.Drag = {

    view:'',
    objectController: '',
    dataSource:'',
    ghostView:'',
    slideBack:YES,

  mouseDown: function(evt) {
    if(this.objectController){
      this.objectController.set('content', this.view);
    }

    SC.Drag.start({
      event: evt,
      source: this,
      ghost: YES,
      ghostView:this.ghostView ? this.ghostView : this,
      anchorView:this.view ? this.view : this,
      ghostOffset: { x: 0, y: 0 },
      dataSource:this.dataSource,
      slideBack:this.slideBack ? this.slideBack : YES
    });
  }
};