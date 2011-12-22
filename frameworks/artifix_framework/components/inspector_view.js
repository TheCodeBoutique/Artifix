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


ART.InspectorView = SC.PalettePane.extend(
    /** @scope ART.InspectorView.prototype */{
      classNames: 'silver_background'.w(),

      contentView: SC.View.extend({   //main Parent adjust the height according to the childs
        childViews:['partsSelection'], //add the gui parts
       /*
        * I started the segmented button view for you we are observing the value so that if the value changes we can call an action
        * we are going to use this to swap out the views we need to setup container view for swapping
        */
        partsSelection:SC.SegmentedView.extend({
          layout:{top:10,left:0,right:0,height:23},
          items:[
            {title:"Artifix.Parts".loc(), value:"parts"},
            {title:"Artifix.Views".loc(), value:"views"}
          ],
          itemTitleKey:"title",
          itemValueKey:"value",
          itemWidthKey:"116px",
          value:"parts",
          didValueChange:function() {
            console.log("You selected =  %@".fmt(this.get('value')));
          }.observes('value')
        })
      })
    });