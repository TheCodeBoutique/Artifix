ART.SizingView = SC.View.extend({
  childViews:['sizingCell','positionCell'],

  sizingCell:SC.View.design({
    classNames:['sizing-sell'],
    layout:{top:15,height:82,left:0,right:0},
    childViews:['width', 'height', 'title'],


    title:SC.LabelView.design({
      classNames:['text_small'],
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
    childViews:['top', 'bottom','title','left','right','anchorView','anchorLabel','divider','centerY','centerX'], //anchorView

    title:SC.LabelView.design({
      classNames:['text_small'],
      layout: { top: 20, height: 24, left: 10, width: 200 },
      needsEllipsis:YES,
      escapeHTML: NO,
      value:"Position".loc()
    }),

    anchorLabel:SC.LabelView.design({
      classNames:['text_small'],
      layout: { top:120, left:10, width: 250, height: 24 },
      value:"Anchor View".loc()
    }),

    centerY:SC.TextFieldView.design(ART.Adjustment, {
      layout:{top:60,left:100,height:20,width:73},
      isVisibleBinding:SC.Binding.oneWay('ART.objectSelectionController.isCenter'),
      hint:'centerY',
      valueBinding:SC.Binding.oneWay('ART.objectSelectionController.content').transform(function(val) {
        if (!val || SC.typeOf(val) === SC.T_STRING) return;
        return val.getPath('layout.centerY');
      })
    }),

    centerX:SC.TextFieldView.design(ART.Adjustment, {
      layout:{top:60,right:20,height:20,width:73},
      isVisibleBinding:SC.Binding.oneWay('ART.objectSelectionController.isCenter'),
      hint:'centerX',
      valueBinding:SC.Binding.oneWay('ART.objectSelectionController.content').transform(function(val) {
        if (!val || SC.typeOf(val) === SC.T_STRING) return;
        return val.getPath('layout.centerX');
      })
    }),


    top:SC.TextFieldView.design(ART.Adjustment, {
      layout:{top:30,left:100,height:20,width:73},
      isVisibleBinding:SC.Binding.oneWay('ART.objectSelectionController.isCenter').not(),
      hint:'top',
      valueBinding:SC.Binding.oneWay('ART.objectSelectionController.content').transform(function(val) {
        if (!val || SC.typeOf(val) === SC.T_STRING) return;
        return val.getPath('layout.top');
      })
    }),

    bottom:SC.TextFieldView.design(ART.Adjustment, {
      layout:{top:30,right:20,height:20,width:73},
      isVisibleBinding:SC.Binding.oneWay('ART.objectSelectionController.isCenter').not(),
      hint:'bottom',
      valueBinding:SC.Binding.oneWay('ART.objectSelectionController.content').transform(function(val) {
        if (!val || SC.typeOf(val) === SC.T_STRING) return;
        return val.getPath('layout.bottom');
      })
    }),

    left:SC.TextFieldView.design(ART.Adjustment, {
      layout:{top:67,left:100,height:20,width:73},
      isVisibleBinding:SC.Binding.oneWay('ART.objectSelectionController.isCenter').not(),
      hint:'left',
      valueBinding:SC.Binding.oneWay('ART.objectSelectionController.content').transform(function(val) {
        if (!val || SC.typeOf(val) === SC.T_STRING) return;
        return val.getPath('layout.left');
      })
    }),

    right:SC.TextFieldView.design(ART.Adjustment, {
      layout:{top:67,right:20,height:20,width:73},
      isVisibleBinding:SC.Binding.oneWay('ART.objectSelectionController.isCenter').not(),
      hint:'right',
      isEnabled:YES,
      valueBinding:SC.Binding.oneWay('ART.objectSelectionController.content').transform(function(val) {
        if (!val || SC.typeOf(val) === SC.T_STRING) return;
        return val.getPath('layout.right');
      })
    }),
    divider:ART.DividerView.create({
      layout:{top:112,height:1,left:0,right:0}
    }),
    anchorView:ART.AnchorView.create({
      layout:{bottom:10,right:20,height:128,width:240}
    }),
  })
});