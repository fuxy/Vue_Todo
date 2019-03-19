<template>
  <div class="status" v-if="todosCount > 0">
    <button v-on:click="setFilter('');">All: {{ todosCount }}</button>
    <button v-on:click="setFilter('completed');">
      Completed: {{ completedTodos }}
    </button>
    <button v-on:click="setFilter('active');">Active {{ activeTodos }}</button>
    <button class="ghost" v-on:click="completeAllTodos">Complete All</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Status",
  computed: {
    ...mapGetters([
      "completedTodos",
      "activeTodos",
      "todosCount",
      "filterTodos"
    ])
  },
  methods: {
    ...mapMutations(["COMPLETE_ALL", "FILTER_TODOS"]),
    ...mapActions(["completeAll"]),
    completeAllTodos() {
      this.completeAll().then(() => {});
    },
    setFilter: function(filter) {
      this.FILTER_TODOS(filter);
    }
  }
};
</script>

<style>
.status {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.status button {
  flex: 1;
  margin-bottom: 5px;
}
.ghost {
  border: 1px solid gray;
  background: transparent;
}
</style>
