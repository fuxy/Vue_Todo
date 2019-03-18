<template>
  <form v-on:submit="addTodo">
    <input type="text" v-model="newTodo" placeholder="Add todo" />
  </form>
</template>

<script>
export default {
  name: "AddTodoForm",
  data: function() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo: function(e) {
      if (this.newTodo.trim().length == 0) return;

      this.$emit("addTodo", this.newTodo);
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
