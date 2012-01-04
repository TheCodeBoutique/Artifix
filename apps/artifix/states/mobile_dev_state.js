Artifix.MobileDevState = SC.State.extend({

  enterState: function() {
    Artifix.getPath('mobilePage.mainPane').append();
  },

  troggleUIInspector: function(view) {

    if (this._pane) {
      this._pane.remove();
    }
    this._pane = ART.InspectorUIView.create({
      layout:{ top: 73, left: 250, height: 405, width: 285}
    });

    this._pane.append();

  },

  troggleInspector: function(view) {

    if (this._pane) {
      this._pane.remove();
    }
    this._pane = ART.InspectorView.create({
      layout:{ top: 73, left: 250, height: 405, width: 285}
    });

    this._pane.append();

  },


  exitState: function() {
    Artifix.getPath('mobilePage.mainPane').remove();
  }

});