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
Artifex.ParentView = SC.Record.extend(SC.TreeItemContent,
    /** @scope Chat.BuddyGroup.prototype */ {

      count: function() {
        return this.getPath('sources.length');
      }.property('*sources.length').cacheable(),

      sources: SC.Record.toMany('Artifex.ChildView'),

      parent:SC.Record.attr(Boolean),

      treeItemChildren: function() {
        return this.get('sources');
      }.property('sources').cacheable(),

      treeItemBranchIndexes: function() {
        return SC.IndexSet.EMPTY;
      },

      name: SC.Record.attr(String)
    });