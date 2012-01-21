// ==========================================================================
// Project:   Artifex - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Artifex */
// This page describes the main user interface for your application.
Artifex.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: ["topBar", "coldStartView"],

    topBar: SC.ToolbarView.design({
      classNames: 'top_bar'.w(),
      layout: { top: 0, left: 0, right: 0, height: 70 },
      childViews: ["artifexLogo"],

      artifexLogo: SC.ImageView.design({
        layout: { centerY: 0, left: 10, width: 142, height: 56 },
        useCanvas: YES,
        value: sc_static('images/artifex_logo.png')
      })
    }),

    coldStartView: ART.ColdStartView.design({
      layout: { centerX: 0, top: -450, height: 436, width: 730 }
    })
  })
});
