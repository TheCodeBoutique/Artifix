/**
 * Drop zone mixin is used to take the object being dragged
 * and apply it the childViews array[].
 */
ART.DropZone = {
  isDropTarget: YES,
  dragStarted: function(draggedObj, moveEvent) { //sent to all drop targets in app
    console.log("Drag started. Object: %@ Event: %@".fmt(draggedObj, moveEvent));
  },
  dragEnded: function(dragObj, moveEvent) { //sent to all drop targets in app
    console.log("Drag ended.");
  },

  computeDragOperations: function(dragObj, moveEvent) {
    console.log('Returning drag operations accepted.');
    return SC.DRAG_ANY; // any drag operation accepted
  },
  acceptDragOperation: function(dragObj, dragOp) {
    return YES;
  },

  dragEntered: function(dragObj, moveEvent) {
    console.log('Drop target entered.');
  },
  dragUpdated: function(dragObj, moveEvent) {
    console.log('Drop target ongoing.');
  },
  dragExited: function(dragObj, moveEvent) {
    console.log('Drop target exited.');
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