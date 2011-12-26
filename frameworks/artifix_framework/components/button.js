// ==========================================================================
// UI Component:   ART.ButtonView
// Copyright: ©2011 The Code Boutique, LLC.
// ==========================================================================
// globals ART

// @class
// This component is the ButtonView but it is mapping the default SC.Button to the ART namespace.

// @author Chad Eubanks
// @extends SC.Button
sc_require('Utillities/Delete');
ART.ButtonView = SC.ButtonView.extend(SCUI.Mobility, {
  classNames: 'art_button'.w(),
  childViews:['resize'],
  layout: {},
  action: '',
  target: '',
  title:'',

<<<<<<< HEAD
  resize:SC.View.design(SCUI.Resizable, {
    classNames:['handles'],
    backgroundColor:"black",
//  isVisibleBinding:'.parentView.isHovering',
    layout:{bottom:0,right:0,height:5,width:5},
  })

});
=======

ART.ButtonView = SC.ButtonView.extend(SCUI.Mobility,{
    classNames: 'art_button'.w(),
    layout: {},
    action: '',
    target: '',
    title: 'button',
});
>>>>>>> 89e7451c93c5abc547fb5671a7fb36bab6862e39
