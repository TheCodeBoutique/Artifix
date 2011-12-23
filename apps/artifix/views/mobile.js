// ==========================================================================
// Project:   Artifix - mobilePage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Artifix */

// This page describes the main user interface for your application.  
Artifix.mobilePage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    classNames: 'grid_base'.w(),
    childViews: ["topBar", "mobileBluePrint", "canvasView"],
    
    topBar: SC.ToolbarView.design({
      classNames: 'top_bar'.w(),
      layout: { top: 0, left: 0, right: 0, height: 70 },
      childViews: ["artifixLogo", "inspectorButton", "tmpUIInspectorButton", "tmpAnimationsButton"],
      
      artifixLogo: SC.ImageView.design({
        layout: { top: 0, left: 0, width: 172, height: 71 },
        useCanvas: YES,
        value: sc_static('images/artifix_logo.png')
      }),
      
      inspectorButton: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: { centerY: 0, right: 350, height: 26, width: 135},
        title: 'Inspector',
        action: 'troggleUIInspector',
        target: 'Artifix.statechart'
      }),
      
      tmpUIInspectorButton: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: { centerY: 0, right: 200, height: 26, width: 135},
        title: 'User Interface',
        action: 'myMethod',
        target: 'MyApp.Controller'
      }),
      
      tmpAnimationsButton: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: { centerY: 0, right: 50, height: 26, width: 135},
        title: 'Animation & View',
        action: 'myMethod',
        target: 'MyApp.Controller'
      }),
      
    }),
    
    mobileBluePrint: SC.ImageView.design({
      layout: { centerX: 0, centerY: 0, height: 554, width: 302 },
      useCanvas: YES,
      value: sc_static('images/mobile_blueprint.png')
    }),

    canvasView:SC.View.design(ART.DropZone,{
      layout: { centerX: 0, centerY: 0, height: 380, width: 256 },
      childViews:[],
    })
  })
});
