import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'

Vue.use(VueRouter)

axios.defaults.baseURL='https://wd4573041499akpliu.wilddogio.com/'

  const router = new VueRouter({
    routes,
    mode:'history', //去掉url前面的#
    scrollBehavior(to,from,savedPosition){
      return{
        // x:0,
        // y:100
      }
    }
  })

//全局守卫
  // router.beforeEach((to,from,next)=>{
  //   //console.log(to)
  //   if(to.path=='/login'||to.path=='/regist'){
  //       next();
  //   }else {
  //     alert("你还没有登录");
  //     next('/login')
  //   }
  // })
//后置钩子
// router.afterEach((to,from)=>{
//   alert("after each")
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
