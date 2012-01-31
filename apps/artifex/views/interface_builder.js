// ==========================================================================
// Project:   Artifex - interfaceBuilder
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Artifex */
// This page describes the main user interface for your application.
Artifex.interfaceBuilder = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    classNames: 'grid_base'.w(),
    objectRemovalBinding:SC.Binding.oneWay('ART.objectSelectionController.content').notNull(),
    childViews: ["topBar", "containerView", "bottomBar", "viewHierarchy"],

    viewHierarchy:SC.View.design({
      classNames:['view-hierarchy'],
      layout:{top:70,left:0,bottom:0,width:131},
      childViews:['views'],
      views:SC.SourceListView.design({
        layout: {left:17,top: 44},
        contentBinding: 'Artifex.viewController.arrangedObjects',
        selectionBinding: 'Artifex.viewController.selection',
        contentValueKey: 'name',
        rowSpacing: 3,
        rowHeight: 49,
        exampleView:SC.View.design({
          layout:{left:40,right:40,bottom:0,top:0},
          render:function(context) {
            var array     =   Artifex.viewController.get('arrangedObjects').toArray();
            var content   =   this.get('content');
            var position  =   array.indexOf(content);

            if (!content) return;
            content = content.toJSON();

            if (content.parent === YES) {
              context.push(['<div class="parent-view">',content.name,'</div>'].join(''));
            } else {
              context.push([
                '<div class="child-views-position">',position,'</div>',
                '<div class="child-views">',content.name,'</div>'
              ].join(''));
            }

          }
        })
      })
    }),

    bottomBar:SC.View.design({
      layout: { bottom: 0, left: 0, right: 0, height: 28   },
      isGrabShowing:NO,
      childViews:["code","codeBar","grabBar"],

      code:SC.View.design({
        layout: { top: 28, left: 0, right: 0, bottom:0 },
        layerId:"code",
      }),

      grabBar:SC.ToolbarView.design({
        isVisibleBinding:'.parentView.isGrabShowing',
        layout: { top: 0, left: 0, right: 0, height: 8 },
        classNames: 'top_bar'.w(),
        childViews:["grabButton"],

        grabButton:SC.View.design(ART.DragHeight, {
          layout: { top:0, height: 15, centerX: 0, width: 15 },
          backgroundColor:"black",
          isAnchored: NO
        }),

      }),

      codeBar:SC.ToolbarView.design({
        layout: { top: 8, left: 0, right: 0, height: 20 },
        classNames: 'top_bar'.w(),
        childViews:["codeButton","saveButton"],

        saveButton:SC.ButtonView.design({
          classNames:['gray_button_med'],
          layout: { top:0, height: 20, left: 50, width: 80 },
          title:"save",
          action:function() {
            //apply added code
            var editor = Artifex.codeEditorController.get('content');
            var button = ART.objectSelectionController.get('content');
            var codeValue = editor.getValue();
            codeValue = Artifex.doRemoveQuotes(codeValue);
            button.set('action', codeValue);

          }
        }),

        codeButton:SC.View.design({
          layout: { top:0, height: 15, left: 12, width: 15 },
          backgroundColor:"black",
          mouseDown: function(evt) {
            Artifex.statechart.sendEvent("doShowCode", this);
          }
        })
      })
    }),

    topBar: SC.ToolbarView.design({
      classNames: 'top_bar'.w(),
      layout: { top: 0, left: 0, right: 0, height: 70 },
      childViews: ["artifexLogo", "tmpUIInspectorButton", "tmpInspectorButton", "tmpAnimationsButton","tmpPreview"],

      artifexLogo: SC.ImageView.design({
        layout: { centerY: 0, left: 10, width: 142, height: 56 },
        useCanvas: YES,
        value: sc_static('images/artifex_logo.png')
      }),

      tmpUIInspectorButton: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: { centerY: 0, right: 350, height: 26, width: 135},
        title: 'UI Components',
        action: 'troggleUIInspector',
        target: 'Artifex.statechart',
        isDefault:NO,
      }),

      tmpInspectorButton: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: { centerY: 0, right: 200, height: 26, width: 135},
        title: 'Inspector',
        action: 'troggleVisualInspector',
        target: 'Artifex.statechart'
      }),

      tmpAnimationsButton: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: { centerY: 0, right: 50, height: 26, width: 135},
        title: 'Animations & Views',
        action: 'troggleAnimationInspector',
        target: 'Artifex.statechart'
      }),

      tmpPreview: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: {centerY: 0, right: 500, height: 26, width: 135},
        title: 'Preview',
        action: 'previewIphone',
        target: 'Artifex.statechart'
      }),

    }),

    containerView:SC.ContainerView.design({
      layout:{top:70,bottom:0,left:0,right:0},
      nowShowingBinding:'ART.devicesController.currentCanvas'
    })

  })

});
