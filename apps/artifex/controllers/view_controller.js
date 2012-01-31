Artifex.viewController = SC.TreeController.create({

  content: null,

  treeItemIsGrouped: YES,
  treeItemChildrenKey: 'sourceGroups',

  allowsEmptySelection: NO,
  allowsMultipleSelection: NO,

  selectionObserver: function() {

  }.observes('selection')
});