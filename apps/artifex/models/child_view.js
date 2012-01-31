// ==========================================================================
// Project:   Artifex.ExistingApp
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Artifex */

/** @class

    (Document your Model here)

 @extends SC.Record
 @version 0.1
 */
Artifex.ChildView = SC.Record.extend(SC.TreeItemContent,{

  count: 0, // no buddies in a buddy...
  treeItemChildren: [],
  treeItemIsExpanded: NO,
  parent:SC.Record.attr(Boolean),

  buddyGroup: SC.Record.toOne('Artifex.ParentView'),

  name: SC.Record.attr(String)

});
