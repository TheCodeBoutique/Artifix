ART.AnchorView = SC.View.extend(SC.ContentDisplay,{
  classNames:['anchor-view'],
  childViews:['anchorTopLeft','anchorTopRight', 'anchorBottomLeft','anchorBottomRight','anchorCenter'],
  backgroundColor:"white",
  displayProperties: ['content'],
  contentBinding:'ART.objectSelectionController.content',

  mouseDown:function(evt) {

    if (SC.$(evt.target).hasClass('anchor-selected')) {

      SC.$(evt.target).removeClass('anchor-selected').addClass('anchor-selection');

      return YES;

    } else if (SC.$(evt.target).hasClass('anchor-selection')) {
      var content = this.get('content');

      this.convertLayoutToCustomLayout(content,{bottom:content.layout.top,right:content.layout.left,height:content.layout.height,width:content.layout.width});

      SC.$(evt.target).addClass('anchor-selected');

      return YES;
    }
    return NO;
  },
  convertLayoutToCustomLayout: function(object, layoutParams){
    SC.info("OLD layout = top:%@,left:%@,height:%@,width:%@,".fmt(object.layout.top,object.layout.left,object.layout.height,object.layout.width));
    SC.info("New layout = bottom:%@,right:%@,height:%@,width:%@,".fmt(layoutParams.bottom,layoutParams.right,layoutParams.height,layoutParams.width));
    //replace the old layout with the anchor layout but keep the height and width;
    var content =  object.set('layout',layoutParams);
    ART.objectSelectionController.set('content',content);
  },


  anchorCenter:SC.View.design({
    classNames:['anchor-selection','anchor-center'],
    layout:{centerX:0, centerY:0,width:120,height:64},
  }),


  anchorTopLeft:SC.View.design({
    classNames:['anchor-selection'],
    layout:{top:0, left:0,width:120,height:64},

  }),

  anchorTopRight:SC.View.design({
    classNames:['anchor-selection'],
    layout:{top:0, right:0,width:120,height:64},
  }),

  anchorBottomLeft:SC.View.design({
    classNames:['anchor-selection'],
    layout:{bottom:0,left:0,width:120,height:64},
  }),

  anchorBottomRight:SC.View.design({
    classNames:['anchor-selection'],
    layout:{bottom:0,right:0,width:120,height:64},
  })


});