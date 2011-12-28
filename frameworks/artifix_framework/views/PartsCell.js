/**
 * Created by IntelliJ IDEA.
 * User: kcarriedo
 * Date: 12/23/11
 * Time: 12:01 AM
 * To change this template use File | Settings | File Templates.
 */
ART.PartsCell = SC.View.extend({
  classNames:['pane-cell'],

  layout:{},

  cellTitle:'' ,

  cellDescription:'',


  childViews:['title','description', 'itemImage'],

  title:SC.LabelView.design({
    classNames:['pane-title'],
    layout: { left: 7, height: 25, top: 10, width: 200 },
    needsEllipsis:YES,
    escapeHTML: NO,
    isTextSelectable: YES,
    valueBinding:'.parentView.cellTitle'
  }),

  description:SC.LabelView.design({
    classNames:['pane-description'],
    layout: { left: 13, height: 40, top: 36, width: 145 },
    escapeHTML: NO,
    isTextSelectable: NO,
    isTextArea:YES,
    valueBinding:'.parentView.cellDescription'
  }),
  
  itemImage: SC.View.design({
    
  })
  
});
