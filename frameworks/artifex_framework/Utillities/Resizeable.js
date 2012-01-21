/**
 * Created by IntelliJ IDEA.
 * User: kcarriedo
 * Date: 12/24/11
 * Time: 10:15 AM
 * To change this template use File | Settings | File Templates.
 */
ART.Resizable = SC.View.extend(SCUI.Resizable, {
  classNames:['handles'],
  backgroundColor:"black",
//  isVisibleBinding:'.parentView.isHovering',
  layout:{bottom:0,right:0,height:16,width:16},
});
