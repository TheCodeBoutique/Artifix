ART.InspectorPane = SC.View.extend({

  value:'',
  nowShowing:'',
  classNames: 'silver_background'.w(),

    childViews: ["top", "middle"],   //viewSelection

    top:SC.ToolbarView.design({
      childViews: ['closeButton' ,'title' ,'minButton'],
      layout: { top: 0, left: 0, right: 0, height: 20 },

      title:SC.LabelView.design({
        classNames:['pane-bar-title'],
        layout: { top: 0, height: 20, left: 20, right: 20 },
        textAlign: SC.ALIGN_CENTER,
        needsEllipsis:YES,
        escapeHTML: NO,
        isTextSelectable: YES,
        valueBinding:'.parentView.parentView.value'
      }),

      closeButton:SC.View.design({
        classNames:['close_button'],
        layout:{top:3,left:4,height:10,width:10},
        mouseDown:function(evt) {
          Artifix.interfaceBuilder.mainPane.removeChild(this.parentView.parentView);
          return YES;
        }
      }),

      minButton:SC.View.design({
        classNames:['min_max_button'],
        layout:{top:4,right:4,height:8,width:21},
        mouseDown:function(evt) {
          if(this.getPath('parentView.parentView.layout.height') === 20){
            this.getPath('parentView.parentView').adjust('height',405);
          } else {
            this.getPath('parentView.parentView').adjust('height',20);
          }
          return YES;

        }
      })
    }),

    middle: SC.ContainerView.design({
      nowShowingBinding:SC.Binding.oneWay('.parentView.nowShowing'),
      layout: { left: 0, top: 20, bottom: 0, right: 0 }
    })
});