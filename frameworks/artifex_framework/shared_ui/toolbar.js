// ==========================================================================
// UI Component:   ART.ToolbarView
// Copyright: ©2011 The Code Boutique, LLC.
// ==========================================================================
// globals ART

// @class
// This component is the ToolbarView but it is mapping the default SC.ToolbarView to the ART namespace.
//  Its purpose is a shared component for our drag and drop components in the Interface Builder.

// @author Chad Eubanks
// @author Kyle Carriedo
// @extends SC.Button

sc_require('Utillities/DropZone');

ART.ToolbarView = SC.ToolbarView.extend(ART.DropZone,{
  classNames: ['art_toolbar'],
  childViews:['resize'],
  layout: {},

  resize:SC.View.design(SCUI.Resizable, {
    classNames:['handles'],
    backgroundColor:"black",
    layout:{bottom:0,right:0,height:5,width:5},
  })
});
