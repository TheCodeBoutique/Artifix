Artifix.statechart = SC.Statechart.create({

  initialState: 'readyState',

    readyState: SC.State.plugin('Artifix.ReadyState'),
    // someOtherState: SC.State.plugin('Artifix.SomeOtherState')

});