Artifix.MobileDevState = SC.State.extend({

    enterState: function() {
    Artifix.getPath('mobilePage.mainPane').append();
  },

  troggleUIInspector: function(view) {
    console.log("Message");
    var pane = Artifix.getPath('mobilePage.mainPane');

    this._interfacepane = ART.InspectorPane.create(ART.Draggable,{
      layout:{ top: 73, right: 350, height: 405, width: 285},
      value: "User Interface",

      nowShowing: ART.InspectorUIView.design({
        layout:{ top: 0,bottom: 0, right: 0, left: 0},
        nowShowing: "ART.PartsView"
      })

    });

    pane.appendChild(this._interfacepane);
    pane.buildInChild(this._interfacepane);

  },

  troggleVisualInspector: function(view) {
    console.log("Message");
    var pane = Artifix.getPath('mobilePage.mainPane');


    this._visualpane = ART.InspectorPane.create(ART.Draggable,{
      layout:{ top: 73, right: 350, height: 405, width: 285},
      value: "Visual Inspector",

      nowShowing: ART.VisualInspector.design({
        layout:{ top: 0,bottom: 0, right: 0, left: 0},
        nowShowing: "ART.FillStrokeView"
      })

    });

    pane.appendChild(this._visualpane);
    pane.buildInChild(this._visualpane);

  },

  troggleAnimationInspector: function(view) {
    console.log("Message");

    this._animationpane = ART.InspectorPane.create({
      isModal: NO,
      layout:{ top: 73, right: 350, height: 405, width: 285},
      value: "Animation and Views",
      childViews: ["closeButton", "title", "minButton"],
    });

    this._animationpane.append();

  },

  exitState: function() {
    Artifix.getPath('mobilePage.mainPane').remove();
  }

});