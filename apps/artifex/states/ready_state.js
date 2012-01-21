Artifex.ReadyState = SC.State.extend({

  firstTimeThrough: NO,

  enterState: function() {
    Artifex.getPath('mainPage.mainPane').append();
    Artifex.mainPage.mainPane.topBar.artifexLogo.animate('opacity', 0.0, {duration: 0.0,timing:'linear'});
    Artifex.mainPage.mainPane.coldStartView.animate('opacity', 0.0, {duration: 0.0,timing:'linear'});
    Artifex.mainPage.mainPane.coldStartView.animate('top', -450, {duration: 0.7,timing:'ease-in-out'});

    var existingApps = Artifex.store.find(Artifex.ExistingApp);
    Artifex.existingAppsController.set('content', existingApps);

   this.invokeLater(this.showColdStart, 500);
  },

  showColdStart: function() {
    Artifex.mainPage.mainPane.topBar.artifexLogo.animate('opacity', 1.0, {duration: 0.7,timing:'ease-in-out'});
    Artifex.mainPage.mainPane.coldStartView.animate('opacity', 1.0, {duration: 0.7,timing:'ease-in-out'});
    Artifex.mainPage.mainPane.coldStartView.animate('top', 70, {duration: 0.7,timing:'ease-in-out'});
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
    Artifex.getPath('existingAppPage.mainPane').append();
    Artifex.existingAppPage.mainPane.alert.animate('scale', 0.0, {duration: 0.0,timing:'linear'});
    this.invokeLater(this.scaleAlertHigh, 100);
  },

  scaleAlertHigh: function() {
    Artifex.existingAppPage.mainPane.alert.animate('scale', 1.1, {duration: 0.4,timing:'ease-in-out'});
    this.invokeLater(this.scaleAlertBack, 400);
  },

  scaleAlertBack: function() {
    Artifex.existingAppPage.mainPane.alert.animate('scale', 1.0, {duration: 0.3,timing:'ease-in-out'});
  },

  reverseScale: function() {
    Artifex.existingAppPage.mainPane.alert.animate('scale', 0.0, {duration: 0.4,timing:'ease-in-out'});
    this.invokeLater(this.removeExistingApps, 400);
  },

  removeExistingApps: function() {
    Artifex.getPath('existingAppPage.mainPane').remove();
  },

  exitState: function() {
    Artifex.getPath('mainPage.mainPane').remove();
  }

});

