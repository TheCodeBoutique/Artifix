// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
//            Portions ©2011-2012 The Code Boutique LLC. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

sc_require('components/min_button');
sc_require('components/close_button');


/** @class

    Most SproutCore applications need a pane that can be repositioned by selecting, dragging, then releasing.  Furthermore,
 the pane needs to be appendable and removable from the dom on the fly.  On the top of the pane there is a minimize_button, close_button, and a title.
 Both buttons come preconfigured.  But for the title you will need to pass a value when you append the pane to a view.

 ART.InspectorPane.create({
 layout: { width: 400, height: 200, centerX: 0, centerY: 0 },
 value: 'my awesome pane',
 }).append();

 This will cause your panel to display.

 @extends SC.Pane
 @author Chad Eubanks
 */
ART.InspectorPane = SC.Pane.extend(
    /** @scope SC.PanelPane.prototype */ {

  /**
   @type Array
   @default ['sc-panel']
   @see SC.View#classNames
   */

  value: '',
  nowShowing:'',

  classNames: 'inspector_pane'.w(),
  childViews: ["closeButton", "title", "minButton", "navigation", 'paneContainer'],

  navigation:SC.View.design({
    classNames:['nav-bar'],
    layout:{top:20,height:46,left:0,right:0},
    render:function(context) {
      context.push('<div class="separator-one"></div>');
      context.push('<div class="separator-one-light"></div>');
      context.push('<div class="separator-two"></div>');
      context.push('<div class="separator-two-light"></div>');
      context.push('<div class="separator-three"></div>');
      context.push('<div class="separator-three-light"></div>');
    },
    childViews:['fillStroke','sizing', 'text', 'actions'],

    fillStroke:SC.View.design(SC.Control,{
      isSelected:NO,
      classNames:['position-container-view'],
      layout:{left:0,top:1,bottom:1,width:71},
      childViews:['imageView'],

      imageView:SC.View.design({
        layout:{left:24,centerY:0,height:34,width:37},
        classNames:['position-view']
      }),
      mouseDown:function(evt){
        //this will be custom views just testing
        this.setPath('parentView.parentView.nowShowing',
            SC.View.create({
              layout:{top:0,bottom:0,left:0,right:0},
              backgroundColor:'cyan'
              })
        );
        return YES;
      }
    }),
    sizing:SC.View.design(SC.Control,{
      isSelected:NO,
      classNames:['position-container-view'],
      layout:{left:74,top:1,bottom:1,width:66},
      childViews:['imageView'],

      imageView:SC.View.design({
        layout:{left:21,centerY:0,height:31,width:25},
        classNames:['sizing-view']
      }),

      mouseDown:function(evt){
        //this will be custom views just testing
        this.setPath('parentView.parentView.nowShowing',
            SC.View.create({
              layout:{top:0,bottom:0,left:0,right:0},
              backgroundColor:'pink'
              })
        );
        return YES;
      }
    }),
    text:SC.View.design(SC.Control,{
      isSelected:NO,
      classNames:['position-container-view'],
      layout:{left:143,top:1,bottom:1,width:69},
      childViews:['imageView'],

      imageView:SC.View.design({
        layout:{left:21,centerY:0,height:17,width:17},
        classNames:['text-view']
      }) ,

      mouseDown:function(evt){
        //this will be custom views just testing
        this.setPath('parentView.parentView.nowShowing',
            SC.View.create({
              layout:{top:0,bottom:0,left:0,right:0},
              backgroundColor:'lightred'
              })
        );
        return YES;
      }
    }),
    actions:SC.View.design(SC.Control,{
      isSelected:NO,
      classNames:['position-container-view'],
      layout:{left:215,top:1,bottom:1,width:68},
      childViews:['imageView'],

      imageView:SC.View.design({
        layout:{left:21,centerY:0,height:28,width:32},
        classNames:['action-view']
      }),

      mouseDown:function(evt){
        //this will be custom views just testing
        this.setPath('parentView.parentView.nowShowing',
            SC.View.create({
              layout:{top:0,bottom:0,left:0,right:0},
              backgroundColor:'lightgray'
              })
        );
        return YES;
      }
    })
  }),

  paneContainer:SC.ContainerView.design({
    layout:{top:66,bottom:0,left:0,right:0},
    nowShowingBinding:'.parentView.nowShowing'
  }),

  closeButton: ART.CloseButtonView.design({
    layout: { top: 5, left: 10, height: 10, width: 10 },
  }),

  title: SC.LabelView.design({
    classNames:['pane-bar-title'],
    layout: { top: 3, height: 25, left: 20, right: 20 },
    valueBinding: '.parentView.value',
    textAlign: SC.ALIGN_CENTER,
  }),

  // how would we make this where the value is blank and when we create the inspector pane on the fly we can pass the value then?

  minButton: ART.MinButtonView.design({
    layout: { top: 3, right: 10, height: 8, width: 21 },
  }),

  /**
   This is generated by localizing the title property if necessary.

   @type String
   @observes 'title'
   @observes 'localize'
   */
  displayTitle: function() {
    var ret = this.get('title');
    return (ret && this.get('localize')) ? SC.String.loc(ret) : (ret || '');
  }.property('title', 'localize').cacheable(),


  mouseDown: function(evt) {
    var f = this.get('frame');
    this._mouseOffsetX = f ? (f.x - evt.pageX) : 0;
    this._mouseOffsetY = f ? (f.y - evt.pageY) : 0;
    return YES;
  },

  /** @private */
  mouseDragged: function(evt) {
    if (!this.isAnchored) {
      this.set('layout', { width: this.layout.width, height: this.layout.height, left: this._mouseOffsetX + evt.pageX, top: this._mouseOffsetY + evt.pageY });
      this.updateLayout();
    }
    return YES;
  },

  /** @private */
  touchStart: function(evt) {
    return this.mouseDown(evt);
  },

  /** @private */
  touchesDragged: function(evt) {
    return this.mouseDragged(evt);
  }

})

