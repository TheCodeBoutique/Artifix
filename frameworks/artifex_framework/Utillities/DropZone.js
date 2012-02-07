/**
 * Drop zone mixin is used to take the object being dragged
 * and apply it the childViews array[].
 */
ART.DropZone = {
  isDropTarget: YES,
  dragStarted: function(draggedObj, moveEvent) {
  },
  dragEnded: function(dragObj, moveEvent) {
  },

  computeDragOperations: function(dragObj, moveEvent) {
    return SC.DRAG_ANY; // any drag operation accepted
  },
  acceptDragOperation: function(dragObj, dragOp) {
    return YES;
  },

  dragEntered: function(dragObj, moveEvent) {
  },
  dragUpdated: function(dragObj, moveEvent) {
  },
  dragExited: function(dragObj, moveEvent) {
  },
  performDragOperation: function(dragObj, dragOp) {
    var view = dragObj.get('anchorView');
//    if (view && (view instanceof Zone.TodosList)) {
//      Zone.doBuildRecords(view);
//    }

    this.appendChild(view);
    this.buildInChild(view);
    return dragOp;
  }
};