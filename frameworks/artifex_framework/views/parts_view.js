// ==========================================================================
// Copyright: ©2010 The Code Boutique
// Coded by Chad Eubanks and Kyle Carriedo of The Code Boutique
// "The Code Boutique, beautiful code wrapped in a beautiful design."
// ==========================================================================

ART.PartsView = SC.View.create({
  layout: {top: 20, bottom: 0, left: 0, right: 0},
  childViews:['contentContainer'],

  contentContainer: SC.ScrollView.design({
    hasHorizontalScroller: NO,
    layout: { top: 0, bottom: 0, left: 0, right: 0},

    contentView: SC.View.design({
      layout:{ top: 0, height: 715, left: 0, right: 0},
      childViews:['buttonCell', 'switchButton' , 'toolbarButton', 'labelCell' , 'textFieldCell', 'textAreaCell', 'audioCell', 'videoCell', 'imageCell'],

      buttonCell: ART.PartsCell.create({
        layout:{ top: 0, height: 75, right: 0, left: 0},
        cellTitle:"Button".loc(),
        cellDescription:"A standard sized button.".loc(),

        itemImage: SC.View.design(ART.Drag,{
          view:'button',
          objectController:ART.objectSelectionController,
          classNames:['pane-button-image'],
          layout: { right: 2, bottom: 5, height: 25, width: 77 },
        })
      }),

      switchButton: ART.PartsCell.create({
        layout:{ top: 80, height: 75, right: 0, left: 0},
        cellTitle:"Switch Button".loc(),
        cellDescription:"Displays on/off button.".loc(),

        itemImage:SC.View.design({
          classNames:['pane-switch-image'],
          layout: { right: 2, bottom: 5, height: 28, width: 74 },
        })
      }),

      toolbarButton: ART.PartsCell.create({
        layout:{ top: 160, height: 68, right: 0, left: 0},
        cellTitle:"Toolbar".loc(),
        cellDescription:"A standard toolbar.".loc(),

        itemImage:SC.View.design(ART.Drag,{
          view:'toolbar',
          classNames:['pane-tool-image'],
          layout: { right: 2, bottom: 5, height: 30, width: 122 },
        })
      }),

      labelCell: ART.PartsCell.create({
        layout:{ top: 230, height: 80, right: 0, left: 0},
        cellTitle:"Label".loc(),
        cellDescription:"A view to put your text in.".loc(),

        itemImage:SC.View.design(ART.Drag,{
          view:'label',
          classNames:['pane-label-image'],
          layout: { right: 2, bottom: 5, height: 17, width: 46 }
        })
      }),

      textFieldCell: ART.PartsCell.create({
        layout:{ top: 315, height: 80, right: 0, left: 0},
        cellTitle:"Text Field".loc(),
        cellDescription:"Text field that  accepts user input".loc(),

        itemImage:SC.View.design({
          classNames:['pane-textfield-image'],
          layout: { right: 2, bottom: 5, height: 26, width: 100 },
        })
      }),

      textAreaCell: ART.PartsCell.create({
        layout:{ top: 400, height: 86, right: 0, left: 0},
        cellTitle:"Text Area".loc(),
        cellDescription:"Used for multiple lines of user input.".loc(),

        itemImage:SC.View.design({
          classNames:['pane-textarea-image'],
          layout: { right: 5, bottom: 5, height: 59, width: 111 },
        })
      }),

      audioCell: ART.PartsCell.create({
        layout:{ top: 485, height: 68, right: 0, left: 0},
        cellTitle:"Audio".loc(),
        cellDescription:"An html5 audio player.".loc(),

        itemImage:SC.View.design({
          classNames:['pane-audio-image'],
          layout: { right: 2, bottom: 5, height: 41, width: 47 },
        })
      }),

      videoCell: ART.PartsCell.create({
        layout:{ top: 555, height: 75, right: 0, left: 0},
        cellTitle: "Video".loc(),
        cellDescription:"An html5 video player.".loc(),

        itemImage:SC.View.design({
          classNames:['pane-video-image'],
          layout: { right: 2, bottom: 5, height: 38, width: 38 },
        })
      }),

      imageCell: ART.PartsCell.create({
        layout:{ top: 630, height: 86, right: 0, left: 0},
        cellTitle: "Image".loc(),
        cellDescription:"A view to place an image.".loc(),

        itemImage:SC.View.design({
          classNames:['pane-image-image'],
          layout: { right: 2, bottom: 5, height: 47, width: 55 },
        })
      })

    })
  })
});