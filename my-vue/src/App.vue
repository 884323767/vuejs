<template>
  <div id="app">
    <button id='show-modal' @click.stop='showModal'>{{msg}}</button>
    <pop-up :pop-up='popUp'>
     <div slot='body'>
      <h4>{{boxMsg}}</h4>
      <p>test</p>
     </div>
    </pop-up>
  </div>
</template>

<script>
import popUp from './components/popUp'
export default {
  components: {
    popUp
  },
  data (){
    return{
      msg: 'click',
      boxMsg: 'app msg',
      popUp:{
        show:false,
        title:'app title',
        confirm:'确定',
        cancel:'取消',
        beforeOk () {
          this.show=true;
          setTimeout(()=>{
            this.show=false;
            console.log('beforeOK');},10000)
          },
        beforeClose () {alert('2')}
      },
    }
  },
  methods:{
    showModal(){
      this.popUp.show = true;
    },
    hiddenModal(){
      this.show = false;
    },
  },
  ready () {
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
