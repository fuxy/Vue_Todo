<template>
  <ul>
    <TodoItem
      v-for="(todo, index) in todos"
      :todo="todo"
      :index="index"
      :key="index"
    />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";
import { mapState } from "vuex";

export default {
  name: "TodoList",
  computed: {
    ...mapState(["todos"])
  },
  components: {
    TodoItem
  }
};
</script>

<style>
ul {
  margin: 10px auto 0;
  padding: 0;
  list-style: none;
  width: 100%;
}
</style>
