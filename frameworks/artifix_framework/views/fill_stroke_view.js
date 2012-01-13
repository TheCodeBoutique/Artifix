ART.FillStrokeView = SC.View.extend({
  layout: { top: 0, left: 0, right: 0, bottom: 0 },
  childViews: ["fillStyleText", "fillStyleButton"],
  
  fillStyleText: SC.LabelView.design({
    layout: { top: 50, left: 20, height: 20, width: 100 },
    value: 'Fill Style:'
  }),
  
  fillStyleButton: SC.SelectButtonView.design({
    classNames: 'select_button'.w(),
    layout: { top: 50, left: 130, width: 200, height: 25 },
    objects: [{ title: "None", icon: 'select-button-icon'},
    { title: "Low", icon: 'select-button-icon' },
    { title: "Medium", icon: 'select-button-icon' },
    { title: "High", icon: 'select-button-icon' },
    { title: "Type 2", icon: 'select-button-icon' }],
    nameKey: 'title',
    value: 'Type 2',
    valueKey: 'title',
    checkboxEnabled: NO
  })  
  
});