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
          childViews: ["viewSelection"],
          layout: { top: 0, left: 0, right: 0, height: 25 },

          viewSelection:SC.SegmentedView.design({
            layout: { top: 0, left: 0, right: 0, bottom: 0 },
            items:[
              {title:"Parts", value:"parts", action: "Parts", target: "ART.inspectorViewController" },
              {title:"Views", value:"views", action: "Views", target: "ART.inspectorViewController" }
            ],
            itemTitleKey:"title",
            itemValueKey:"value",
            itemActionKey:"action",
            itemTargetKey:"target",
          })
        }),

        middle: SC.ContainerView.design({
          nowShowingBinding: 'ART.inspectorViewController.nowShowing',
          layout: { left: 0, top: 36, bottom: 0, right: 0 }
        })
      })
    });