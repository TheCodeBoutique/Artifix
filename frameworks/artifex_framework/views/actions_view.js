ART.ActionsView = SC.View.extend({
  layout: { top: 0, left: 0, right: 0, bottom: 0 },

  childViews: ['wrapper'],

  wrapper: SC.View.design({
    backgroundColor: "white",
    layout: { top: 30, right: 10, bottom: 10, left: 10 },
    childViews: ['topLeftBar', 'topRightBar', 'onClickLabel','codeButton'],

    topLeftBar: SC.ToolbarView.design({
      classNames: 'inspector_toolbar'.w(),
      layout: { top: 0, left: 0, width: .40, height: 20 },
      childViews: ['eventsText'],

      eventsText: SC.LabelView.design({
        classNames: 'text_small'.w(),
        layout: { centerY: 0, left: 10, height: 20, width: 100 },
        value: 'Events'
      }),

    }),

    onClickLabel:SC.LabelView.design({
      layout:{top:40,left:20,width:100,height:20},
      value:"On Click"
    }),
    codeButton:SC.ButtonView.design({
      classNames: 'gray_button_med'.w(),
      layout:{top:40,right:20,width:100,height:20},
      title:"Alert",
      action:function() {
        var editor = Artifex.codeEditorController.get('content');
        editor.setValue(Artifex.Actions.alert);
        Artifex.codeEditorController.set('content', editor);
      }
    }),

    topRightBar: SC.ToolbarView.design({
      classNames: 'inspector_toolbar'.w(),
      layout: { top: 0, right: 0, width: .60, height: 20 },
      childViews: ['handlersText'],

      handlersText: SC.LabelView.design({
        classNames: 'text_small'.w(),
        layout: { centerY: 0, left: 10, height: 20, width: 100 },
        value: 'Handlers'
      })

    })

  }),

});
