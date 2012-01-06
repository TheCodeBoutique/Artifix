// ==========================================================================
// Copyright: ©2010 The Code Boutique
// Coded by Chad Eubanks and Kyle Carriedo of The Code Boutique
// "The Code Boutique, beautiful code wrapped in a beautiful design."
// ==========================================================================

ART.ViewsView = SC.View.create({
  layout: {top: 20, bottom: 0, left: 0, right: 0},
  childViews:['contentContainer'],
  
  contentContainer:SC.ScrollView.design({
    hasHorizontalScroller: NO,
    layout: { top: 0, bottom: 0, left: 0, right: 0},

    contentView:SC.View.design({
      layout:{ top: 0, height: 715, left: 0, right: 0},
      childViews:['listViewCell', 'gridViewCell', 'twitterListCell', 'instagramGridCell', 'tumblrListCell', 'tabBarViewCell', 'verticalNavigationCell', 'horizontalSwipeCell'],

      listViewCell: ART.PartsCell.create({
        layout:{ top: 0, height: 75, right: 0, left: 0},
        cellTitle:"List View".loc(),
        cellDescription:"A list of information and a detailed view.".loc(),

        itemImage: SC.View.design({
          view:'button',
          objectController:ART.objectSelectionController,
          classNames:['pane-listview-image'],
          layout: { right: 2, bottom: 5, height: 55, width: 46 },
        })
        
      }),
      
      gridViewCell: ART.PartsCell.create({
        layout:{ top: 75, height: 75, right: 0, left: 0},
        cellTitle:"Grid View".loc(),
        cellDescription:"A grid of items.".loc(),

        itemImage: SC.View.design({
          view:'button',
          objectController:ART.objectSelectionController,
          classNames:['pane-gridview-image'],
          layout: { right: 2, bottom: 5, height: 55, width: 46 },
        })
        
      }),
      
      twitterListCell: ART.PartsCell.create({
        layout:{ top: 150, height: 75, right: 0, left: 0},
        cellTitle:"Twitter List".loc(),
        cellDescription:"A list of tweets.".loc(),

        itemImage: SC.View.design({
          view:'button',
          objectController:ART.objectSelectionController,
          classNames:['pane-twitter-image'],
          layout: { right: 2, bottom: 5, height: 55, width: 46 },
        })
        
      }),
      
      instagramGridCell: ART.PartsCell.create({
        layout:{ top: 225, height: 75, right: 0, left: 0},
        cellTitle:"Instagram Grid".loc(),
        cellDescription:"A grid of Instagram photos.".loc(),

        itemImage: SC.View.design({
          view:'button',
          objectController:ART.objectSelectionController,
          classNames:['pane-instagram-image'],
          layout: { right: 2, bottom: 5, height: 55, width: 46 },
        })
        
      }),
      
      tumblrListCell: ART.PartsCell.create({
        layout:{ top: 300, height: 75, right: 0, left: 0},
        cellTitle:"Tumblr List".loc(),
        cellDescription:"A list of posts from tumblr with a detailed view.".loc(),

        itemImage: SC.View.design({
          view:'button',
          objectController:ART.objectSelectionController,
          classNames:['pane-tumblr-image'],
          layout: { right: 2, bottom: 5, height: 55, width: 46 },
        })
        
      }),
      
      tabBarViewCell: ART.PartsCell.create({
        layout:{ top: 375, height: 75, right: 0, left: 0},
        cellTitle:"Tab Bar View".loc(),
        cellDescription:"A multi page view with navigation buttons on the bottom toolbar.".loc(),

        itemImage: SC.View.design({
          view:'button',
          objectController:ART.objectSelectionController,
          classNames:['pane-tabbar-image'],
          layout: { right: 2, bottom: 5, height: 61, width: 37 },
        })
        
      }),
      
      verticalNavigationCell: ART.PartsCell.create({
        layout:{ top: 450, height: 75, right: 0, left: 0},
        cellTitle:"Vertical Navigation".loc(),
        cellDescription:"A multi page view with navigation buttons on the top toolbar.".loc(),

        itemImage: SC.View.design({
          view:'button',
          objectController:ART.objectSelectionController,
          classNames:['pane-verticalnav-image'],
          layout: { right: 2, bottom: 5, height: 61, width: 37 },
        })
        
      }),
      
      horizontalSwipeCell: ART.PartsCell.create({
        layout:{ top: 525, height: 75, right: 0, left: 0},
        cellTitle:"Horizontal Swipe".loc(),
        cellDescription:"A multi page view with horizontal swipe capabilities.".loc(),

        itemImage: SC.View.design({
          view:'button',
          objectController:ART.objectSelectionController,
          classNames:['pane-horizontalswipe-image'],
          layout: { right: 2, bottom: 5, height: 61, width: 37 },
        })
        
      })
      
    })
    
  })
  
});