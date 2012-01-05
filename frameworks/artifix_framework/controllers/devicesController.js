ART.deviceSelectionController = SC.ObjectController.create({
  contentBinding:'ART.devicesController.selection'
});
ART.devicesController = SC.ArrayController.create({
  currentDeviceSelected:"",
  deploymentType:"",

  content:[
      SC.Object.create({
        name:"Mobile".loc(),
        description:"This module creates a web application for mobile devices.  And deploys as a Native Cocoa App. <br><br>Place items from the Library window, such as UI Components, pictures, music, movies and custom data models on the canvas, then use the inspector to adjust an item's appearance and assign handlers to it. Write code for your handlers in the source code editor, and when you're finished, run your web application to make sure it works as you intended then deploy to the app store.<br><br>Native like perforamance.  Native API capabilities.  Custom web kit engine.   The web and native built the way they ought to be.",
        icon:sc_static('/images/mobile_selection_icon.png')
      }),
      SC.Object.create({
        name:"Tablet".loc(),
        description:"This module creates a web application for tablet devices.  And deploys as a Native Cocoa App. </br>Place items from the Library window, such as UI Components, pictures, music, movies and custom data models on the canvas, then use the inspector to adjust an item's appearance and assign handlers to it. Write code for your handlers in the source code editor, and when you're finished, run your web application to make sure it works as you intended then deploy to the app store.</br>Native like perforamance.  Native API capabilities.  Custom web kit engine.   The web and native built the way they ought to be.",
        icon:sc_static('/images/tablet_selection_icon.png')
      }),
      SC.Object.create({
        name:"Desktop".loc(),
        description:"This module creates a web application for desktop devices.  And deploys as a Native Cocoa App. </br>Place items from the Library window, such as UI Components, pictures, music, movies and custom data models on the canvas, then use the inspector to adjust an item's appearance and assign handlers to it. Write code for your handlers in the source code editor, and when you're finished, run your web application to make sure it works as you intended then deploy to the app store.</br>Native like perforamance.  Native API capabilities.  Custom web kit engine.   The web and native built the way they ought to be.",
        icon:sc_static('/images/desktop_selection_icon.png')
      })
  ]
});
