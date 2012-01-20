ART.TextView = SC.View.extend({
  layout: { top: 0, left: 0, right: 0, bottom: 0 },
  
   childViews: ["fillStyleText", "fillStyleButton", "textOptions", "styleText", "styleButton", "styleOptions", "fontColorIdentifierFrame", "fontColorText"],
   
   
   fillStyleText: SC.LabelView.design({
     classNames: 'text_small'.w(),
     layout: { top: 40, left: 20, height: 20, width: 100 },
     value: 'Font:'
   }),
   
   fillStyleButton: SC.ButtonView.design({
     classNames: 'gray_button_no_gloss_med'.w(),
     layout: { top: 40, right: 20, height: 18, width: 175 },
     title: "None",
     action: 'showTextOptions',
     target: 'Artifix.statechart'
   }),

   textOptions: SC.View.design({
     classNames: 'linen_slide_picker'.w(),
     layout: { top: 65, right: 0, left: 0, height: 0 },
     childViews: "textList".w(),
     
     textList: SC.ScrollView.design({
       classNames: 'text_scroll_list'.w(),
       hasHorizontalScroller: NO,
       layout: { top: 20, bottom: 0, left: 10, right: 0 },
     
       contentView: SC.ListView.design({
         classNames: 'app_list'.w(),
         contentBinding: 'Artifix.existingAppsController.arrangedObjects',
         selectionBinding: 'Artifix.existingAppsController.selection',
         contentValueKey: "appName",     
         contentIconKey: "appIcon",
         hasContentIcon:  YES,
         rowHeight: 55 
       }) // We will need to replace this data with the available font choices.  Ideally we will have
         //  the font name represented in normal font style.  Followed by "artifex" styled to the selected font.
         //  In other words a live preview of the font choice.
       
     }),
     
  }),
  
  styleText: SC.LabelView.design({
     classNames: 'text_small'.w(),
     layout: { top: 80, left: 20, height: 20, width: 100 },
     value: 'Style:'
   }),
   
  styleButton: SC.ButtonView.design({
     classNames: 'gray_button_no_gloss_med'.w(),
     layout: { top: 80, right: 20, height: 18, width: 175 },
     title: "Regular",
     action: 'showStyleOptions',
     target: 'Artifix.statechart'
   }),

   styleOptions: SC.View.design({
     classNames: 'linen_slide_picker'.w(),
     layout: { top: 105, right: 0, left: 0, height: 0 },
     childViews: "textList".w(),
     
     textList: SC.ScrollView.design({
       classNames: 'text_scroll_list'.w(),
       hasHorizontalScroller: NO,
       layout: { top: 20, bottom: 0, left: 10, right: 0 },
     
       contentView: SC.ListView.design({
         classNames: 'app_list'.w(),
         contentBinding: 'Artifix.existingAppsController.arrangedObjects',
         selectionBinding: 'Artifix.existingAppsController.selection',
         contentValueKey: "appName",     
         contentIconKey: "appIcon",
         hasContentIcon:  YES,
         rowHeight: 55 
       }) // We will need to replace this data with the available font style choices.
          // Font style is regular, bold, light, oblique etc.
       
     }),
     
  }),
  
  fontColorIdentifierFrame: SC.View.design({
     classNames: 'color_identifier_frame'.w(),
     layout: { top: 120, left: 20, height: 25, width: 80 },
     childViews: 'fontColorIdentifier'.w(),

     fontColorIdentifier: SC.View.design(ART.CSSGenerator,{
       backgroundColorBinding: "Artifix.partsController.font",
       layout: { top: 3, right: 3, bottom: 3, left: 3},
       cssStyle:"font",
       mouseDown:function(evt) {
         Artifix.statechart.sendEvent('doShowColorPicker', {event:"font"});
       }
     }),

   }),

   fontColorText: SC.LabelView.design({
     classNames: 'text_small'.w(),
     layout: { top: 123, right: 45, height: 25, width: 120 },
     value: 'Font Color'
   }),
  
   
   
});