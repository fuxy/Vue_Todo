<template>
  <form v-on:submit="addTodo">
    <input type="text" v-model="newTodo" placeholder="Add todo">
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AddTodoForm",
  data: function() {
    return {
      newTodo: ""
    };
  },
  methods: {
    ...mapMutations(["ADD_TODO"]),
    addTodo: function(e) {
      if (this.newTodo.trim().length == 0) return;

      this.ADD_TODO(this.newTodo);
      this.newTodo = "";
      e.preventDefault();
    }
  }
};
</script>

<style>
form,
input[type="text"] {
  width: 100%;
}
</style>
