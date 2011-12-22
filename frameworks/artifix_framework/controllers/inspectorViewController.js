// ==========================================================================
// Project:   ART.inspectorViewController
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals ART */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
ART.inspectorViewController = SC.Object.create(
/** @scope ART.inspectorViewController.prototype */ {
	nowShowing: 'ART.leftone.leftView',
		
		Parts: function() {
		  console.log("parts");
	    this.set('nowShowing', 'ART.leftone.leftView');    
	  },
	  
	  Views: function() {
	    console.log("views");
	    this.set('nowShowing', 'ART.rightone.rightView');    
    }
    
});
