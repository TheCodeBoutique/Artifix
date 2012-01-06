ART.PositionView = SC.View.extend(
/** @scope ART.InspectorUIView.prototype */ {

  nowShowing: "",

  /**
    The WAI-ARIA role for toolbar view.

    @type String
    @default 'Inspector UI View'
    @readOnly
  */
  ariaRole: 'Inspector Position View',

  childViews: ["viewSelection"],

  viewSelection: SC.TabView.design({
     classNames: ['inspector_buttons'],

     items: [
       { title: "Fill",
         value: "",
         itemWidth:61
       },
       { title: "Pos",
         value: "",
         itemWidth:61

       },
       { title: "Text",
         value: "",
         itemWidth:61
       },
       { title: "Link",
         value: "",
         itemWidth:61
       },
     ],

     itemTitleKey: 'title',
     itemValueKey: 'value',
     itemWidthKey:'itemWidth',

     layout: { left: 0, right: 0, top: 12, bottom: 12 },

     nowShowingBinding: '.parentView.nowShowing'

  }),

});