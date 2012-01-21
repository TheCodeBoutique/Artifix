sc_require('views/divider_view');

ART.AnimationViewsInspector = SC.View.extend(
/** @scope ART.InspectorUIView.prototype */ {
  
  /**
    The WAI-ARIA role for toolbar view.

    @type String
    @default 'Inspector UI View'
    @readOnly
  */
  ariaRole: 'Animation and View Inspector',
  
  childViews: ["topBar", "viewListWrapper", "divider", "animationTypeText"],
  
  topBar: SC. ToolbarView.design({
    classNames: 'inspector_toolbar'.w(),
    layout: { top: 0, left: 0, right: 0, height: 30 },
  }),
  
  viewListWrapper: SC.View.design({
    backgroundColor: "white",
    layout: { top: 50, right: 15, left: 15, height: 150 },
    childViews: "toolbar".w(),
    
    toolbar: SC. ToolbarView.design({
      classNames: 'inspector_toolbar'.w(),
      layout: { top: 0, left: 0, right: 0, height: 20 },
      childViews: "viewNamesText".w(),
      
      viewNamesText: SC.LabelView.design({
        classNames: 'text_small'.w(),
        layout: { centerY: 0, left: 5, height: 20, width: 100},
        value: 'View Names:'
      }),
      
    }),
    
  }),
  
  divider: ART.DividerView.create ({
    layout: { top: 215, left: 0, right: 0, height:2 }
  }),
  
  animationTypeText: SC.LabelView.design({
    classNames: 'text_small'.w(),
    layout: { top: 230, left: 20, height: 20, width: 120},
    value: 'Animation Type:'
  }),
  
});