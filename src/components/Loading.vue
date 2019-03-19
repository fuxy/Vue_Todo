<template>
  <div class="loading" v-if="loading"><img src="/images/loader.png" /></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Loading",
  computed: {
    ...mapGetters(["loading"])
  }
};
</script>

<style>
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10000;
  background-color: rgba(255, 255, 255, 0.9);
  color: green;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
