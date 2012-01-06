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

      platformSelection: SC.ListView.design({
        classNames: 'white_base'.w(),
        layout: { left: 10, top: 40, height: 355, width: 110},
        contentValueKey: "name",
        contentBinding: "ART.devicesController.arrangedObjects",
        selectionBinding: "ART.devicesController.selection",
        rowHeight: 117,
        actOnSelect:YES,
        exampleView:SC.View.design(SC.Control,{
          isSelected:NO,
          classNames:['device-selection-cell'],
          render:function(context){
            var content = this.get('content');
            if(!content) return NO;
            var icon = content.get('icon'),
                name = content.get('name')
            context.push([
                '<div class="device-selection-icon" style="background-image: url(',icon,'); height:80px; width:100%; background-repeat:no-repeat; margin-top:7px; background-position: 50% 50%;">',
              '</div>',
                '<div class="device-selection-title">',name,
              '</div>',
                '<div class="divider-selection-icon">',
              '</div>'
            ].join(''))

          },
          selectionDidChange:function(){
            if(this.isSelected){
              ART.devicesController.set('currentDeviceSelected',this.get('value'))
            }
          }.observes('isSelected')
        })
      }),

      distroSelection: SC.View.design({
        classNames: 'white_base'.w(),
        layout: { right: 15, top: 40, height: 136, width: 575},
        childViews: ["demo", "artifix", "custom", "cocoa"],
        
        demo: SC.ImageView.design({
          layout: { centerY: 3, left: 10, height: 97, width: 122 },
          useCanvas: YES,
          value: sc_static('images/demo_icon.png'),
          mouseDown:function(evt){
              ART.devicesController.set('deploymentType',this.get('value'))
            return YES;
          }
        }),
        
        artifix: SC.ImageView.design({
           layout: { centerY: 0, left: 152, height: 97, width: 122 },
           useCanvas: YES,
           value: sc_static('images/artifix_domain.png')
        }),
          
        custom: SC.ImageView.design({
          layout: { centerY: 0, right: 152, height: 97, width: 122 },
          useCanvas: YES,
          value: sc_static('images/custom_domain.png')
        }),
            
        cocoa: SC.ImageView.design({
          layout: { centerY: 0, right: 10, height: 97, width: 122 },
          useCanvas: YES,
          value: sc_static('images/cocoa_wrapper.png')
        }),
        
      }),

      detailedInformation: SC.View.design({
        classNames: 'white_base'.w(),
        layout: { right: 15, top: 195, height: 200, width: 575},
        childViews:['description'],
        description:SC.LabelView.design({
          classNames:['device-selection-description'],
          layout:{top:0,left:20,height:200,width:515},
          escapeHTML:NO,
          valueBinding:'ART.deviceSelectionController.description',
          })
      }),

      openButton: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: { bottom: 5, left: 15, height: 21, width: 120},
        title: "Open Existing App".loc(),
        action: 'showExistingApp',
        target: 'Artifix.statechart'
      }),

      chooseButton: SC.ButtonView.design({
        classNames: 'blue_button_sml'.w(),
        layout: { bottom: 5, right: 20, height: 21, width: 82},
        title: "Choose".loc(),
        isEnabled: NO,
        isDefault: YES,
        action: 'startInterfaceBuilder',
        target: 'Artifix.statechart',
        didSelectDeploy:function(){
          var device = ART.devicesController.get('currentDeviceSelected'),
              deploy = ART.devicesController.get('deploymentType');
          if(device && deploy){
            this.set('isEnabled',YES);
          }

        }.observes('ART.devicesController.currentDeviceSelected', 'ART.devicesController.deploymentType')
      })
    });