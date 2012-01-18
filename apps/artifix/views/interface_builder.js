// ==========================================================================
// Project:   Artifix - interfaceBuilder
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Artifix */
// This page describes the main user interface for your application.
Artifix.interfaceBuilder = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    classNames: 'grid_base'.w(),
    objectRemovalBinding:SC.Binding.oneWay('ART.objectSelectionController.content').notNull(),
    childViews: ["topBar", "containerView"],

    code:SC.View.design({
      layerId:"editor"

    }),

    topBar: SC.ToolbarView.design({
      classNames: 'top_bar'.w(),
      layout: { top: 0, left: 0, right: 0, height: 70 },
      childViews: ["artifixLogo", "tmpUIInspectorButton", "tmpInspectorButton", "tmpAnimationsButton","preview"],

      preview:SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: {centerY: 0, right: 450, height: 26, width: 135},
        title: 'Preview',
        action: function() {
          var previewiPhone = ART.PreviewPane.create({
            childViews: ['deviceContainer'],//, 'tablet_preview', 'desktop_preview'],

						deviceContainer:SC.View.design(ART.Draggable,{
              classNames: ['iPhone_preview_icon', 'front_object'],
              layout: { left: 0, centerY: 0, height: 597, width: 308 },
							childViews:['iPhone_preview'],				

            	iPhone_preview: SC.View.design({
              	layout: { left: 27, centerY: 0, height: 380, width: 256 },
              	childView: [],
            	})

						}),
						
          });

          var children = Artifix.getPath('interfaceBuilder.mainPane.containerView.contentView.canvasView.childViews');
          var tmp = previewiPhone.getPath('deviceContainer.iPhone_preview');
          for(var idx= 0; idx < children.length;idx++){
            SC.info('Children length %@'.fmt(children.length));
              previewiPhone.getPath('deviceContainer.iPhone_preview.childViews').push(children[idx]);
            SC.info('Children length %@'.fmt(children.length));
          }
//          previewiPhone.get('iPhone_preview').replaceAllChildren(children);

          Artifix.interfaceBuilder.mainPane.appendChild(previewiPhone);

        },
      }),


      artifixLogo: SC.ImageView.design({
        layout: { top: 0, left: 0, width: 172, height: 71 },
        useCanvas: YES,
        value: sc_static('images/artifix_logo.png')
      }),

      tmpUIInspectorButton: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: { centerY: 0, right: 350, height: 26, width: 135},
        title: 'User Interface',
        action: 'troggleUIInspector',
        target: 'Artifix.statechart',
        isDefault:NO,
      }),

      tmpInspectorButton: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: { centerY: 0, right: 200, height: 26, width: 135},
        title: 'Inspector',
        action: 'troggleVisualInspector',
        target: 'Artifix.statechart'
      }),

      tmpAnimationsButton: SC.ButtonView.design({
        classNames: 'gray_button_med'.w(),
        layout: { centerY: 0, right: 50, height: 26, width: 135},
        title: 'Animation & View',
        action: 'troggleAnimationInspector',
        target: 'Artifix.statechart'
      })
    }),
    containerView:SC.ContainerView.design({
      layout:{top:70,bottom:0,left:0,right:0},
      nowShowingBinding:'ART.devicesController.currentCanvas'
    })
  })
});
