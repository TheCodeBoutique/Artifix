Artifex.routes = SC.Object.create({

  gotoRoute: function(routeParams) {

    var state = routeParams.currentView;
    if (state === undefined || state === '') {
      SC.routes.set('location', 'coldstart');
    } else if (state === "mobile") {

      Artifex.statechart.gotoState('mobileDevState');
      ART.devicesController.set('currentCanvas', 'ART.MobileCanvas');

    } else if (state === "coldstart") {

      SC.routes.set('location', 'coldstart');
      Artifex.statechart.gotoState('readyState');

    } else if (state === "tablet") {

      SC.routes.set('location', 'tablet');
      Artifex.statechart.gotoState('tabletDevState');
      ART.devicesController.set('currentCanvas', 'ART.TabletCanvas');

    } else if (state === "desktop") {

      SC.routes.set('location', 'desktop');
      Artifex.statechart.gotoState('desktopDevState');
      ART.devicesController.set('currentCanvas', 'ART.DesktopCanvas');

    }
  }
});