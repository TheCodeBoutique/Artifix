Artifix.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Artifix.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    Artifix.getPath('mainPage.mainPane').remove();
  }

});

