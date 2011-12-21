Artifix.statechart = SC.Statechart.create({

  initialState: 'readyState',

    readyState: SC.State.plugin('Artifix.ReadyState'),
    // someOtherState: SC.State.plugin('Artifix.SomeOtherState')

});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('artifix');