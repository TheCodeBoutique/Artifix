// ==========================================================================
// Project:   Artifix
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Artifix */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Artifix.main = function main() {

  SC.ExceptionHandler._displayErrorDialog = function(exception) {

    SC.error("Error = %@".fmt(exception.message));

    var restartApp = function() {
      window.location.reload();
    };

    var pane = ART.ErrorPane.create({
      layout:{centerX:0,centerY:0,height:325,width:750},
      contentView:SC.View.extend({
        childViews:['title','description','reload','image'],

        image: SC.View.design({
          layout: { centerX: 0, top:30, height:150, width: 200 },
          render:function(context){
            context.push('<div class="error-image"></div>');
          }
        }),

        title:SC.LabelView.design({
          classNames:['error-title'],
          layout: { top: 185, height: 60, centerX: 0, left: 20, right: 20 },
          needsEllipsis:YES,
          isTextSelectable: YES,
          textAlign:SC.ALIGN_CENTER,
          value:"What did you do?"
        }),

        description:SC.LabelView.design({
          classNames:['error-description'],
          layout: { top: 230, height: 24, centerX: 0, left: 20, right:20 },
          needsEllipsis:YES,
          escapeHTML: NO,
          isTextSelectable: YES,
          textAlign:SC.ALIGN_CENTER,
          value:"There has been an error"
        }),

        reload:SC.ButtonView.design({
          classNames: 'gray_button_med'.w(),
          layout:{bottom:15,centerX:0,width:200,height:27},
          title:"Reload".loc(),
          action:restartApp
        })
      })
    });
    pane.append();

    this.isShowingErrorDialog = YES;

  };


    // Register our routes
  // Our URL will look like 'http://localhost:4020/route_sample#twoMain/twoPane'
  // This means that 'twoMain' will get passed into RouteSample.routes.gotoRoute()
  // as the pageName property of the input parameter object, while 'twoPane'
  // will get passed as the paneName property.
  SC.routes.add(':currentView', Artifix.routes, 'gotoRoute');

  // This is the 'catch-all' route just in case nothing else fits.
  // This is used when the URL is specified upon start up without
  // any parameters: 'http://localhost:4020/route_sample'.
  SC.routes.add(':', Artifix.routes, 'gotoRoute');


  // Step 1: Tell your app it will load via states
  var statechart = Artifix.statechart;
  SC.RootResponder.responder.set('defaultResponder', statechart);
  statechart.initStatechart();

};

function main() {
  Artifix.main();
}
