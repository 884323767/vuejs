<template>
  <div class="mask" v-show="popUp.show" transition="popUp">
  	<div class="wrapper">
  	  <div class="container">
	        <div class="header">
	          {{popUp.title}}
	        </div>
	        <div class="body">
	          <slot name="body">
	            default body
	          </slot>
	        </div>
	        <div class="footer">
	      		<button class='button' v-if='!!popUp.cancel' @click.stop='cancelEvent'>{{popUp.cancel}}</button>
	      		<button class='button' v-if='!!popUp.confirm' @click.stop='confirmEvent'>{{popUp.confirm}}</button>
				</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
	props:{
 		popUp: {
        type: Object,
        default () {
          return {
            show:false,
            title:'default title',
            confirm:'确定',
            cancel:'取消',
            beforeOk () {},
            beforeClose () {}
          }
        }
      }
	},
  ready () {
    document.addEventListener('click', this.maskClose)
  },
  destroy () {
    document.removeEventListener('click', this.maskClose)
  },
	data () {
  	return {
  	}
	},
  methods:{
		maskClose () {
		  this.popUp.show = false
		},
    cancelEvent () {
      this.popUp.show = false;
      if (this.popUp.beforeClose) this.popUp.beforeClose();
    },
    confirmEvent(){
      this.popUp.show = false
      if (this.popUp.beforeOk) this.popUp.beforeOk();
    }
  }
}
</script>

<style scoped>
.mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}
.wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  max-width: 630px;
  min-width: 320px;
  height: auto;
  z-index: 2000;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
.container {
	background: #fff;
	border-radius: 5px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	transition: all 0.3s ease;
}
.header{
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}
.body{
	padding: 15px;
}
.footer{
	padding: 15px;
  text-align: center;
  border-top: 1px solid #e5e5e5;
}
.button {
  border: none;
  padding: 0.6em 1.2em;
  background: #c0392b;
  color: #fff;
  font-size: 1em;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  margin: 3px 18px;
  border-radius: 2px;
}
.popUp-enter, .popUp-leave {
  opacity: 0;
}
.popUp-enter .container,
.popUp-leave .container {
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
}
</style>
