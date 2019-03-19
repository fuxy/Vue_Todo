<template>
  <li v-bind:class="{ completed: todo.completed }">
    <div>
      <input type="checkbox" v-model="todo.completed" />
      <div>{{ todo.title }}</div>
    </div>
    <button class="remove" v-on:click="remove(index);">&times;</button>
  </li>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: ["todo", "index"],
  methods: {
    ...mapActions(["removeTodo"]),
    remove: function(index) {
      this.removeTodo(index);
    }
  }
};
</script>
<style>
li {
  border-bottom: 1px solid lightgray;
}
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
.remove {
  font-size: 1em;
  font-weight: bold;
  color: red;
  border: 0;
  background: transparent;
}
</style>
