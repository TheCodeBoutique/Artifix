Artifex.statechart = SC.Statechart.create({

  initialState: 'readyState',

    readyState: SC.State.plugin('Artifex.ReadyState'),
    mobileDevState: SC.State.plugin('Artifex.MobileDevState'),
    tabletDevState: SC.State.plugin('Artifex.TabletDevState'),
    desktopDevState: SC.State.plugin('Artifex.DesktopDevState')

});