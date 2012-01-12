// ==========================================================================
// UI Component:   ART.ButtonView
// Copyright: ©2011 The Code Boutique, LLC.
// ==========================================================================
// globals ART

// @class
// This component is the ButtonView but it is mapping the default SC.Button to the ART namespace.

// @author Chad Eubanks
// @extends SC.Button
  ART.ButtonView = SC.ButtonView.extend({             //SCUI.Mobility,    //ART.Draggable,
  classNames: 'art_button'.w(),
  childViews:['resize'],
  layout: {},
  action: '',
  target: '',
  title:'',
  isEnabled:NO,
  resize:SC.View.design(SCUI.Resizable, {
    classNames:['handles'],
    backgroundColor:"black",
    layout:{bottom:0,right:0,height:5,width:5},
  })
});
