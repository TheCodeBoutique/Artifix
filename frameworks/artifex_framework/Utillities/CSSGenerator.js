ART.CSSGenerator = {

  cssStyle:'',

  doApplyCSS:function() {
    var style = this.get('cssStyle');
    var obj = ART.objectSelectionController.get('content');
    var backgroundColor = Artifex.partsController.get('backgroundColor');
    var fontColor = Artifex.partsController.get('fontColor');

    if (!obj) return;

    switch (style) {
      case "opacity":
        obj.$().css('opacity', this.get('value') + '!important');
        break;
      case "background":
        obj.$().css('background', backgroundColor);
        break;
      case "border":
        obj.$().css('border-radius', this.get('value'));
        break;
      case "font":
        obj.$().css('font', fontColor);
        break;  
      default:
        ""
    }

  }.observes('value', 'Artifex.partsController.backgroundColor'),

};
