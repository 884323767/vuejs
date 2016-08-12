<template>
  <div class="popup-mask" v-if="popup.show" @click.stop='maskClose' transition="popup">
  	<div class="popup-wrapper" @click.stop=''>
  	  <div class="popup-container">
	        <div class="popup-header">
	          {{popup.title}}
	        </div>
	        <div class="popup-body">
	          <slot name="body">
	            default body
	          </slot>
	        </div>
	        <div class="popup-footer">
	      		<button class='popup-button' v-if='!!popup.cancel' @click.stop='cancelEvent'>{{popup.cancel}}</button>
	      		<button class='popup-button' v-if='!!popup.confirm' @click.stop='confirmEvent'>{{popup.confirm}}</button>
				</div>
  		</div>
  	</div>
  </div>
</template>
<script>
export default {
	props:{
 		popup: {
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
  },
  destroy () {
  },
	data () {
  	return {
  	}
	},
  methods:{
		maskClose () {
		  this.popup.show = false
		},
    cancelEvent () {
      this.popup.show = false;
      if (this.popup.beforeClose) this.popup.beforeClose();
    },
    confirmEvent(){
      this.popup.show = false
      if (this.popup.beforeOk) this.popup.beforeOk();
    }
  }
}
</script>

<style scoped>
.popup-mask {
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
.popup-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  max-width: 630px;
  min-width: 320px;
  z-index: 2000;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
.popup-container {
	background: #fff;
	border-radius: 5px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	transition: all 0.3s ease;
}
.popup-header{
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}
.popup-body{
  overflow: auto;
  max-height: 600px;
	padding: 15px;
}
.popup-footer{
	padding: 15px;
  text-align: center;
  border-top: 1px solid #e5e5e5;
}
.popup-button {
  border: none;
  padding: 0.6em 1.2em;
  background: #c0392b;
  color: #fff;
  font-size: 1em;
  letter-spacing: 1px;
  cursor: pointer;
  display: inline-block;
  margin: 3px 18px;
  border-radius: 2px;
}
.popup-enter, .popup-leave {
  opacity: 0;
}
.popup-enter .popup-container,
.popup-leave .popup-container {
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
}
</style>
