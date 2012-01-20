ART.FillStrokeView = SC.View.extend({
  layout: { top: 0, left: 0, right: 0, bottom: 0 },

  childViews: ["fillStyleText", "fillStyleButton", "styleView", "backgroundColorIdentifierFrame", "backgroundColorText", "divider", "cornerRoundness", "cornerRoundnessText", "roundnessValue", "opacity", "opacityText", "opacityValue", "strokeColorIdentifierFrame", "strokeColorText"],
  
  fillStyleText: SC.LabelView.design({
		classNames: 'text_small'.w(),
    layout: { top: 40, left: 20, height: 20, width: 100 },
    value: 'Fill Style:'
  }),

  fillStyleButton: SC.ButtonView.design({
		classNames: 'gray_button_no_gloss_med'.w(),
    layout: { top: 40, right: 20, height: 18, width: 175 },
		title: "None",
    action: function(){
			Artifix.statechart.sendEvent('showStyleView',this);
		},
	  target: 'Artifix.statechart'
  }),

	styleView: SC.View.design({
		classNames: 'linen_slide_picker'.w(),
	  layout: { top: 65, right: 0, left: 0, height: 0 },
	  childViews: ['colorFillIcon', 'imageFillIcon', 'noFillIcon'],

		colorFillIcon: SC.ImageView.design({
			classNames: 'no_opacity'.w(),
		  layout: { top: 16, left: 25, height: 57, width: 54 },
		  useCanvas: YES,
      value: sc_static('images/color_fill_icon.png')
    }),

		imageFillIcon: SC.ImageView.design({
			classNames: 'no_opacity'.w(),
		  layout: { top: 16, left: 110, height: 57, width: 54 },
		  useCanvas: YES,
      value: sc_static('images/image_fill_icon.png')
    }),

		noFillIcon: SC.ImageView.design({
			classNames: 'no_opacity'.w(),
		  layout: { top: 16, left: 200, height: 57, width: 54 },
		  useCanvas: YES,
      value: sc_static('images/no_fill_icon.png')
    }),

	}),

 	backgroundColorIdentifierFrame: SC.View.design({
		classNames: 'color_identifier_frame'.w(),
   	layout: { top: 80, left: 20, height: 25, width: 80 },
   	childViews: 'backgroundColorIdentifier'.w(),

		backgroundColorIdentifier: SC.View.design({
			backgroundColorBinding: "Artifix.partsController.backgroundColor",
		  layout: { top: 3, right: 3, bottom: 3, left: 3},
      mouseDown:function(evt){
        Artifix.statechart.sendEvent('doShowColorPicker');
      }
		}),

  }),

	backgroundColorText: SC.LabelView.design({
		classNames: 'text_small'.w(),
	  layout: { top: 83, right: 45, height: 25, width: 120 },
	  value: 'Background Color'
	}),
	
	divider: ART.DividerView.design({
	  layout: { top: 128, right: 0, height: 1, left: 0 },
	}),
	
	cornerRoundnessText: SC.LabelView.design({
	  classNames: 'text_small'.w(),
	  layout: { top: 140, left: 20, height: 25, width: 173},
	  value: 'Corner Roundess:'
	}),

	cornerRoundness: SC.SliderView.design({
	  classNames: 'slide'.w(),
    layout: { top: 160, left: 20, height: 12, width: 173},
    step: 1.0,
    value: 0.0,
    minimum: 0,
    maximum: 10.0,
	}),
	
	roundnessValue: SC.TextFieldView.design({
	  // classNames: 'textfield_right'.w(),
	  layout: { top: 155, right: 30, height: 20, width: 50},
	  hint: '0px',
	}),
	
	
	opacityText: SC.LabelView.design({
	  classNames: 'text_small'.w(),
	  layout: { top: 180, left: 20, height: 25, width: 173},
	  value: 'Opacity:'
	}),

	opacity: SC.SliderView.design({
	  classNames: 'slide'.w(),
    layout: { top: 200, left: 20, height: 12, width: 173},
    step: 1.0,
    value: 93.0,
    minimum: 0,
    maximum: 100.0,
	}),
	
	opacityValue: SC.TextFieldView.design({
	  layout: { top: 195, right: 30, height: 20, width: 50},
	  hint: '100%',
	}),
	
	strokeColorIdentifierFrame: SC.View.design({
		classNames: 'color_identifier_frame'.w(),
   	layout: { top: 235, left: 20, height: 25, width: 80 },
   	childViews: 'strokeColorIdentifier'.w(),

		strokeColorIdentifier: SC.View.design({
			backgroundColorBinding: "Artifix.partsController.backgroundColor",
		  layout: { top: 3, right: 3, bottom: 3, left: 3},
      mouseDown:function(evt){
        Artifix.statechart.sendEvent('doShowColorPickerStroke');
      }
		}),
		
  }),

	strokeColorText: SC.LabelView.design({
		classNames: 'text_small'.w(),
	  layout: { top: 239, right: 45, height: 25, width: 120 },
	  value: 'Stroke Color'
	}),
	 
});

