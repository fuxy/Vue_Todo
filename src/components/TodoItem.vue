<template>
  <li v-bind:class="{ completed: todo.completed }">
    <div>
      <input type="checkbox" v-model="todo.completed" />
      <div>{{ todo.title }}</div>
    </div>
    <button v-on:click="removeTodos(index);">x</button>
  </li>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: ["todo", "index"],
  methods: {
    ...mapActions(["removeTodo"]),
    removeTodos: function(index) {
      this.removeTodo(index);
    }
  }
};
</script>
<style>
li,
li > div {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
}
li > div {
  justify-content: flex-start;
}
.completed > div {
  text-decoration: line-through;
  color: gray;
}
</style>
