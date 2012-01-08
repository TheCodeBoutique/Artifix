ART.AdjustmentView = SC.View.extend({
	classNames:['adjustment-view'],
  layout:{top:20,bottom:0,right:0,left:0},
  childViews:['size','position'],

  size:SC.View.design({
    layout:{top:0,height:56,left:0,right:0},
    childViews:['title','width','height'],

    title:SC.LabelView.design({
      classNames:['pane-description'],
      layout: { centerY: 0, height: 24, left: 20, width: 200 },
      needsEllipsis:YES,
      escapeHTML: NO,
      isTextSelectable: YES,
      value:"Size".loc()
    }),

    width:ART.PositionChanger.create({
      layout:{top:10,left:70,width:75,height:41},
      title:"Width",
      position:"width",
      objectBinding:'ART.objectSelectionController.content'
    }),
    height:ART.PositionChanger.create({
      layout:{top:10,right:40,width:75,height:41},
      title:"Height",
      position:"height",
      objectBinding:SC.Binding.oneWay('ART.objectSelectionController.content')
    })
  }),

  position:SC.View.design({
    layout:{top:60,bottom:0},
  })
});