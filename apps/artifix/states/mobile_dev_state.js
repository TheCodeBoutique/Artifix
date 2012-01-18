Artifix.MobileDevState = SC.State.extend({
  _currentPane:null,

  enterState: function() {

    Artifix.getPath('interfaceBuilder.mainPane').append();
    //this sets a currentPane to current pane appended...this
    // prop can only be accessed within this state
    this.set('_currentPane', Artifix.getPath('interfaceBuilder.mainPane'));
  },

  troggleUIInspector: function(view) {
    var pane = Artifix.getPath('interfaceBuilder.mainPane');

    this._interfacepane = ART.InspectorPane.create(ART.Draggable, {
      layout:{ top: 73, right: 350, height: 405, width: 285},
      value: "User Interface",

      nowShowing: ART.InspectorUIView.design({
        layout:{ top: 0,bottom: 0, right: 0, left: 0},
        nowShowing: "ART.PartsView"
      })

    });

    pane.appendChild(this._interfacepane);
    pane.buildInChild(this._interfacepane);

  },

  doShowColorPicker:function(context) {

    this._colorpickerpane = ART.ColorPickerView.create({
      layout: {left: 0, top: 70, width: 201, height: 324},
    });
    this._currentPane.appendChild(this._colorpickerpane);
    this._currentPane.buildInChild(this._colorpickerpane);
  },

  troggleVisualInspector: function(view) {
    var pane = Artifix.getPath('interfaceBuilder.mainPane');


    this._visualpane = ART.InspectorPane.create(ART.Draggable, {
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

    this._animationpane = ART.InspectorPane.create({
      isModal: NO,
      layout:{ top: 73, right: 350, height: 405, width: 285},
      value: "Animation and Views",
      childViews: ["closeButton", "title", "minButton"],
    });

    this._animationpane.append();

  },

	showStyleView: function(view) {
		var style =  view.getPath('parentView.styleView');
		var colorFill = style.get('colorFillIcon');
		var imageFill = style.get('imageFillIcon');
		var noFill = style.get('noFillIcon');
		var colorFrame =  view.getPath('parentView.backgroundColorIdentifierFrame');
		var colorText =  view.getPath('parentView.backgroundColorText');
		
	    if(style.layout.height === 75){			
	    	style.animate('height',0,{duration:0.3,timing:'ease-in-out'}); // styleView
	    	colorFill.animate('opacity',0,{duration:0.5,timing:'ease-in-out'}); // colorFillIcon
	    	imageFill.animate('opacity',0,{duration:0.3,timing:'ease-in-out'}); // imageFillIcon
	    	noFill.animate('opacity',0,{duration:0.5,timing:'ease-in-out'}); // noFillIcon
	    	colorFrame.animate('top',90,{duration:0.3,timing:'ease-in-out'}); // backgroundColorIdentifierFrame
	    	colorText.animate('top',97,{duration:0.3,timing:'ease-in-out'}); // backgroundColorText
	    }else{
	    	style.animate('height',75,{duration:0.3,timing:'ease-in-out'}); // styleView
	    	colorFill.animate('opacity',1,{duration:0.5,timing:'ease-in-out'}); // colorFillIcon
	    	imageFill.animate('opacity',1,{duration:0.3,timing:'ease-in-out'}); // imageFillIcon
	    	noFill.animate('opacity',1,{duration:0.5,timing:'ease-in-out'}); // noFillIcon
	    	colorFrame.animate('top',155,{duration:0.3,timing:'ease-in-out'}); // backgroundColorIdentifierFrame
	    	colorText.animate('top',160,{duration:0.3,timing:'ease-in-out'}); // backgroundColorText
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

    var children = Artifix.getPath('interfaceBuilder.mainPane.containerView.contentView.canvasView.childViews');
    var tmp = previewiPhone.getPath('deviceContainer.iPhone_preview');
    for(var idx= 0; idx < children.length;idx++){
      SC.info('Children length %@'.fmt(children.length));
        previewiPhone.getPath('deviceContainer.iPhone_preview.childViews').push(children[idx]);
      SC.info('Children length %@'.fmt(children.length));
    }
      // previewiPhone.get('iPhone_preview').replaceAllChildren(children);

    Artifix.interfaceBuilder.mainPane.appendChild(previewiPhone);

  },

  exitState: function() {
    Artifix.getPath('interfaceBuilder.mainPane').remove();
  }

});