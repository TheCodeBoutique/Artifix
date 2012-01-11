ART.ErrorPane = SC.PanelPane.extend({

  title:'',
  errorMessage:'',
  action:'',

  classNames: 'silver_background'.w(),

  contentView:SC.View.design({
    childViews:['title','description','reload'],

    title:SC.LabelView.design({
      layout: { top: 10, height: 24, centerX: 0, width: 200 },
      needsEllipsis:YES,
      isTextSelectable: YES,
      valueBinding:'parentView.parentView.title'
    }),

    description:SC.LabelView.design({
      layout: { centerY: 0, height: 24, centerX: 0, left: 20, right:20 },
      needsEllipsis:YES,
      escapeHTML: NO,
      isTextSelectable: YES,
      valueBinding:'parentView.parentView.errorMessage'
    }),

    reload:SC.ButtonView.design({
      layout:{bottom:5,centerX:0,width:200,height:27},
      title:"Reload".loc(),
      actionBinding:'parentView.action'
    })
  })
});