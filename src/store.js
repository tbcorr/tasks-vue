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

    getters: {
      getTask: (state) => (id) => {
        return state.tasks.find((task) => {
          return task.id === id;
        });
      },

      getTasks: (state) => {
        return state.tasks;
      },

      getUser: (state) => {
        return state.user;
      }
    },

    mutations: {
      addTask: (state, task) => {
        state.tasks = [...state.tasksList, ...task];
      },

      updateTask: (state, task) => {
        const index = state.task.indexOf(task);

        state.tasks = [...state.state.tasks.splice(index, 1), task];
      },

      removeTask: (state, task) => {
        const index = state.task.indexOf(task);

        state.tasks = [...state.state.tasks.splice(index, 1)];
      }
    },

    actions: {

    }
  });
};

export default createStore;