// ==========================================================================
// UI Component:   ART.ColdStartView
// Copyright: ©2011 The Code Boutique, LLC.
// ==========================================================================
// globals ART

// @class
// This component is the ColdStartView used for selecting the device to develope your app for and the distribution platform.

// @author Chad Eubanks
// @author Kyle Carriedo
// @extends SC.View


ART.ColdStartView = SC.View.extend(
    /** @scope ART.ColdStartView.prototype */{

      classNames: 'silver_background'.w(),

      childViews: ["chooseDeviceText", "platformSelection","distroSelection", "detailedInformation", "openButton", "chooseButton"],

      chooseDeviceText: SC.LabelView.design({
        classNames: 'text_small'.w(),
        layout: { top: 15, left: 30, height: 20, width: 500},
        value: "Choose a device to develope on and where you want to deploy your app.".loc()
      }),

      platformSelection: SC.View.design({
        classNames: 'white_base'.w(),
        layout: { left: 10, top: 40, height: 355, width: 110},
      }),

      distroSelection: SC.View.design({
        classNames: 'white_base'.w(),
        layout: { right: 15, top: 40, height: 136, width: 575},
      }),

      detailedInformation: SC.View.design({
        classNames: 'white_base'.w(),
        layout: { right: 15, top: 195, height: 200, width: 575},
      }),

      openButton: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: { bottom: 5, left: 15, height: 26, width: 135},
        title: "Open Existing App".loc(),
        action: '',
        target: ''
      }),

      chooseButton: SC.ButtonView.design({
        classNames: 'blue_button_sml'.w(),
        layout: { bottom: 5, right: 20, height: 26, width: 82},
        title: "Choose:".loc(),
        action: 'goToMobileDevState',
        target: 'Artifix.statechart'
      })
    });; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('artifix_framework');