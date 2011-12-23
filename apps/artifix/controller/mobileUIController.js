// ==========================================================================
// Project:   Artifix.mobileUIController 
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Artifix */

/** @class

  The mobileUIController changes the state of the views button from YES to NO.  
  Yes animates the button to the left and reveles the other view options.
  No animates the button to the right and hides the other view options.


  @extends array
*/
Artifix.mobileUIController = SC.ArrayController.create(SC.SelectionSupport,{

  isViewsButtonON: NO

});
