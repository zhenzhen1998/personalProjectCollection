import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   token:'',
   list:''
  },
  mutations:{
    getActive(state,payload){
      state.list=payload
    }
  },
  actions: {
    getActive (context,payload) {
      context.commit('getActive',payload)
    }
  }
 
})
