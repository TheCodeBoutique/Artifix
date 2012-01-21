// ==========================================================================
// Project:   Artifex - interfaceBuilder
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Artifex */
// This page describes the main user interface for your application.
Artifex.interfaceBuilder = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    classNames: 'grid_base'.w(),
    objectRemovalBinding:SC.Binding.oneWay('ART.objectSelectionController.content').notNull(),
    childViews: ["topBar", "containerView"],

    code:SC.View.design({
      layerId:"editor"

    }),

    topBar: SC.ToolbarView.design({
      classNames: 'top_bar'.w(),
      layout: { top: 0, left: 0, right: 0, height: 70 },
      childViews: ["artifexLogo", "tmpUIInspectorButton", "tmpInspectorButton", "tmpAnimationsButton","tmpPreview"],

      artifexLogo: SC.ImageView.design({
        layout: { centerY: 0, left: 10, width: 142, height: 56 },
        useCanvas: YES,
        value: sc_static('images/artifex_logo.png')
      }),

      tmpUIInspectorButton: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: { centerY: 0, right: 350, height: 26, width: 135},
        title: 'UI Components',
        action: 'troggleUIInspector',
        target: 'Artifex.statechart',
        isDefault:NO,
      }),

      tmpInspectorButton: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: { centerY: 0, right: 200, height: 26, width: 135},
        title: 'Inspector',
        action: 'troggleVisualInspector',
        target: 'Artifex.statechart'
      }),

      tmpAnimationsButton: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: { centerY: 0, right: 50, height: 26, width: 135},
        title: 'Animations & Views',
        action: 'troggleAnimationInspector',
        target: 'Artifex.statechart'
      }),
      
      tmpPreview: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: {centerY: 0, right: 500, height: 26, width: 135},
        title: 'Preview',
        action: 'previewIphone',
        target: 'Artifex.statechart'
      }),
      
    }),  
    
    containerView:SC.ContainerView.design({
      layout:{top:70,bottom:0,left:0,right:0},
      nowShowingBinding:'ART.devicesController.currentCanvas'
    })
    
  })
  
});
