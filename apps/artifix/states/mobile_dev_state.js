Artifix.MobileDevState = SC.State.extend({

  enterState: function() {
    Artifix.getPath('mobilePage.mainPane').append();
  },

  troggleUIInspector: function(view) {

    if (this._uipane) {
      this._uipane.remove();
    }
    // this._uipane = ART.InspectorPane.create({  // new pane WIP at the moment.  We will swap this out shortly.
    this._uipane = ART.InspectorUIView.create({
      layout:{ top: 73, right: 350, height: 405, width: 285},
      //value: 'User Interface',
    }),
        this._uipane.append();

  },
  changeToViews:function() {
    ART.inspectorViewController.set('currentTab',"views"),
    ART.inspectorViewController.set('nowShowing', 'ART.ViewsView.viewsPane')

  },
  changeToParts:function() {
    ART.inspectorViewController.set('currentTab',"parts"),
    ART.inspectorViewController.set('nowShowing', 'ART.PartsView.partsPane')
  },

  troggleVisualInspector: function(view) {

    if (this._visualpane) {
      this._visualpane.remove();
    }
    this._visualpane = ART.InspectorPane.create({
      layout:{ top: 73, left: 250, height: 405, width: 285},
      value: 'Visual Inspector',

      cellOne:
          SC.View.create({
            layout:{left:21,centerY:0,height:28,width:32},
            classNames:['text-view']
          }),
      containerOne:
          SC.View.create({
            layout:{top:0,bottom:0,left:0,right:0},
            backgroundColor:'cyan'
          }),
      containerTwo:
          SC.View.create({
            layout:{top:0,bottom:0,left:0,right:0},
            backgroundColor:'pink'
          }),
      containerThree:
          SC.View.create({
            layout:{top:0,bottom:0,left:0,right:0},
            backgroundColor:'gray'
          }),
      containerFour:
          SC.View.create({
            layout:{top:0,bottom:0,left:0,right:0},
            backgroundColor:'lightgreen'
          })
    });
    this._visualpane.append();

  },

  troggleAnimationInspector: function(view) {

    if (this._animationpane) {
      this._animationpane.remove();
    }
    this._animationpane = ART.InspectorPane.create({
      layout:{ top: 200, left: 45, height: 405, width: 285},
      value: 'Animations and View',
    });
    this._animationpane.append();

  },

  exitState: function() {
    Artifix.getPath('mobilePage.mainPane').remove();
  }

});