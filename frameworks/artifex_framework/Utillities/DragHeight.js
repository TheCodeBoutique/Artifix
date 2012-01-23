ART.DragHeight = {

  mouseDown: function(evt) {
    var layout = this.parentView.parentView.get('layout');
    this._mouseDownInfo = {
      pageX: evt.pageX, // save mouse pointer loc for later use
      pageY: evt.pageY,
      left:  layout.left, // save layout info
      height: layout.height
    };
    return YES; // so we get other events
  },

  mouseUp: function(evt) {

    // no longer dragging - will rerender
//            this.set('isDragging', NO);

    // apply one more time to set final position
    this.mouseDragged(evt);
    this._mouseDownInfo = null; // cleanup info
    return YES; // handled!
  },

  mouseDragged: function(evt) {
    var info = this._mouseDownInfo, loc;
    // handle X direction
//            loc = info.left + (evt.pageX - info.pageX);
//            this.adjust('left', loc);

    // handle Y direction
    loc = info.height - (evt.pageY - info.pageY);
    SC.info("loc = %@", loc);
    if (loc < 700) {
      this.parentView.parentView.adjust('height', loc);
    }

    return YES; // event was handled!
  },

  /** @private */
  touchStart: function(evt) {
    return this.mouseDown(evt);
  },

  /** @private */
  touchesDragged: function(evt) {
    return this.mouseDragged(evt);
  }
};
/**
 * Created by IntelliJ IDEA.
 * User: kcarriedo
 * Date: 1/22/12
 * Time: 3:26 PM
 * To change this template use File | Settings | File Templates.
 */
