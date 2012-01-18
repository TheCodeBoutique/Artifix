ART.FillStrokeView = SC.View.extend({
  layout: { top: 0, left: 0, right: 0, bottom: 0 },

  childViews: ["fillStyleText", "fillStyleButton", "styleView", "backgroundColorIdentifierFrame", "backgroundColorText", "cornerRoundness"],

  fillStyleText: SC.LabelView.design({
    classNames: 'text_small'.w(),
    layout: { top: 40, left: 20, height: 20, width: 100 },
    value: 'Fill Style:'
  }),

  fillStyleButton: SC.ButtonView.design({
    classNames: 'gray_button_med'.w(),
    layout: { top: 40, right: 30, height: 20, width: 120 },
    title: "Button",
    action: function() {
      console.log("Message"),
          Artifix.statechart.sendEvent('showStyleView', this);
    },
    target: 'Artifix.statechart'
  }),

  styleView: SC.View.design({
    classNames: 'linen_slide_picker'.w(),
    layout: { top: 70, right: 0, left: 0, height: 0 },
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
    layout: { top: 90, right: 30, height: 25, width: 80 },
    childViews: 'backgroundColorIdentifier'.w(),

    backgroundColorIdentifier: SC.View.design({
      backgroundColorBinding: "Artifix.partsController.backgroundColor",
      layout: { top: 3, right: 3, bottom: 3, left: 3},
      mouseDown:function(evt) {
        ART.devicesController.set('isAnchored', YES);

        var pane = SC.PickerPane.create({
          layout: {width: 180, height: 240},

          contentView:  SCUI.ColorPicker.design({
            layout: {centerX: 0, top: 10, width: 160, height: 185},
            valueBinding: SC.binding('value', this)
          })
        }).popup(this, SC.PICKER_POINTER)
//        Artifix.statechart.sendEvent('doShowColorPicker');
      }
    }),


  }),

  backgroundColorText: SC.LabelView.design({
    classNames: 'text_small'.w(),
    layout: { top: 97, left: 20, height: 25, width: 120 },
    value: 'Background Color'
  }),

  cornerRoundness: SC.SliderView.design({
    classNames: 'slide'.w(),
    layout: { bottom: 15, centerX: 0, height: 12, width: 173},
    step: 1.0,
    value: 0.0,
    minimum: 0,
    maximum: 10.0,
  }),

});

