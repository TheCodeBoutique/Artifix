SC.mixin(ART,{
  
  doRestObjectSelection:function(object){
    ART.objectSelectionController.set('content',null);  
    ART.objectSelectionController.set('content',object);
  }
  
});
  