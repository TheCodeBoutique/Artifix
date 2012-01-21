/**
 * This mixin checks the layout properties of the object and disables it it does not contain that prop
 *
 */
ART.Disable = {

  doCheckLayout:function() {
     if(!ART.objectSelectionController.get('content')) return;

    var selectedObject = ART.objectSelectionController.get('content');

    var hint = this.get('hint'),
        value =  this.get('value'),
        layout = selectedObject.get('layout'),
        height = (layout.height && hint === "height".loc()) ? this.set('isEnabled', YES) : this.set('isEnabled', NO),
        width = (layout.width && hint === "width".loc()) ? this.set('isEnabled', YES) : this.set('isEnabled', NO),
        top = (layout.top && hint === "top".loc()) ? this.set('isEnabled', YES) : this.set('isEnabled', NO),
        left = (layout.left && hint === "left".loc()) ? this.set('isEnabled', YES) : this.set('isEnabled', NO),
        right = (layout.right && hint === "right".loc()) ? this.set('isEnabled', YES) : this.set('isEnabled', NO),
        bottom = (layout.bottom && hint === "bottom".loc()) ? layout.bottom : this.set('isEnabled', NO);

  }.observes('.value', '.hint')

};
