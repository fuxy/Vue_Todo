<template>
  <ul>
    <TodoItem v-for="(todo, index) in todos" :todo="todo" :key="index" />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  props: ["todos"],
  components: {
    TodoItem
  }
};
</script>

<style>
ul {
  margin: 0 auto;
  padding: 0;
  list-style: none;
  width: 100%;
}
</style>
