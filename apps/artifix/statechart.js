Artifix.statechart = SC.Statechart.create({

  initialState: 'readyState',

    readyState: SC.State.plugin('Artifix.ReadyState'),
    mobileDevState: SC.State.plugin('Artifix.MobileDevState'),
    tabletDevState: SC.State.plugin('Artifix.TabletDevState'),
    desktopDevState: SC.State.plugin('Artifix.DesktopDevState')

});