Artifix.routes = SC.Object.create({

  gotoRoute: function(routeParams) {

    var state = routeParams.currentView;
    if (state === undefined || state === '') {
      SC.routes.set('location', 'coldstart');
    } else if (state === "mobile") {

      Artifix.statechart.gotoState('mobileDevState');
      ART.devicesController.set('currentCanvas', 'ART.MobileBluePrint');

    } else if (state === "coldstart") {

      SC.routes.set('location', 'coldstart');
      Artifix.statechart.gotoState('readyState');

    } else if (state === "tablet") {

      SC.routes.set('location', 'tablet');
      Artifix.statechart.gotoState('tabletDevState');
      ART.devicesController.set('currentCanvas', 'ART.TabletBluePrint');

    } else if (state === "desktop") {

      SC.routes.set('location', 'desktop');
      Artifix.statechart.gotoState('desktopDevState');
      ART.devicesController.set('currentCanvas', 'ART.DesktopBluePrint');

    }
  }
});