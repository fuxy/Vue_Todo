import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    filter: "",
    loading: true
  },
  getters: {
    loading: state => {
      return state.loading;
    },
    todosCount: state => {
      return state.todos.length;
    },
    completedTodos: state => {
      let result = state.todos.filter(todo => todo.completed == true);
      return result.length;
    },
    activeTodos: state => {
      let result = state.todos.filter(todo => todo.completed == false);
      return result.length;
    },
    filteredTodos: state => {
      console.log(state.todos);
      switch (state.filter) {
        case "active":
          return state.todos.filter(todo => todo.completed == false);
          break;
        case "completed":
          return state.todos.filter(todo => todo.completed == true);
          break;
        default:
          return state.todos;
      }
    }
  },
  mutations: {
    ADD_TODO: (state, todo) => {
      state.todos.push({ title: todo, completed: false });
      firebase
        .database()
        .ref("todos")
        .push({ title: todo, completed: false });
    },
    REMOVE_TODO: (state, todo) => {
      state.todos.splice(todo, 1);
    },
    COMPLETE_ALL: state => {
      state.todos.map(todo => (todo.completed = true));
    },
    FILTER_TODOS: (state, filter) => {
      state.filter = filter;
    },
    SET_LOADED_TODOS: (state, payload) => {
      state.todos = payload;
      state.loading = false;
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
    },
    loadTodos({ commit }) {
      this.state.loading = true;
      firebase
        .database()
        .ref("todos")
        .once("value")
        .then(data => {
          const obj = data.val();
          const todos = [];
          for (let key in obj) {
            todos.push({
              id: key,
              title: obj[key].title,
              completed: obj[key].completed
            });
          }
          commit("SET_LOADED_TODOS", todos);
        });
    }
  }
});
