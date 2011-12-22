Artifix.statechart = SC.Statechart.create({

  initialState: 'readyState',

    readyState: SC.State.plugin('Artifix.ReadyState'),
    mobileDevState: SC.State.plugin('Artifix.MobileDevState')

});