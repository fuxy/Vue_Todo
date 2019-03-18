import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { title: "Milk", completed: false },
      { title: "Juice", completed: true }
    ]
  },
  getters: {
    todosCount: state => {
      return state.todos.length;
    },
    completedTodos: state => {
      let result = state.todos.filter(todo => todo.completed == true);
      return result.length;
    },
    notCompletedTodos: state => {
      let result = state.todos.filter(todo => todo.completed == false);
      return result.length;
    }
  },
  mutations: {
    ADD_TODO: (state, todo) => {
      state.todos.push({ title: todo, completed: false });
    },
    REMOVE_TODO: (state, todo) => {
      state.todos.splice(todo, 1);
    },
    COMPLETE_ALL: state => {
      state.todos.map(todo => (todo.completed = true));
    }
  },
  actions: {
    removeTodo(context, todo) {
      context.commit("REMOVE_TODO", todo);
    },
    completeAll({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("COMPLETE_ALL");
          resolve();
        }, 0);
      });
    }
  }
});
