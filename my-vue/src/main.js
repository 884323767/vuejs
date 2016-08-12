import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Hello from './components/Hello.vue'
Vue.use(VueRouter)
Vue.use(VueResource)
var router = new VueRouter({
	history:true,
	saveScrollPosition:true
})

router.map({
	'/hello':{
		component:Hello
	},
	'/index':{
		component: App
	}
})
router.redirect({
    '*': '/index',
});
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
// const App = Vue.extend(App1);
router.start(App,'app')