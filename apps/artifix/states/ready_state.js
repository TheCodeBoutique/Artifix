Artifix.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Artifix.getPath('mainPage.mainPane').append();
    Artifix.mainPage.mainPane.topBar.artifixLogo.animate('opacity', 0.0,{duration: 0.0,timing:'linear'});
    Artifix.mainPage.mainPane.coldStartView.animate('opacity', 0.0,{duration: 0.0,timing:'linear'});
    this.invokeLater(this.showComponents, 500);
  },
  
  showComponents: function() {
    Artifix.mainPage.mainPane.topBar.artifixLogo.animate('opacity', 1.0,{duration: 0.7,timing:'ease-in-out'});
    Artifix.mainPage.mainPane.coldStartView.animate('opacity', 1.0,{duration: 0.7,timing:'ease-in-out'});
    Artifix.mainPage.mainPane.coldStartView.animate('top', 70,{duration: 0.7,timing:'ease-in-out'});
  },
  
  goToMobileDevState: function() {
    this.gotoState('mobileDevState');
  },

  exitState: function() {
    Artifix.getPath('mainPage.mainPane').remove();
  }

});

