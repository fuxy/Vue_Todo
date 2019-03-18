<template>
  <li v-bind:class="{ completed: todo.completed }">
    <div>
      <input type="checkbox" v-model="todo.completed" />
      <div>{{ todo.title }}</div>
    </div>
    <button v-on:click="removeTodo(todo);">x</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    removeTodo: function(todo) {
      // this.todos.push({ title: todo, completed: false });
      console.log(todo);
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
