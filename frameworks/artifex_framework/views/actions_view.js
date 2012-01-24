ART.ActionsView = SC.View.extend({
  layout: { top: 0, left: 0, right: 0, bottom: 0 },
  
  childViews: ['wrapper'],
  
  wrapper: SC.View.design({
    backgroundColor: "white",
    layout: { top: 30, right: 10, bottom: 10, left: 10 },
    childViews: ['topLeftBar', 'leftScroll', 'topRightBar', 'rightScroll'],
    
    topLeftBar: SC.ToolbarView.design ({
      classNames: 'inspector_toolbar'.w(),
      layout: { top: 0, left: 0, width: .40, height: 20 },
      childViews: ['eventsText'],
      
      eventsText: SC.LabelView.design({
        classNames: 'text_small'.w(),
        layout: { centerY: 0, left: 10, height: 20, width: 100 },
        value: 'Events'
      }),
      
    }),
    
    leftScroll: SC.ScrollView.design({
      backgroundColor: "lightblue",
      layout: { top: 23, bottom: 0, left: 0, width: .40} ,
      // contentView: SC.View...
    }),
    
    topRightBar: SC.ToolbarView.design ({
      classNames: 'inspector_toolbar'.w(),
      layout: { top: 0, right: 0, width: .60, height: 20 },
      childViews: ['handlersText'],
      
      handlersText: SC.LabelView.design({
        classNames: 'text_small'.w(),
        layout: { centerY: 0, left: 10, height: 20, width: 100 },
        value: 'Handlers'
      }),
      
    }),
    
    rightScroll: SC.ScrollView.design({
      backgroundColor: "lightpink",
      layout: { top: 23, bottom: 0, right: 0, width: .60} ,
      // contentView: SC.View...
    }),
     
  }),
  
});
