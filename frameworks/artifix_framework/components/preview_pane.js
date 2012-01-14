ART.PreviewPane = SC.View.extend({
  classNames: ['gray_out'],
  layout: {top: 0, left: 0, right: 0, bottom: 0},
  render:function(context){
    context.push('<div class="exit-icon">,</div>');
  },
  mouseDown:function(evt){
    debugger;
    var children = this.childViews.firstObject().childViews;
    var IBChildren = Artifix.getPath('interfaceBuilder.mainPane.containerView.contentView.canvasView');
    IBChildren.replaceAllChildren(children);
    Artifix.interfaceBuilder.mainPane.buildOutChild(this);

  },

  childViews:[],

});
