Artifix.MobileDevState = SC.State.extend({ 
  
  enterState: function() {
    Artifix.getPath('mobilePage.mainPane').append();
  },
  
  // goToMobileDevState: function() {
  //   this.gotoState('MobileDevState');
  // };

  exitState: function() {
    Artifix.getPath('mobilePage.mainPane').remove();
  }

});

