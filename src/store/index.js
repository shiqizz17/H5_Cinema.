import Vue from 'vue'
import Vuex from 'vuex'
import Cinema from './modules/cinemaModule'
import City from './modules/cityModule'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// 创建store实例
export default new Vuex.Store({
  // Vuex持久化
  plugins: [createPersistedState()],
  // 模块
  modules: {
    Cinema,
    City
  }
})