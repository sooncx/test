// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Rating from './components/Rating'//组件测试
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import '../static/css/style.css'
import iconfont from './../static/js/iconfont.js'     //引入公用js
Vue.prototype.$iconfont = iconfont;
Vue.config.productionTip = false
Vue.use(VueResource)
import Mint from 'mint-ui'
Vue.use(Mint)
import '../node_modules/mint-ui/lib/style.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//==router:router,因为import touter的名字等于router，可以简写为router,
  components: { App },
  template: '<App/>'
})
// 

//组件测试,将Rating.vue（上面是app.vue）页面里的内容作为组件进行调用
// new Vue({
//   el: '#app',
//   components: { Rating },
//   template: '<Rating/>'
// })



