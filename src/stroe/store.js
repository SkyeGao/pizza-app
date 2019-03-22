/**
 * Created by 长宝 on 2019/3/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import menu from './module/menu'
import users from './module/user'
// import status from './module/status'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules:{
    menu,
    users
  }
})
