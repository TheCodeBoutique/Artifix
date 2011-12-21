Artifix.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Artifix.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    Artifix.getPath('mainPage.mainPane').remove();
  }

});

; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('artifix');