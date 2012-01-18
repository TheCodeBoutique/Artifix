ART.deviceSelectionController = SC.ObjectController.create({
  contentBinding:'ART.devicesController.selection'
});

ART.devicesController = SC.ArrayController.create({
  currentDeviceSelected:"",
  deploymentType:"",
  currentCanvas:"",
  isAnchored:NO,
  content:[
  
      SC.Object.create({
        name:"Mobile".loc(),
        description:"This module creates a web application for mobile devices.",
        icon:sc_static('/images/mobile_selection_icon.png')
      }),
      
      SC.Object.create({
        name:"Tablet".loc(),
        description:"This module creates a web application for tablet devices.",
        icon:sc_static('/images/tablet_selection_icon.png')
      }),
      
      SC.Object.create({
        name:"Desktop".loc(),
        description:"This module creates a web application for desktop devices.",
        icon:sc_static('/images/desktop_selection_icon.png')
      })
      
  ]
  
});
