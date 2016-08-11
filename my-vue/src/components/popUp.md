## 统一弹窗说明:

引入组件Popup:
```javascript
import popup from './components/Popup.vue'
```
```html
    <popup :popup='popup'>
     <div slot='body'>
       <p>test</p>
     </div>
    </popup>
```
popup是传递给子组件的数据，可能包含属性有
```javascript
popup:{
  show:false,                //弹窗是否显示,false不显示，true显示
  title:'app title',         //弹窗标题
  confirm:'确定',            //确认按钮显示文本,没有则不显示确认按钮
  cancel:'取消',             //取消按钮显示文本，没有则不显示取消按钮
  beforeOk () {alert('beforeOk')},  //点击确认按钮后,关闭弹窗前执行的方法,如果方法中修改show值,可以更改弹窗是否显示
  beforeClose () {alert('beforeClose')}//点击取消按钮后,关闭弹窗前执行的方法,如果方法中修改show值,可以更改弹窗是否显示
},
```
父组件可以根据popup.show的值来控制是否弹窗

弹窗body部分信息是有父组件通过slot传递
```
slot='body'块会显示在弹窗body部分
```