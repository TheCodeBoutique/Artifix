ART.PositionField = SC.TextFieldView.extend({

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
  });
