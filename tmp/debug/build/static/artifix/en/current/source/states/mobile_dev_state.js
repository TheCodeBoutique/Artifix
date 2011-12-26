Artifix.MobileDevState = SC.State.extend({

  enterState: function() {
    Artifix.getPath('mobilePage.mainPane').append();
  },

  troggleUIInspector: function(view) {

    if (this._pane) {
      this._pane.remove();
    }
    this._pane = ART.InspectorView.create({
      layout:{ top: 73, right: 350, height: 405, width: 285}
    });

    this._pane.append();

  },

  exitState: function() {
    Artifix.getPath('mobilePage.mainPane').remove();
  }

});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('artifix');