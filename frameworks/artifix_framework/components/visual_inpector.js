ART.VisualInspector = SC.View.extend(
/** @scope ART.InspectorUIView.prototype */ {

  nowShowing: "",

  /**
    The WAI-ARIA role for toolbar view.

    @type String
    @default 'Inspector UI View'
    @readOnly
  */
  ariaRole: 'Visual Inspector',
  
  childViews: ["viewSelection"],
  
  viewSelection: SC.TabView.design({
     classNames: ['inspector_buttons'],
     tabHeight: 34,

     items: [
       { // title: "Fill_Stroke",
         value: "ART.FillStrokeView",
         itemWidth:40
       },
       { // title: "Right",
         value: "ART.SizingView",
         itemWidth:60
       },
        { // title: "Text+View",
         value: "ART.TextView",
         itemWidth:60
       },
       { // title: "Links View",
         value: "ART.LinksView",
         itemWidth:50
       }

     ],
     
     // itemTitleKey: 'title',
     itemValueKey: 'value',
     itemWidthKey:"itemWidth",
     
     layout: { left: 0, right: 0, top: 0, bottom: 12 },
     
     nowShowingBinding: '.parentView.nowShowing'

  }),
  
});