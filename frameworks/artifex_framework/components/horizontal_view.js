ART.HorzontalView = SC.View.extend({
  classNames:['horizontal-view'],

  childViews: ['ViewOne','ViewTwo','ViewThree','ViewFour'],

  ViewOne:SC.View.extend({
    layout:{left:0,width:251,height:362},
    childViews:['emptyMessage'],
    emptyMessage:SC.LabelView.design({
      classNames:['text_medium'],
      layout:{left:30, centerY:0,height:20,width:0.99},
      value:"View 1 drop elements"
    })
  }),

  ViewTwo:SC.View.extend({
    layout:{left:251,width:251,height:362},
    backgroundColor:'lightgray',
    childViews:['emptyMessage'],
    emptyMessage:SC.LabelView.design({
      classNames:['text_medium'],
      layout:{left:30, centerY:0,height:20,width:0.99},
      value:"View 2 drop elements"
    })
  }),

  ViewThree:SC.View.extend({
    layout:{left:502,width:251,height:362},
    backgroundColor:'yellow',
    childViews:['emptyMessage'],
    emptyMessage:SC.LabelView.design({
      classNames:['text_medium'],
      layout:{left:30, centerY:0,height:20,width:0.99},
      value:"View 3 drop elements"
    })
  }),


  ViewFour:SC.View.extend({
    layout:{left:753,width:251,height:362},
    backgroundColor:'lightblue',
    childViews:['emptyMessage'],
    emptyMessage:SC.LabelView.design({
      classNames:['text_medium'],
      layout:{left:30, centerY:0,height:20,width:0.99},
      value:"View 4 drop elements"
    })
  })
});
