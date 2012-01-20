ART.CSSGenerator = {

  cssStyle:'',

  doApplyCSS:function() {
    var style = this.get('cssStyle');
    var obj = ART.objectSelectionController.get('content');
    var backgroundColor = Artifix.partsController.get('backgroundColor');

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
      default:
        ""
    }

  }.observes('value', 'Artifix.partsController.backgroundColor'),

};
