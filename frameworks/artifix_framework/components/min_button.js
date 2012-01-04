// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2011 Apple Inc. All rights reserved.
//            Portions ©2011-2012 The Code Boutique LLC. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================


/**
  @static
  @constant
  @type String
*/
SC.TOGGLE_BEHAVIOR = 'toggle';

/**
  @static
  @constant
  @type String
*/
SC.PUSH_BEHAVIOR =   'push';

/**
  @static
  @constant
  @type String
*/
SC.TOGGLE_ON_BEHAVIOR = 'on';

/**
  @static
  @constant
  @type String
*/
SC.TOGGLE_OFF_BEHAVIOR = 'off';

/**
  @static
  @constant
  @type String
*/
SC.HOLD_BEHAVIOR = 'hold';

/** @class

  
  The ART.MinButtonView is used within the ART.InspectorPane.  Its purpose is to close the inspector pane.  One would not use this button on its own.
  Rather, the ART.InspectorPane comes standered with it when appended to the DOM.
  

  
  @extends SC.View
  @author Chad Eubanks
*/
ART.MinButtonView = SC.View.extend(
/** @scope ART.MinButtonView.prototype */ {

  /**
    @see SC.View#classNames
  */
  classNames: ['min_button'],

  
  
  /**
    The name of the action you want triggered when the button is pressed.

    This property is used in conjunction with the target property to execute
    a method when a regular button is pressed.  These properties are not
    relevant when the button is used in toggle mode.

    If you do not set a target, then pressing a button will cause the
    responder chain to search for a view that implements the action you name
    here.  If you set a target, then the button will try to call the method
    on the target itself.

    For legacy support, you can also set the action property to a function.
    Doing so will cause the function itself to be called when the button is
    clicked.  It is generally better to use the target/action approach and
    to implement your code in a controller of some type.

    @type String
    @default null
  */
  action: function(evt) {
	  console.log("min");
    // this.getPath('.parentView').animate('height', 20,{duration: 0.0,timing:'linear'});  
    this.getPath('.parentView').adjust('height',20);
  },
  
  /**
     The WAI-ARIA role of the button.

     @type String
     @default 'button'
     @readOnly
   */
   ariaRole: 'min inspector button',
   
   
    /** @private
       On mouse down, set active only if enabled.
     */
     mouseDown: function(evt) {
       var buttonBehavior = this.get('buttonBehavior');

       if (!this.get('isEnabled')) return YES ; // handled event, but do nothing
       this.set('isActive', YES);
       this._isMouseDown = YES;

       if (buttonBehavior === SC.HOLD_BEHAVIOR) {
         this._action(evt);
       } else if (!this._isFocused && (buttonBehavior!==SC.PUSH_BEHAVIOR)) {
         this._isFocused = YES ;
         this.becomeFirstResponder();
       }

       return YES;
     },

     /** @private
       Remove the active class on mouseExited if mouse is down.
     */
     mouseExited: function(evt) {
       if (this._isMouseDown) {
         this.set('isActive', NO);
       }
       return YES;
     },

     /** @private
       If mouse was down and we renter the button area, set the active state again.
     */
     mouseEntered: function(evt) {
       if (this._isMouseDown) {
         this.set('isActive', YES);
       }
       return YES;
     },

     /** @private
       ON mouse up, trigger the action only if we are enabled and the mouse was released inside of the view.
     */
     mouseUp: function(evt) {
       if (this._isMouseDown) this.set('isActive', NO); // track independently in case isEnabled has changed
       this._isMouseDown = false;

       if (this.get('buttonBehavior') !== SC.HOLD_BEHAVIOR) {
         var inside = this.$().within(evt.target);
         if (inside && this.get('isEnabled')) this._action(evt) ;
       }

       return YES ;
     },

     /** @private */
     touchStart: function(touch){
       var buttonBehavior = this.get('buttonBehavior');

       if (!this.get('isEnabled')) return YES ; // handled event, but do nothing
       this.set('isActive', YES);

       if (buttonBehavior === SC.HOLD_BEHAVIOR) {
         this._action(touch);
       } else if (!this._isFocused && (buttonBehavior!==SC.PUSH_BEHAVIOR)) {
         this._isFocused = YES ;
         this.becomeFirstResponder();
       }

       // don't want to do whatever default is...
       touch.preventDefault();

       return YES;
     },

     /** @private */
     touchesDragged: function(evt, touches) {
       if (!this.touchIsInBoundary(evt)) {
         if (!this._touch_exited) this.set('isActive', NO);
         this._touch_exited = YES;
       } else {
         if (this._touch_exited) this.set('isActive', YES);
         this._touch_exited = NO;
       }

       evt.preventDefault();
       return YES;
     },

     /** @private */
     touchEnd: function(touch){
       this._touch_exited = NO;
       this.set('isActive', NO); // track independently in case isEnabled has changed

       if (this.get('buttonBehavior') !== SC.HOLD_BEHAVIOR) {
         if (this.touchIsInBoundary(touch) && this.get('isEnabled')) {
           this._action();
         }
       }

       touch.preventDefault();
       return YES ;
     },

     /** @private */
     keyDown: function(evt) {
       // handle tab key
        if(!this.get('isEnabled')) return YES;
       if (evt.which === 9 || evt.keyCode === 9) {
         var view = evt.shiftKey ? this.get('previousValidKeyView') : this.get('nextValidKeyView');
         if(view) view.becomeFirstResponder();
         else evt.allowDefault();
         return YES ; // handled
       }
       if (evt.which === 13 || evt.which === 32) {
         this.triggerActionAfterDelay(evt);
         return YES ; // handled
       }

       // let other keys through to browser
       evt.allowDefault();

       return NO;
     },

     /** @private
       Perform an action based on the behavior of the button.

        - toggle behavior: switch to on/off state
        - on behavior: turn on.
        - off behavior: turn off.
        - otherwise: invoke target/action
     */
     _action: function(evt, skipHoldRepeat) {
       switch(this.get('buttonBehavior')) {

       // When toggling, try to invert like values. i.e. 1 => 0, etc.
       case SC.TOGGLE_BEHAVIOR:
         var sel = this.get('isSelected') ;
         if (sel) {
           this.set('value', this.get('toggleOffValue')) ;
         } else {
           this.set('value', this.get('toggleOnValue')) ;
         }
         break ;

       // set value to on.  change 0 => 1.
       case SC.TOGGLE_ON_BEHAVIOR:
         this.set('value', this.get('toggleOnValue')) ;
         break ;

       // set the value to false. change 1 => 0
       case SC.TOGGLE_OFF_BEHAVIOR:
         this.set('value', this.get('toggleOffValue')) ;
         break ;

       case SC.HOLD_BEHAVIOR:
         this._runHoldAction(evt, skipHoldRepeat);
         break ;

       // otherwise, just trigger an action if there is one.
       default:
         //if (this.action) this.action(evt);
         this._runAction(evt);
       }
     },

     /** @private */
     _runAction: function(evt) {
       var action = this.get('action'),
           target = this.get('target') || null,
           rootResponder = this.getPath('pane.rootResponder');

       if (action) {
         if (this._hasLegacyActionHandler()) {
           // old school... V
           this._triggerLegacyActionHandler(evt);
         } else {
           if (rootResponder) {
             // newer action method + optional target syntax...
             rootResponder.sendAction(action, target, this, this.get('pane'), null, this);
           }
         }
       }    
     },

     /** @private */
     _runHoldAction: function(evt, skipRepeat) {
       if (this.get('isActive')) {
         this._runAction();

         if (!skipRepeat) {
           // This run loop appears to only be necessary for testing
           SC.RunLoop.begin();
           this.invokeLater('_runHoldAction', this.get('holdInterval'), evt);
           SC.RunLoop.end();
         }
       }
     },

     /** @private */
     _hasLegacyActionHandler: function() {
       var action = this.get('action');
       if (action && (SC.typeOf(action) === SC.T_FUNCTION)) return true;
       if (action && (SC.typeOf(action) === SC.T_STRING) && (action.indexOf('.') != -1)) return true;
       return false;
     },

     /** @private */
     _triggerLegacyActionHandler: function( evt )
     {
       if (!this._hasLegacyActionHandler()) return false;

       var action = this.get('action');
       if (SC.typeOf(action) === SC.T_FUNCTION) this.action(evt);
       if (SC.typeOf(action) === SC.T_STRING) {
         eval("this.action = function(e) { return "+ action +"(this, e); };");
         this.action(evt);
       }
     },

     /** @private */
     didBecomeKeyResponderFrom: function(keyView) {
       // focus the text field.
       if (!this._isFocused) {
         this._isFocused = YES ;
         this.becomeFirstResponder();
         if (this.get('isVisibleInWindow')) {
           this.$().focus();
         }
       }
     },

     /** @private */
     willLoseKeyResponderTo: function(responder) {
       if (this._isFocused) this._isFocused = NO ;
     },

     /** @private */
     didAppendToDocument: function() {
       if(parseInt(SC.browser.msie, 0)===7 && this.get('useStaticLayout')){
         var layout = this.get('layout'),
             elem = this.$(), w=0;
         if(elem && elem[0] && (w=elem[0].clientWidth) && w!==0 && this._labelMinWidthIE7===0){
           var label = this.$('.sc-button-label'),
               paddingRight = parseInt(label.css('paddingRight'),0),
               paddingLeft = parseInt(label.css('paddingLeft'),0),
               marginRight = parseInt(label.css('marginRight'),0),
               marginLeft = parseInt(label.css('marginLeft'),0);
           if(marginRight=='auto') SC.Logger.log(marginRight+","+marginLeft+","+paddingRight+","+paddingLeft);
           if(!paddingRight && isNaN(paddingRight)) paddingRight = 0;
           if(!paddingLeft && isNaN(paddingLeft)) paddingLeft = 0;
           if(!marginRight && isNaN(marginRight)) marginRight = 0;
           if(!marginLeft && isNaN(marginLeft)) marginLeft = 0;

           this._labelMinWidthIE7 = w-(paddingRight + paddingLeft)-(marginRight + marginLeft);
           label.css('minWidth', this._labelMinWidthIE7+'px');
         }else{
           this.invokeLater(this.didAppendToDocument, 1);
         }
       }
     }

   }) ;



   /**
     The delay after which "click" behavior should transition to "click and hold"
     behavior. This is used by subclasses such as PopupButtonView and
     SelectButtonView.

     @constant
     @type Number
   */
   SC.ButtonView.CLICK_AND_HOLD_DELAY = SC.browser.msie ? 600 : 300;

   SC.REGULAR_BUTTON_HEIGHT=24;


