ART.LabelView = SC.LabelView.extend({
classNames: 'text_medium'.w(),
childViews:['resize'],
layout: {},
value:'Title',
isSelectable:NO,
needsEllipsis:NO,
resize:SC.View.design(SCUI.Resizable, {
  classNames:['handles'],
  layout:{bottom:0,right:0,height:5,width:5},
})
});
