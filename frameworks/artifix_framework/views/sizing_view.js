ART.SizingView = SC.View.extend({
  childViews:['sizingCell','positionCell'],

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
  }),

  positionCell:SC.View.design({
    layout:{top:83,bottom:0,left:0,right:0},
    childViews:['top', 'bottom','title','left','right'],

    title:SC.LabelView.design({
      layout: { top: 20, height: 24, left: 10, width: 200 },
      needsEllipsis:YES,
      escapeHTML: NO,
      value:"Position".loc()
    }),

    top:SC.TextFieldView.design(ART.Adjustment, {
      layout:{top:30,left:100,height:20,width:73},
      hint:'top',
      valueBinding:SC.Binding.oneWay('ART.objectSelectionController.content').transform(function(val) {
        if (!val || val === 'button') return;
        return val.getPath('layout.top');
      })
    }),

    bottom:SC.TextFieldView.design(ART.Adjustment,ART.Disable, {
      layout:{top:30,right:20,height:20,width:73},
      hint:'bottom',

      valueBinding:SC.Binding.oneWay('ART.objectSelectionController.content').transform(function(val) {
        if (!val || val === 'button') return;
        return val.getPath('layout.bottom');
      })
    }),

    left:SC.TextFieldView.design(ART.Adjustment, {
      layout:{top:80,left:100,height:20,width:73},
      hint:'left',
      valueBinding:SC.Binding.oneWay('ART.objectSelectionController.content').transform(function(val) {
        if (!val || val === 'button') return;
        return val.getPath('layout.top');
      })
    }),

    right:SC.TextFieldView.design(ART.Adjustment,ART.Disable, {
      layout:{top:80,right:20,height:20,width:73},
      hint:'right',
      isEnabled:YES,
      valueBinding:SC.Binding.oneWay('ART.objectSelectionController.content').transform(function(val) {
        if (!val || val === 'button') return;
        return val.getPath('layout.bottom');
      })
    })

  })
});