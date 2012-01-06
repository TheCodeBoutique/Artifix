ART.InspectorUIView = SC.View.extend(
/** @scope ART.InspectorUIView.prototype */ {

  nowShowing: "",

  /**
    The WAI-ARIA role for toolbar view.

    @type String
    @default 'Inspector UI View'
    @readOnly
  */
  ariaRole: 'Inspector UI View',
  
  childViews: ["viewSelection"],
  
  viewSelection: SC.TabView.design({
     classNames: 'inspector_buttons'.w(),
    
     items: [
       { title: "Parts",
         value: "ART.PartsView",
         itemWidth:100
       },
       { title: "View",
         value: "ART.ViewsView",
         itemWidth:100
       }
     ],
     
     itemTitleKey: 'title',
     itemValueKey: 'value',
     itemWidthKey:"itemWidth",
     
     layout: { left: 12, right: 12, top: 12, bottom: 12 },
     
     nowShowingBinding: '.parentView.nowShowing'

  }),
  
});