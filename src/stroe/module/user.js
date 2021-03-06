/**
 * Created by 长宝 on 2019/3/22.
 */
const state = {
  currentUser: null,
  isLogin:false
}

const getters = {
  currentUser: state => state.currentUser,
  isLogin: state => state.isLogin
}

const mutations = {
  // 更改用户的状态信息
  userStatus(state,user){
    if(user){
      state.currentUser = user
      state.isLogin = true
    }else{
      state.currentUser = null
      state.isLogin = false
    }
  }
}

const actions = {
  // 应用mutations
  setUser({commit},user){
    commit("userStatus",user)
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}
