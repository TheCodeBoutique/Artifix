sc_require('Utillities/DropZone');
ART.HorzontalView = SC.ScrollView.design({
  hasHorizontalScroller: YES,
  hasVerticalScroller: NO,
  layout: { top: 0, bottom: 0, left: 0, right:0},

  contentView:SC.View.extend(SC.FlowedLayout, {
    classNames:['horizontal-view'],
    defaultFlowSpacing: {right:0},
    layoutDirection: SC.LAYOUT_HORIZONTAL,
    autoResize:YES,
    canWrap: NO,

    childViews: ['ViewOne','ViewTwo','ViewThree','ViewFour'],

    ViewOne:SC.View.extend(ART.DropZone,{
      classNames:['hr-view-container'],
      layout:{width:251,height:362},
      isDropTarget: YES,
      childViews:['emptyMessage'],

      emptyMessage:SC.LabelView.design({
        classNames:['text_medium'],
        textAlign:SC.ALIGN_CENTER,
        layout:{left:0, centerY:0,height:20,right:0},
        value:"View 1 drop elements"
      })
    }),

    ViewTwo:SC.View.extend(ART.DropZone,{
      classNames:['hr-view-container'],
      layout:{width:251,height:362},
      childViews:['emptyMessage'],

      emptyMessage:SC.LabelView.design({
        classNames:['text_medium'],
        textAlign:SC.ALIGN_CENTER,
        layout:{left:30, centerY:0,height:20,right:0},
        value:"View 2 drop elements"
      })
    }),

    ViewThree:SC.View.extend(ART.DropZone,{
      classNames:['hr-view-container'],
      layout:{width:251,height:362},
      childViews:['emptyMessage'],

      emptyMessage:SC.LabelView.design({
        classNames:['text_medium'],
        textAlign:SC.ALIGN_CENTER,
        layout:{left:0, centerY:0,height:20,right:0},
        value:"View 3 drop elements"
      })
    }),


    ViewFour:SC.View.extend(ART.DropZone,{
      classNames:['hr-view-container'],
      layout:{left:753,width:251,height:362},
      childViews:['emptyMessage'],

      emptyMessage:SC.LabelView.design({
        classNames:['text_medium'],
        textAlign:SC.ALIGN_CENTER,
        layout:{left:0, centerY:0,height:20,right:0},
        value:"View 4 drop elements"
      })
    })
  })

});
