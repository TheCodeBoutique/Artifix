// ==========================================================================
// UI Component:   ART.ButtonView
// Copyright: ©2011 The Code Boutique, LLC.
// ==========================================================================
// globals ART

// @class
// This component is the ButtonView but it is mapping the default SC.Button to the ART namespace.

// @author Chad Eubanks
// @extends SC.Button


ART.ButtonView = SC.ButtonView.extend(SCUI.Mobility,{
    classNames: 'art_button'.w(),
    layout: {},
    action: '',
    target: '',
    title: 'button',
});