<template>
  <router-view></router-view>
  <div id="app" class="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>

    <!-- <button id='show-modal' @click='showModal'>{{msg}}</button>
    <popup :popup='popup'>
     <div slot='body'>
      <h4>{{boxMsg}}</h4>
      <input type="text" name="">>
     </div>
    </pop-up> -->
  </div>
</template>

<script>
import popup from './components/Popup'
import Toolbar from './components/Toolbar';
import NotesList from './components/NotesList';
import Editor from './components/Editor';
import store from './vuex/store';
import { initStore } from './vuex/actions';
export default {
  components: {
    popup,Toolbar, NotesList, Editor
       },
  data (){
    return{
      msg: 'click',
      boxMsg: 'app msg',
      popup:{
        show:false,                //弹窗是否显示,false不显示，true显示
          title:'app title',         //弹窗标题
          confirm:'确认',            //确认按钮显示文本,没有则不显示确认按钮
          cancel:'取消',             //取消按钮显示文本，没有则不显示取消按钮
          beforeOk () {alert('beforeOk')},  
          beforeClose () {alert('beforeClose')}
      },
    }
  },
  store,
  vuex:{
    actions:{
      initStore
    }
  },
  methods:{
    showModal(){
      this.popup.show = true;
    },
    hiddenModal(){
      this.show = false;
    },
  },
  ready () {
    this.initStore();
  },
}
</script>

<style scope>
body{
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  line-height: 1.42857143;
  color: #333;
}
#show-modal{
  margin:10%;
  padding: 10px;
}
h3{
  margin: 0;
}
button{
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  text-align: center;
  cursor: pointer;
}
</style>
