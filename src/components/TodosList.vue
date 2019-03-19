<template>
  <ul>
    <TodoItem
      v-for="(todo, index) in filteredTodos"
      :todo="todo"
      :index="index"
      :key="index"
    />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";
import { mapState, mapGetters } from "vuex";

export default {
  name: "TodoList",
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["filteredTodos"])
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
