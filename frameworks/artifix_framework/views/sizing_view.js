ART.SizingView = SC.View.create({
  childViews:['sizingCell'],

  sizingCell:SC.View.design({
    classNames:['sizing-sell'],
    layout:{top:15,height:82,left:0,right:0},
    childViews:['width'],

    width:ART.PositionChanger.create({
      layout:{top:30,left:120,height:40,width:73},
      objectBinding:SC.Binding.oneWay('ART.objectSelectionController.content'),
      position:'width',
      title:'Width'

    })
  })


});