// ==========================================================================
// Project:   Artifix - existingAppPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Artifix */

// This page describes the main user interface for your application.  
Artifix.existingAppPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    classNames: 'light_black'.w(),
    childViews: ["alert"],
    
    alert: SC.View.design({
      layout: { centerX: 0, centerY: 0, height: 290, width: 282 },
      classNames: 'alert'.w(),
      childViews: ["wrapper", "paneText", "cancel", "choose"],
      
      paneText: SC.LabelView.design({
        classNames: 'text_medium'.w(),
        layout: { top: 10, centerX: 0, height: 20, width: 100},
        value: 'Existing Apps'
      }),
      
      wrapper: SC.View.design({
        layout: { top: 30, bottom: 10, left: 10, right: 10 },    
        childViews: "appList".w(),
        
        appList: SC.ScrollView.design({
          classNames: 'app_scroll_list'.w(),
          hasHorizontalScroller: NO,
          layout: { top: 10, bottom: 55, left: 10, right: 0 },
        
          contentView: SC.ListView.design({
            classNames: 'app_list'.w(),
            contentBinding: 'Artifix.existingAppsController.arrangedObjects',
            selectionBinding: 'Artifix.existingAppsController.selection',
            contentValueKey: "appName",     
            contentIconKey: "appIcon",
            hasContentIcon:  YES,
            rowHeight: 60 
          })
        }),
        
      }),
      
      cancel: SC.ButtonView.design({
        classNames: 'gray_button_large'.w(),
        layout: { bottom: 15, left: 10, height: 30, width: 120},
        title: 'Cancel',
        action: 'reverseScale',
        target: 'Artifix.statechart'
      }),
      
      choose: SC.ButtonView.design({
        classNames: 'silver_button_large'.w(),
        layout: { bottom: 15, right: 10, height: 30, width: 120},
        title: 'Choose',
        action: 'myMethod',
        target: 'MyApp.Controller'
      }),
      
    }),
    
  })
  
});