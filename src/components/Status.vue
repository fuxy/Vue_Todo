<template>
  <div class="status" v-if="todosCount > 0">
    <button>All: {{ todosCount }}</button>&nbsp;
    <button>Completed: {{ completedTodos }}</button>&nbsp;
    <button>Not completed {{ notCompletedTodos }}</button>
    <button v-on:click="completeAllTodos">Complete All</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Status",
  computed: {
    ...mapGetters(["completedTodos", "notCompletedTodos", "todosCount"])
  },
  methods: {
    ...mapMutations(["COMPLETE_ALL"]),
    ...mapActions(["completeAll"]),
    completeAllTodos() {
      this.completeAll().then(() => {});
    }
  }
};
</script>

<style>
.status {
  margin-top: 10px;
}
</style>
