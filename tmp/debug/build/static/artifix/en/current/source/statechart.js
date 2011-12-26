Artifix.statechart = SC.Statechart.create({

  initialState: 'readyState',

    readyState: SC.State.plugin('Artifix.ReadyState'),
    mobileDevState: SC.State.plugin('Artifix.MobileDevState')

});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('artifix');