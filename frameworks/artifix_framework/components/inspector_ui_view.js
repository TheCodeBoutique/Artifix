ART.InspectorUIView = SC.PalettePane.extend({

  classNames: 'silver_background'.w(),

  contentView: SC.View.extend({
    childViews: ["top","viewSelection", "middle"],

    top:SC.ToolbarView.design({
      childViews: ['closeButton' ,'title' ,'minButton'],
      layout: { top: 0, left: 0, right: 0, height: 18 },

      title:SC.LabelView.design({
        classNames:['pane-bar-title'],
        layout: { centerX: 0, centerY: 0, height: 14, width: 90 },
        needsEllipsis:YES,
        escapeHTML: NO,
        isTextSelectable: YES,
        value:"User Interface".loc()
      }),

      closeButton:SC.View.design({
        classNames:['pane-close-button'],
        layout:{top:3,left:4,height:10,width:10},
        mouseDown:function(evt) {
          this.getPath('parentView.parentView.parentView').remove();
          return YES;
        }
      }),

      minButton:SC.View.design({
        classNames:['pane-min-button'],
        layout:{top:4,right:4,height:8,width:21},
        mouseDown:function(evt) {
          return YES;
        }
      })
    }),

    viewSelection:SC.SegmentedView.design({
      classNames: 'inspector_buttons'.w(),
      layout: { top: 18, left: 0, right: 0, height: 35 },
      items:[
        {
          title:"Parts",
          value:"parts",
          action:"changeToParts"
        },
        {
          title:"Views",
          value:"views",
          action:"changeToViews"
        }
      ],
      itemTitleKey:"title",
      itemValueKey:"value",
      itemActionKey:"action",
      valueBinding:'ART.inspectorViewController.currentTab'
    }),

    middle: SC.ContainerView.design({
      nowShowingBinding:SC.Binding.oneWay('ART.inspectorViewController.nowShowing'),
      layout: { left: 0, top: 46, bottom: 0, right: 0 }
    })
  })
});