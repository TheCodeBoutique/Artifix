// ==========================================================================
// Project:   Artifex.ExisitingApp Fixtures
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Artifex */

sc_require('models/existing_app_model');

Artifex.ExistingApp.FIXTURES = [


  { "guid": "app-1",
    "appName": "Demo App Mobile",
    "appIcon": sc_static('/images/demo_app_icon.png')
  },

  { "guid": "app-2",
    "appName": "Demo App Tablet",
    "appIcon": sc_static('/images/demo_app_icon.png')
  },

  { "guid": "app-3",
    "appName": "Demo App Desktop",
    "appIcon": sc_static('/images/demo_app_icon.png')
  },

  { "guid": "app-4",
    "appName": "Demo App Artifex",
    "appIcon": sc_static('/images/demo_app_icon.png')
  }

];


sc_require('models/child_view');

Artifex.ChildView.FIXTURES = [
  {
    guid: 1,
    parent:NO,
    name: "",
    sourceGroup: 1
  },
  {
    guid: 2,
    parent:NO,
    name: "",
    sourceGroup: 1
  },
  {
    guid: 3,
    parent:NO,
    name: "",
    sourceGroup: 1
  },
  {
    guid: 4,
    parent:NO,
    name: "",
    sourceGroup: 1
  }
];

sc_require('models/parent_view');

Artifex.ParentView.FIXTURES = [
  {
    guid: 1,
    parent:YES,
    name: "Root View",
    sources: [1,2,3,4]
  }
];


  

