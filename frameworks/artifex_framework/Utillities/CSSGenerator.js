ART.CSSGenerator = {

  cssStyle:'',

  //this observes value changes when using a slider views
  doApplyCSSValue:function(){
    var style = this.get('cssStyle');
    var obj = ART.objectSelectionController.get('content');

    if (!obj) return;

    if(style === "opacity") {
      obj.$().css('opacity', this.get('value') + '!important');
    } else {
      obj.$().css('border-radius', this.get('value'));
    }

  }.observes('value'),

  // observes changes to colors based on color picker
  doApplyCSSStyle:function(){
    var style = this.get('cssStyle');
    var obj = ART.objectSelectionController.get('content');
    var backgroundColor = Artifex.partsController.get('backgroundColor');
    var fontColor = Artifex.partsController.get('fontColor');
    var currentEvent = Artifex.partsController.get('currentEvent');

     if (!obj) return;

    if(currentEvent === "background" && style === "background" ) {
      obj.$().css('background', backgroundColor);

    } else if(currentEvent === "font" && style === "font" ) {
      obj.$().css('color', fontColor + '!important');
    }

  }.observes('Artifex.partsController.currentEvent', 'Artifex.partsController.fontColor', 'Artifex.partsController.backgroundColor')
};
