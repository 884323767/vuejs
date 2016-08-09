<template>
  <div id="app">
   <button id='show-modal' @click='shwoModal = true'>{{msg}}</button>
   <modal :show.sync="shwoModal">
   <h3 slot='header'>custom header</h3>
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
      shwoModal:false,
      msg: 'click',
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
