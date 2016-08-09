<template>
  <div id="app">
   <button id='show-modal' @click='showModal'>{{msg}}</button>
   <modal :show.sync="show">
     <h3 slot='header'>{{title}}</h3>
     <div slot='body'>{{boxMsg}}</div>
     <div slot='footer'>{{footer}}</div>
     <button slot='ok' @click='hiddenModal'>{{isOk}}</button>
     <button slot='no' @click='hiddenModal'>{{isNo}}</button>
    </modal>
  </div>
</template>

<script>
import modal from './components/modal'

export default {
  components: {
    modal
  },
  data (){
    return{
      show:false,
      msg: 'click',
      title:'app title',
      boxMsg:'app box msg',
      footer:'app footer',
      isOk:'app OK',
      isNo:'app NO'
    }
  },
  methods:{
    showModal(){
      this.show = true;
    },
    hiddenModal(){
      this.show = false;
    }
  }
}
</script>

<style scope>
  #show-modal{
    margin:10%;
    padding: 10px;
  }
</style>
