Artifix.ReadyState = SC.State.extend({

  firstTimeThrough: NO,

  enterState: function() {
    Artifix.getPath('mainPage.mainPane').append();
    Artifix.mainPage.mainPane.topBar.artifixLogo.animate('opacity', 0.0, {duration: 0.0,timing:'linear'});
    Artifix.mainPage.mainPane.coldStartView.animate('opacity', 0.0, {duration: 0.0,timing:'linear'});
    Artifix.mainPage.mainPane.coldStartView.animate('top', -450, {duration: 0.7,timing:'ease-in-out'});

    var existingApps = Artifix.store.find(Artifix.ExistingApp);
    Artifix.existingAppsController.set('content', existingApps);

   this.invokeLater(this.showColdStart, 500);
  },

  showColdStart: function() {
    Artifix.mainPage.mainPane.topBar.artifixLogo.animate('opacity', 1.0, {duration: 0.7,timing:'ease-in-out'});
    Artifix.mainPage.mainPane.coldStartView.animate('opacity', 1.0, {duration: 0.7,timing:'ease-in-out'});
    Artifix.mainPage.mainPane.coldStartView.animate('top', 70, {duration: 0.7,timing:'ease-in-out'});
  },

  startInterfaceBuilder: function(view) {
    var sel = ART.devicesController.get('currentDeviceSelected');
    if (!sel) return;
    switch (sel) {
      case "Mobile":
        // this.gotoState('mobileDevState');
        SC.routes.set('location', 'mobile');
        ART.devicesController.set('currentCanvas','ART.MobileCanvas');
        break;
      case "Tablet":
        // this.gotoState('tabletDevState');
        SC.routes.set('location', 'tablet');
        ART.devicesController.set('currentCanvas','ART.TabletCanvas');
        break;
      case "Desktop":
       // this.gotoState('desktopDevState');
        SC.routes.set('location', 'desktop');
        ART.devicesController.set('currentCanvas','ART.DesktopCanvas');
        break;
    }

  },

  showExistingApp: function() {
    Artifix.getPath('existingAppPage.mainPane').append();
    Artifix.existingAppPage.mainPane.alert.animate('scale', 0.0, {duration: 0.0,timing:'linear'});
    this.invokeLater(this.scaleAlertHigh, 100);
  },

  scaleAlertHigh: function() {
    Artifix.existingAppPage.mainPane.alert.animate('scale', 1.1, {duration: 0.4,timing:'ease-in-out'});
    this.invokeLater(this.scaleAlertBack, 400);
  },

  scaleAlertBack: function() {
    Artifix.existingAppPage.mainPane.alert.animate('scale', 1.0, {duration: 0.3,timing:'ease-in-out'});
  },

  reverseScale: function() {
    Artifix.existingAppPage.mainPane.alert.animate('scale', 0.0, {duration: 0.4,timing:'ease-in-out'});
    this.invokeLater(this.removeExistingApps, 400);
  },

  removeExistingApps: function() {
    Artifix.getPath('existingAppPage.mainPane').remove();
  },

  exitState: function() {
    Artifix.getPath('mainPage.mainPane').remove();
  }

});

