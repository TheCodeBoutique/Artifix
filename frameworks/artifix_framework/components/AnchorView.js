ART.AnchorView = SC.View.extend(SC.ContentDisplay,{
  classNames:['anchor-view'],
  childViews:['anchorTopLeft','anchorTopRight', 'anchorBottomLeft','anchorBottomRight','anchorCenter'],
  backgroundColor:"white",
  displayProperties: ['content'],
  contentBinding:'ART.objectSelectionController.content',

  mouseDown:function(evt) {
     var content = this.get('content');
      //bottom
       var parentHeight = content.getPath('parentView.frame.height'),
            childYCord = content.getPath('frame.y'),
            childXCord = content.getPath('frame.x'),            
            childHeight = content.getPath('frame.height'),
            bottom = (parentHeight - childYCord) - childHeight;
     //right       
       var parentWidth = content.getPath('parentView.frame.width'),
             childXCord = content.getPath('frame.x'),
             childWidth = content.getPath('frame.width'),
             right = (parentWidth - childXCord) - childWidth;

    if (SC.$(evt.target).hasClass('anchor-selected')) {

      SC.$(evt.target).removeClass('anchor-selected').addClass('anchor-selection');
      
       ART.doRestObjectSelection(content);
       Artifix.partsController.set('isMovementLocked',NO);
       this.convertLayoutToCustomLayout(content, {top:childYCord, left:childXCord,height:content.layout.height, width:content.layout.width }); 

      return YES;

    } else if (SC.$(evt.target).hasClass('anchor-selection')) {
      var selectionHemispheare = SC.$(evt.target); 
      
             
      if(selectionHemispheare.hasClass('anchor-top-left')){  
        ART.doRestObjectSelection(content);     
         //Top Left
         Artifix.partsController.set('isMovementLocked',YES);
        this.convertLayoutToCustomLayout(content, {top:childYCord, left:childXCord,height:content.layout.height, width:content.layout.width }); 
      } else if (selectionHemispheare.hasClass('anchor-top-right')){
        //Top right
         Artifix.partsController.set('isMovementLocked',YES);
        this.convertLayoutToCustomLayout(content, {bottom:bottom, right:right, height:content.layout.height, width:content.layout.width });
      }
      
      else if (selectionHemispheare.hasClass('anchor-bottom-left')){
        ART.doRestObjectSelection(content);
        //bottom left
         Artifix.partsController.set('isMovementLocked',YES);
        this.convertLayoutToCustomLayout(content, {bottom:bottom, left:childXCord, height:content.layout.height, width:content.layout.width });
      }
      else if (selectionHemispheare.hasClass('anchor-bottom-right')){
        ART.doRestObjectSelection(content);
        //bottom right
         Artifix.partsController.set('isMovementLocked',YES);
        this.convertLayoutToCustomLayout(content, {bottom:bottom, right:right, height:content.layout.height, width:content.layout.width });
      }

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
    classNames:['anchor-selection','anchor-top-left'],
    layout:{top:0, left:0,width:120,height:64},

  }),

  anchorTopRight:SC.View.design({
    classNames:['anchor-selection','anchor-top-right'],
    layout:{top:0, right:0,width:120,height:64},
  }),

  anchorBottomLeft:SC.View.design({
    classNames:['anchor-selection','anchor-bottom-left'],
    layout:{bottom:0,left:0,width:120,height:64},
  }),

  anchorBottomRight:SC.View.design({
    classNames:['anchor-selection','anchor-bottom-right'],
    layout:{bottom:0,right:0,width:120,height:64},
  })


});