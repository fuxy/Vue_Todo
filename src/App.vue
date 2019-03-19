<template>
  <div id="app">
    <AddTodoForm v-on:addTodo="addTodoToList" /> <TodosList /> <Status />
    <Loading />
  </div>
</template>

<script>
import AddTodoForm from "./components/AddTodoForm";
import TodosList from "./components/TodosList";
import Status from "./components/Status";
import Loading from "./components/Loading";

export default {
  name: "App",
  components: {
    AddTodoForm,
    TodosList,
    Status,
    Loading
  },
  methods: {
    addTodoToList: function(todo) {
      this.todos.push({ title: todo, completed: false });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  width: 300px;
}
</style>
