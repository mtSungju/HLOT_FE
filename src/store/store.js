import { createStore } from 'vuex'

const store = createStore({
  state: {
    isOpenModal : false,
    params: {
      key : '',
      mode : '',
    }
  },

  getters: {
    isOpenModal: function(state){
      return state.isOpenModal;
    },

    getParams: function(state) {
      return state.params;
    }
  },

  mutations: {
    /* params = {key : '', mode : ''} */
    toggleModal: function(state, params = {}){
      state.params = params;
      state.isOpenModal = !state.isOpenModal;
    }
  }
})

export default store;
