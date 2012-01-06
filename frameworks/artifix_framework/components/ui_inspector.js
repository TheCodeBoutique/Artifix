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
       { title: "Parts", value: "ART.PartsView" },
       { title: "View", value: "ART.ViewsView" }
     ],
     
     itemTitleKey: 'title',
     itemValueKey: 'value',
     
     layout: { left: 12, right: 12, top: 12, bottom: 12 },
     
     nowShowingBinding: '.parentView.nowShowing'

  }),
  
});