ART.AnchorView = SC.View.extend({
  classNames:['anchor-view'],
  backgroundColor:"white",


  mouseDown:function(evt) {
//    var content = this.get('content');
    var content = ART.objectSelectionController.get('content');
    if (!content || SC.typeOf(content) === SC.T_STRING) return;


    var parentHeight = content.getPath('parentView.frame.height'),
        parentWidth = content.getPath('parentView.frame.width'),
        childYCord = content.getPath('frame.y'),
        childXCord = content.getPath('frame.x'),
        childHeight = content.getPath('frame.height'),
        childWidth = content.getPath('frame.width'),

       bottom = (parentHeight - childYCord) - childHeight,
       right = (parentWidth - childXCord) - childWidth;

    if (SC.$(evt.target).hasClass('anchor-selected')) {
      SC.$(evt.target).removeClass('anchor-selected').addClass('anchor-selection');


        ART.objectSelectionController.set('isCenter',NO);

      ART.doRestObjectSelection(content);
      Artifex.partsController.set('isMovementLocked', NO);
      this.convertLayoutToCustomLayout(content, {top:childYCord, left:childXCord,height:content.layout.height, width:content.layout.width });

      return YES;

    } else if (SC.$(evt.target).hasClass('anchor-selection')) {
      var selectionHemispheare = SC.$(evt.target);


      if (selectionHemispheare.hasClass('anchor-top-left')) {
        ART.doRestObjectSelection(content);
        //Top Left
        Artifex.partsController.set('isMovementLocked', YES);
        this.convertLayoutToCustomLayout(content, {top:childYCord, left:childXCord,height:content.layout.height, width:content.layout.width });
      } else if (selectionHemispheare.hasClass('anchor-top-right')) {
        ART.doRestObjectSelection(content);
        //Top right
        Artifex.partsController.set('isMovementLocked', YES);
        this.convertLayoutToCustomLayout(content, {top:childYCord, right:right, height:content.layout.height, width:content.layout.width });
      }

      else if (selectionHemispheare.hasClass('anchor-bottom-left')) {
        ART.doRestObjectSelection(content);
        //bottom left
        Artifex.partsController.set('isMovementLocked', YES);
        this.convertLayoutToCustomLayout(content, {bottom:bottom, left:childXCord, height:content.layout.height, width:content.layout.width });
      }
      else if (selectionHemispheare.hasClass('anchor-bottom-right')) {
        ART.doRestObjectSelection(content);
        //bottom right
        Artifex.partsController.set('isMovementLocked', YES);
        this.convertLayoutToCustomLayout(content, {bottom:bottom, right:right, height:content.layout.height, width:content.layout.width });
      } else if (selectionHemispheare.hasClass('anchor-center')) {
        ART.doRestObjectSelection(content);
        //CenterX CenterY
        ART.objectSelectionController.set('isCenter',YES);
        Artifex.partsController.set('isMovementLocked', YES);
        this.convertLayoutToCustomLayout(content, {centerX:0, centerY:0, height:content.layout.height, width:content.layout.width });
      }

      SC.$(evt.target).addClass('anchor-selected');

      return YES;
    }
    return NO;
  },
  convertLayoutToCustomLayout: function(object, layoutParams) {
    SC.info("OLD layout = top:%@,left:%@,height:%@,width:%@,".fmt(object.layout.top, object.layout.left, object.layout.height, object.layout.width));
    SC.info("New layout = bottom:%@,right:%@,height:%@,width:%@,".fmt(layoutParams.bottom, layoutParams.right, layoutParams.height, layoutParams.width));

    //replace the old layout with the anchor layout but keep the height and width;
    var content = object.set('layout', layoutParams);
    ART.objectSelectionController.set('content', content);
  },

  render:function(context){
    context.push([
        '<div class="anchor-center anchor-selection" style="position:absolute; top:31px;left:61px;width:120px;height:64px;">','</div>',
        '<div class="anchor-selection anchor-top-left" style="position:absolute; top:0px;left:0px;width:120px;height:64px;">','</div>',
        '<div class="anchor-selection anchor-top-right" style="position:absolute; top:0px; right:0px;width:120px;height:64px;">','</div>',
        '<div class="anchor-selection anchor-bottom-left" style="position:absolute; bottom:0px;left:0px;width:120px;height:64px;">','</div>',
        '<div class="anchor-selection anchor-bottom-right" style="position:absolute; bottom:0px;right:0px;width:120px;height:64px;">','</div>'
    ].join(''))

  },


//  anchorCenter:SC.View.design({
//    classNames:['anchor-selection','anchor-center'],
//    layout:{centerX:0, centerY:0,width:120,height:64},
//  }),
//
//
//  anchorTopLeft:SC.View.design({
//    classNames:['anchor-selection','anchor-top-left'],
//    layout:{top:0, left:0,width:120,height:64},
//
//  }),
//
//  anchorTopRight:SC.View.design({
//    classNames:['anchor-selection','anchor-top-right'],
//    layout:{top:0, right:0,width:120,height:64},
//  }),
//
//  anchorBottomLeft:SC.View.design({
//    classNames:['anchor-selection','anchor-bottom-left'],
//    layout:{bottom:0,left:0,width:120,height:64},
//  }),
//
//  anchorBottomRight:SC.View.design({
//    classNames:['anchor-selection','anchor-bottom-right'],
//    layout:{bottom:0,right:0,width:120,height:64},
//  })


});