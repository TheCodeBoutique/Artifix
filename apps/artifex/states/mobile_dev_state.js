Artifex.MobileDevState = SC.State.extend({
  _currentPane:null,

  enterState: function() {

    Artifex.getPath('interfaceBuilder.mainPane').append();
    //this sets a currentPane to current pane appended...this
    // prop can only be accessed within this state
    this.set('_currentPane', Artifex.getPath('interfaceBuilder.mainPane'));
  },

  troggleUIInspector: function(view) {
    var pane = Artifex.getPath('interfaceBuilder.mainPane');

    this._interfacepane = ART.InspectorPane.create({
      layout:{ top: 73, right: 350, height: 405, width: 285},
      value: "UI Components",

      nowShowing: ART.InspectorUIView.design({
        layout:{ top: 0,bottom: 0, right: 0, left: 0},
        nowShowing: "ART.PartsView"
      })

    });

    pane.appendChild(this._interfacepane);
    pane.buildInChild(this._interfacepane);

  },

  doShowColorPicker:function(type) {
     Artifex.partsController.set('currentEvent',type.event);
    this._colorpickerpane = ART.ColorPickerView.create({
		layout:{top:80,left:120,width:500,height:300}
	}),
    this._currentPane.appendChild(this._colorpickerpane);
    this._currentPane.buildInChild(this._colorpickerpane);

    this.invokeLast(function(){
      var colourPicker1 = new ColourPicker( document.getElementById('colourPicker'),'/static/artifex/en/current/source/resources/images/');
      Artifex.partsController.set('colorObject',colourPicker1);
    })
  },

  troggleVisualInspector: function(view) {
    var pane = Artifex.getPath('interfaceBuilder.mainPane');


    this._visualpane = ART.InspectorPane.create({
      layout:{ top: 73, right: 350, height: 405, width: 285},
      value: "Visual Inspector",

      nowShowing: ART.VisualInspector.design({
        layout:{ top: 0,bottom: 0, right: 0, left: 0},
        nowShowing: "ART.FillStrokeView"
      })

    });

    pane.appendChild(this._visualpane);
    pane.buildInChild(this._visualpane);

  },

  troggleAnimationInspector: function(view) {
    var pane = Artifex.getPath('interfaceBuilder.mainPane');


    this._visualpane = ART.InspectorPane.create({
      layout:{ top: 273, right: 275, height: 405, width: 285},
      value: "Animation and View",

      nowShowing: ART.AnimationViewsInspector.design({
        layout:{ top: 0,bottom: 0, right: 0, left: 0},
      })

    });

    pane.appendChild(this._visualpane);
    pane.buildInChild(this._visualpane);

  },

	showStyleView: function(view) {
		var style =  view.getPath('parentView.styleView');
		var colorFill = style.get('colorFillIcon');
		var imageFill = style.get('imageFillIcon');
		var noFill = style.get('noFillIcon');
		var divider =  view.getPath('parentView.divider');
		var colorFrame =  view.getPath('parentView.backgroundColorIdentifierFrame');
		var colorText =  view.getPath('parentView.backgroundColorText');
		var cornerRoundnessText =  view.getPath('parentView.cornerRoundnessText');
		var cornerRoundness =  view.getPath('parentView.cornerRoundness');
		var roundnessValue =  view.getPath('parentView.roundnessValue');
		var opacityText =  view.getPath('parentView.opacityText');
		var opacity =  view.getPath('parentView.opacity');
		var opacityValue =  view.getPath('parentView.opacityValue');
		var strokeColorIdentifierFrame =  view.getPath('parentView.strokeColorIdentifierFrame');
		var strokeColorText =  view.getPath('parentView.strokeColorText');
		
	    if(style.layout.height === 75){			
	    	style.animate('height',0,{duration:0.3,timing:'ease-in-out'}); // styleView
	    	colorFill.animate('opacity',0,{duration:0.5,timing:'ease-in-out'}); // colorFillIcon
	    	imageFill.animate('opacity',0,{duration:0.3,timing:'ease-in-out'}); // imageFillIcon
	    	noFill.animate('opacity',0,{duration:0.5,timing:'ease-in-out'}); // noFillIcon
	    	divider.animate('top',128,{duration:0.3,timing:'ease-in-out'}); // divider
	    	colorFrame.animate('top',80,{duration:0.3,timing:'ease-in-out'}); // backgroundColorIdentifierFrame
	    	colorText.animate('top',83,{duration:0.3,timing:'ease-in-out'}); // backgroundColorText
	    	cornerRoundnessText.animate('top',140,{duration:0.3,timing:'ease-in-out'}); // cornerRoundnessText
	    	cornerRoundness.animate('top',160,{duration:0.3,timing:'ease-in-out'}); // cornerRoundness
	    	roundnessValue.animate('top',155,{duration:0.3,timing:'ease-in-out'}); // roundnessValue
	    	opacityText.animate('top',180,{duration:0.3,timing:'ease-in-out'}); // opacityText
	    	opacity.animate('top',200,{duration:0.3,timing:'ease-in-out'}); // opacity
	    	opacityValue.animate('top',195,{duration:0.3,timing:'ease-in-out'}); // opacityValue
	    	strokeColorIdentifierFrame.animate('top',235,{duration:0.3,timing:'ease-in-out'}); // strokeColorIdentifierFrame
	    	strokeColorText.animate('top',239,{duration:0.3,timing:'ease-in-out'}); // strokeColorText
	    	
	    }else{
	    	style.animate('height',75,{duration:0.3,timing:'ease-in-out'}); // styleView
	    	colorFill.animate('opacity',1,{duration:0.5,timing:'ease-in-out'}); // colorFillIcon
	    	imageFill.animate('opacity',1,{duration:0.3,timing:'ease-in-out'}); // imageFillIcon
	    	noFill.animate('opacity',1,{duration:0.5,timing:'ease-in-out'}); // noFillIcon
	    	divider.animate('top',203,{duration:0.3,timing:'ease-in-out'}); // divider
	    	colorFrame.animate('top',155,{duration:0.3,timing:'ease-in-out'}); // backgroundColorIdentifierFrame
	    	colorText.animate('top',158,{duration:0.3,timing:'ease-in-out'}); // backgroundColorText
	    	cornerRoundnessText.animate('top',215,{duration:0.3,timing:'ease-in-out'}); // cornerRoundnessText
	    	cornerRoundness.animate('top',235,{duration:0.3,timing:'ease-in-out'}); // cornerRoundness
	    	roundnessValue.animate('top',230,{duration:0.3,timing:'ease-in-out'}); // roundnessValue
	    	opacityText.animate('top',255,{duration:0.3,timing:'ease-in-out'}); // opacityText
	    	opacity.animate('top',275,{duration:0.3,timing:'ease-in-out'}); // opacity
	    	opacityValue.animate('top',270,{duration:0.3,timing:'ease-in-out'}); // opacityValue
	    	strokeColorIdentifierFrame.animate('top',310,{duration:0.3,timing:'ease-in-out'}); // strokeColorIdentifierFrame
	    	strokeColorText.animate('top',313,{duration:0.3,timing:'ease-in-out'}); // strokeColorText
	    }
		
	},
	
	showTextOptions: function(view) {	
	  var textOptions =  view.getPath('parentView.textOptions');
	  
	    if(textOptions.layout.height === 75){	
	      textOptions.animate('height',0,{duration:0.3,timing:'ease-in-out'}); // textOptions
	    
	  }else{
	    
	    textOptions.animate('height',75,{duration:0.3,timing:'ease-in-out'}); // textOptions
	  }
	  
	},
	
	showStyleOptions: function(view) {	
	  var styleOptions =  view.getPath('parentView.styleOptions');
	  
	    if(styleOptions.layout.height === 75){	
	      styleOptions.animate('height',0,{duration:0.3,timing:'ease-in-out'}); // styleOptions
	    
	  }else{
	    
	    styleOptions.animate('height',75,{duration:0.3,timing:'ease-in-out'}); // styleOptions
	  }
	  
	},
	
	previewIphone: function() {
    var previewiPhone = ART.PreviewPane.create({
      childViews: ['deviceContainer'],//, 'tablet_preview', 'desktop_preview'],

			deviceContainer: SC.View.design(ART.Draggable,{
        classNames: ['iPhone_preview_icon', 'front_object'],
        layout: { centerX: 0, centerY: 0, height: 597, width: 308 },
				childViews:['iPhone_preview'],				

      	iPhone_preview: SC.View.design({
        	layout: { left: 27, centerY: 0, height: 380, width: 256 },
        	childView: [],
      	})

			}),

    });

    var children = Artifex.getPath('interfaceBuilder.mainPane.containerView.contentView.canvasView.childViews');
    var tmp = previewiPhone.getPath('deviceContainer.iPhone_preview');
    for(var idx= 0; idx < children.length;idx++){
      SC.info('Children length %@'.fmt(children.length));
        previewiPhone.getPath('deviceContainer.iPhone_preview.childViews').push(children[idx]);
      SC.info('Children length %@'.fmt(children.length));
    }
      // previewiPhone.get('iPhone_preview').replaceAllChildren(children);

    Artifex.interfaceBuilder.mainPane.appendChild(previewiPhone);

  },

  exitState: function() {
    Artifex.getPath('interfaceBuilder.mainPane').remove();
  }

});