import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {
        firstName: "",
        lastName: "",
        email: "",
      },
      tasks: []
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  });
};

export default createStore;