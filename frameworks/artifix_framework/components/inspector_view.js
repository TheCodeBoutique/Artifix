// ==========================================================================
// UI Component:   ART.InspectorView
// Copyright: ©2011 The Code Boutique, LLC.
// ==========================================================================
// globals ART

// @class
// This component is the InspectorView used for changing a user interfaces' component properties. 

// @author Chad Eubanks
// @author Kyle Carriedo
// @extends SC.View


ART.InspectorView = SC.PalettePane.extend({

      classNames: 'silver_background'.w(),

      contentView: SC.View.extend({
        childViews: ["top", "middle"],

        top:SC.ToolbarView.design({
          classNames: 'top_bar'.w(),
          childViews: ["viewSelection" ,'closeButton'],
          layout: { top: 0, left: 0, right: 0, height: 25 },

          closeButton:SC.ButtonView.design({
            classNames:['gray_button_med'],
            layout:{top:0,left:0,height:20,width:20},
            /****this is setup if you want it to go into a state for what we are doing I dont think its nessecarry****/
//            action:function(){
//              ART.statechart.sendEvent('somMethod',this.getPath('parentView.parentView.parentView'))
//            },
            action:function(){
              this.getPath('parentView.parentView.parentView').remove();
            },
            title:'C'
          }),

          viewSelection:SC.SegmentedView.design({
            classNames: 'banks'.w(),
            layout: { top: 0, left: 30, right: 30, bottom: 0 },
            items:[
              {title:"Parts", value:"parts", action: "Parts", target: "ART.inspectorViewController" },
              {title:"Views", value:"views", action: "Views", target: "ART.inspectorViewController" }
            ],
            itemTitleKey:"title",
            itemValueKey:"value",
            itemActionKey:"action",
            itemTargetKey:"target"
          })
        }),

        middle: SC.ContainerView.design({
          nowShowingBinding: 'ART.inspectorViewController.nowShowing',
          layout: { left: 0, top: 36, bottom: 0, right: 0 }
        })
      })
    });