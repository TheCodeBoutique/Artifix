ART.PositionChanger = SC.View.extend({
  //layout:{height:40,width:73},
  layout: {},
  childViews:['positionField' , 'arrowView' , "titleView"],
  /**
   * object that you want to adjust position most like would want to bind to a element controller
   */
  object:null,
  /**
   * position is a string that you will want to adjust for example height , width , top , left , right , bottom
   */
  position:null,

  /**
   * Hint view in text field
   */
  hint:"",

  /**
   * title view
   */
  title:"",

  positionField:SC.TextFieldView.extend({

    layout: {height: 24, width: 55 },
    /**
     * Hint view in text field
     */
    hintBinding:"parentView.hint",
    /**
     * value will be used to resize or move your object that you are bound to above
     */
    value:'',
    /**
     * capture return key events
     */
    keyDown: function(evt) {
      sc_super();
      var codes = evt.commandCodes(), cmd = codes[0];
      if (cmd === 'return') {
        this.doAdjust();
      }
      return YES;
    },
    objectDidChange:function() {
      if(!this.getPath('parentView.object') || SC.typeOf(this.getPath('parentView.object')) === SC.T_STRING) {
        return NO;
      }
      //TODO more error checking and handling
      if (this.getPath('parentView.object') && this.getPath('parentView.position') === "width" || this.getPath('parentView.position') === "height") {
        p = this.getPath('parentView.position'),
            obj = this.getPath('parentView.object'),
            val = obj.get(p);
        this.set('value', val);
      }

      var l = "layout",
          p = this.getPath('parentView.position'),
          path = l + "." + p;

      if (this.getPath('parentView.object')) {
        var obj = this.getPath('parentView.object'), val = obj.getPath(path);
        this.set('value', val);
      }
    }.observes('.parentView.object'),

    doAdjust:function() {
        if(this.getPath('parentView.position') === "width" || this.getPath('parentView.position') === "height"){
             this.doAdjustSize();
        } else if (this.getPath('parentView.object') && this.get('value')) {
        var num = this.get('value');
        var int = parseInt(num);
        var obj = this.getPath('parentView.object');
        this.getPath('parentView.object').animate(this.getPath('parentView.position'), int, {duration:.2, timing:'ease-in-out'});
      }
    },
    doAdjustSize:function() {
      if (this.getPath('parentView.object') && this.get('value')) {
        var num = this.get('value');
        var int = parseInt(num);
        var obj = this.getPath('parentView.object');
        this.getPath('parentView.object').adjust(this.getPath('parentView.position'), int);
      }
    }
  }),


  /**up and down arrow*/
  arrowView:SC.View.design({
    layout: { height: 24, right:0, width: 15 },
    render:function(context) {
      context.push(
          [
            '<div class="arrow-up">','</div>',
            '<div class="arrow-down">','</div>'
          ].join('')
      )
    },
    mouseDown: function(evt) {
      var obj = this.getPath('parentView.positionField');
      if (SC.$(evt.target).hasClass('arrow-up')) {
        if (obj.value) {
          var add = parseInt(obj.get('value'))
          obj.set('value', add + 1);
          obj.doAdjust();
          return YES;
        }
      }
      else if (SC.$(evt.target).hasClass('arrow-down')) {
        //Clean up logic
        if (obj.get('value')) {
          var num = parseInt(obj.get('value'));
          if (num >= 0) {
            obj.set('value', num - 1);
            obj.doAdjust();
          } else {
            obj.set('value', 0);
            return YES;
          }
        }
      } else {
        return NO;
      }
    }
  }),
  titleView:SC.LabelView.design({
    layout: { left: -12, height: 15, right:0,bottom:0},
    needsEllipsis:YES,
    controlSize: SC.SMALL_CONTROL_SIZE,
    fontWeight: SC.BOLD_WEIGHT,
    textAlign:SC.ALIGN_CENTER,
    escapeHTML: NO,
    isTextSelectable: YES,
    valueBinding:'.parentView.title'
  })
});