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
         itemWidth:50,
         buttonIcon:sc_static('/images/fill_stroke_icon.png')
       },
       { // title: "Right",
         value: "ART.SizingView",
         itemWidth:68.5,
         buttonIcon:sc_static('/images/ruler_icon.png')
       },
        { // title: "Text_View",
         value: "ART.TextView",
         itemWidth:68.5,
         buttonIcon:sc_static('/images/text_icon.png')
       },
       { // title: "Links View",
         value: "ART.LinksView",
         itemWidth:59,
         buttonIcon:sc_static('/images/action_icon.png')
       }

     ],
     
     // itemTitleKey: 'title',
     itemValueKey: 'value',
     itemWidthKey:"itemWidth",
     itemIconKey:"buttonIcon",

     layout: { left: 0, right: 0, top: 0, bottom: 0 },
     
     nowShowingBinding: '.parentView.nowShowing'

  }),
  
});