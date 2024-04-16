import { createStore } from 'vuex'

const store = createStore({
  state: {
    isOpenModal : false
  },

  getters: {
    isOpenModal: function(state){
      return state.isOpenModal;
    }
  },

  mutations: {
    toggleModal: function(state){
      state.isOpenModal = !state.isOpenModal;
    }
  }
})

export default store;
