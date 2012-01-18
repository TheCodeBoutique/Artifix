ART.ColorPickerView = SC.View.extend({
  classNames: 'silver_background'.w(),
  childViews:['colorPicker'],

  colorPicker:SCUI.ColorPicker.create({
    classNames:['color-picker'],
    valueBinding:"Artifix.partsController.backgroundColor",
    layout: {centerX: 0, top: 10, width: 160, height: 185},
  })
});