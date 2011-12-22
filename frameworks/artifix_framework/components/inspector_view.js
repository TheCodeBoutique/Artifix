// ==========================================================================
// UI Component:   ART.InspectorView
// Copyright: ©2011 The Code Boutique, LLC.
// ==========================================================================
// globals ART

// @class
// This component is the InspectorView used for changing a user interfaces' component properties. 

// @author Chad Eubanks
// @author Kyle Carriedo
// @extends SC.View


ART.InspectorView = SC.PalettePane.extend(
  /** @scope ART.InspectorView.prototype */{
  classNames: 'silver_background'.w(),
      
  contentView: SC.View.extend({
    childViews: ["top", "middle"],
    
    top: SC.ToolbarView.design({
      classNames: 'top_bar'.w(),
      layout: { top: 0, left: 0, right: 0, height: 25 },
      childViews: ["left", "right"],
      
      left: SC.ButtonView.design({
        classNames: 'blue_button_sml'.w(),
        layout: { centerY: 0, left: 20, height: 26, width: 82},
        title: 'Parts',
        action: 'Parts',
        target: 'ART.inspectorViewController'
      }),
      
      right: SC.ButtonView.design({
        classNames: 'blue_button_sml'.w(),
        layout: { centerY: 0, right: 20, height: 26, width: 82},
        title: 'Views',
        action: 'Views',
        target: 'ART.inspectorViewController'
      }),
      
    }),
    
    middle: SC.ContainerView.design({
			nowShowingBinding: 'ART.inspectorViewController.nowShowing',
			layout: { left: 0, top: 36, bottom: 0, right: 0 }
		}),
     
  })  
     

});