Artifex.DesktopDevState = SC.State.extend({

  enterState: function() {
    Artifex.getPath('interfaceBuilder.mainPane').append();
  },

  troggleUIInspector: function(view) {

      if (this._interfacepane) {
        this._interfacepane.remove();
      }

     this._interfacepane = ART.InspectorPane.create({
        layout:{ top: 73, right: 350, height: 405, width: 285},
        value: "User Interface",
        childViews: ["closeButton", "title", "minButton", "banks"],

        banks: ART.InspectorUIView.design({
          layout:{ top: 20, left: 0, right: 0, left: 0},
          nowShowing: "",
        }),

      });

     this._interfacepane.append();

   },

  troggleVisualInspector: function(view)  {

      this._visualpane = ART.InspectorPane.create({
         layout:{ top: 73, right: 350, height: 405, width: 285},
         value: "Visual Inspector",
         childViews: ["closeButton", "title", "minButton","position"],

        position: ART.PositionView.design({
          layout:{ top: 20, bottom: 0, right: 0, left: 0},
          nowShowing: "ART.PartsView",
        }),
       });
      this._visualpane.append();

    },

  troggleAnimationInspector: function(view)   {

       this._animationpane = ART.InspectorPane.create({
          layout:{ top: 73, right: 350, height: 405, width: 285},
          value: "Animation and Views",
          childViews: ["closeButton", "title", "minButton"],
        });

       this._animationpane.append();

     },

  exitState: function() {
    Artifex.getPath('interfaceBuilder.mainPane').remove();
  }

});