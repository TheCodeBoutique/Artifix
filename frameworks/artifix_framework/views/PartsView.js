// ==========================================================================
// Copyright: ©2010 The Code Boutique
// Coded by Chad Eubanks and Kyle Carriedo of The Code Boutique
// "The Code Boutique, beautiful code wrapped in a beautiful design."
// ==========================================================================

ART.PartsView = SC.Page.create({
  // Start of the aboutView.  ChildView: miniLogo image, and the main_page rect. //
  partsPane: SC.View.design({
    layout: { left: 0, right: 0, top: 0, bottom: 0 },
    childViews:['contentContainer'],
    contentContainer:SC.ScrollView.design({
      hasHorizontalScroller: NO,
      layout: { top: 0, bottom: 0, left: 0, right:0},

      contentView:SC.View.design({
        layout:{top:0,height:360,left:0,right:0},
        childViews:['buttonCell', 'switchButton' , 'toolbarButton', 'labelCell' ,'textFieldCell'],

        buttonCell: ART.PartsCell.create({
          layout:{top:0,height:56},
          cellTitle:"Button".loc(),
          cellDescription:"A standard sized button.".loc(),

          itemImage:SC.View.design(ART.Drag,{
            view:'button',
            objectController:ART.objectSelectionController,

            classNames:['pane-button-image'],
            layout: { right: 14, top:19, height:26, width: 76 },
            useImageQueue: NO,
          })
        }),

        switchButton:ART.PartsCell.create({
          layout:{top:56,height:71},
          cellTitle:"Switch Button".loc(),
          cellDescription:"Displays on/off button.".loc(),

          itemImage:SC.View.design({
            classNames:['pane-switch-image'],
            layout: { right: 14, top:19, height:28, width: 72 },
            useImageQueue: NO,
          })
        }),

        toolbarButton:ART.PartsCell.create({
          layout:{top:127,height:70},
          cellTitle:"Toolbar".loc(),
          cellDescription:"Standard toolbar.".loc(),

          itemImage:SC.View.design({
            classNames:['pane-tool-image'],
            layout: { right: 14, top:19, height:29, width: 122 },
            useImageQueue: NO,
          })
        }),

        labelCell:ART.PartsCell.create({
          layout:{top:198,height:71},
          cellTitle:"Label".loc(),
          cellDescription:"A view to put your text in.".loc(),

          itemImage:SC.View.design({
            classNames:['pane-label-image'],
            layout: { right: 14, top:19, height:17, width: 45 },
            useImageQueue: NO,
          })
        }),
        textFieldCell:ART.PartsCell.create({
          layout:{top:269,height:86},
          cellTitle:"Text Field".loc(),
          cellDescription:"Text field that accepts user input".loc(),

          itemImage:SC.View.design({
            classNames:['pane-text-image'],
            layout: { right: 14, top:19, height:30, width: 110 },
            useImageQueue: NO,
          })
        })
      })
    })
  })
});