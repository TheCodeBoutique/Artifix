ART.AnchorView = SC.View.extend({
  classNames:['anchor-view'],
  childViews:['anchorTop','anchorLeft', 'stretchView'],
  backgroundColor:"white",
  mouseDown:function(evt) {

    if (SC.$(evt.target).hasClass('anchor-selected')) {
      SC.$(evt.target).removeClass('anchor-selected').addClass('anchor-selection');
      return YES;
    } else if (SC.$(evt.target).hasClass('anchor-selection')) {
      SC.$(evt.target).addClass('anchor-selected');
      return YES;
    }
    return NO;
  },


  anchorTop:SC.View.design({
    classNames:['anchor-selection'],
    layout:{centerX:0, top:0,width:3,height:30},

  }),

  anchorLeft:SC.View.design({
    classNames:['anchor-selection'],
    layout:{centerY:0, left:0,width:35,height:3},
  }),

  stretchView:SC.View.design({
    classNames:['anchor-view'],
    layout:{top:30,left:35,bottom:30,right:35},
  })


});