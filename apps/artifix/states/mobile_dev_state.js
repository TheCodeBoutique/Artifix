Artifix.MobileDevState = SC.State.extend({ 
  
  enterState: function() {
    Artifix.getPath('mobilePage.mainPane').append();
  },
  
  troggleUIInspector: function(view) {
    var toggle = Artifix.mobileUIController.get('isViewsButtonON');
    var pane = ART.InspectorView.create({
      layout:{centerX:0,centerY:0,height:405,width:285}
    })
    
    if (toggle === YES) {
      console.log('yes');
      pane.append();
      Artifix.mobileUIController.set('isViewsButtonON', NO);
    } else {
      console.log('no');
      pane.remove();
      Artifix.mobileUIController.set('isViewsButtonON', YES);
    }
     
  },

  exitState: function() {
    Artifix.getPath('mobilePage.mainPane').remove();
  }

});



// action:function(){
//   var pane = ART.InspectorView.create({
//     layout:{centerX:0,centerY:0,height:405,width:285}
//   })
//   pane.append();