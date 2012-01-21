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
     classNames: ['inspector_buttons'],
     tabHeight: 34,

     items: [
       { title: "Parts",
         value: "ART.PartsView",
         itemWidth:126
       },
       { title: "View",
         value: "ART.ViewsView",
         itemWidth:125.5
       }
     ],
     
     itemTitleKey: 'title',
     itemValueKey: 'value',
     itemWidthKey:"itemWidth",
     
     layout: { left: 0, right: 0, top: 0, bottom: 12 },
     
     nowShowingBinding: '.parentView.nowShowing'

  }),
  
});