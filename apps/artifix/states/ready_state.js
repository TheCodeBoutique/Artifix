Artifix.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Artifix.getPath('mainPage.mainPane').append();
  },
  
  goToMobileDevState: function() {
    this.gotoState('mobileDevState');
  },

  exitState: function() {
    Artifix.getPath('mainPage.mainPane').remove();
  }

});

