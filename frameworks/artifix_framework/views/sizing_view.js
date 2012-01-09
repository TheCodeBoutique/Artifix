ART.SizingView = SC.View.extend({
  childViews:['sizingCell'],

  sizingCell:SC.View.design({
    classNames:['sizing-sell'],
    layout:{top:15,height:82,left:0,right:0},
    childViews:['width', 'height','title'],

    title:SC.LabelView.design({
      layout: { centerY: 0, height: 24, left: 10, width: 200 },
      needsEllipsis:YES,
      escapeHTML: NO,
      value:"Size".loc()
    }),

    width:SC.TextFieldView.design(ART.Adjustment, {
      layout:{top:30,left:100,height:20,width:73},
      hint:'width',
      valueBinding:SC.Binding.oneWay('ART.objectSelectionController.content').transform(function(val) {
        if (!val || val === 'button') return;
        return val.getPath('layout.width');
      })
    }),
    height:SC.TextFieldView.design(ART.Adjustment, {
      layout:{top:30,right:20,height:20,width:73},
      hint:'height',
      valueBinding:SC.Binding.oneWay('ART.objectSelectionController.content').transform(function(val) {
        if (!val || val === 'button') return;
        return val.getPath('layout.height');
      })
    })
  })
});