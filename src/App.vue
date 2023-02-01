<script lang="ts">
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "./stores/counter";

export default {
  computed: {
    ...mapState(useCounterStore, ["count", "double"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["increment", "decrement"]),
  },
};
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <span>Number: {{ count }}</span>
      <span>Double: {{ double }}</span>
      <div>
        <button class="counterButton" @click="decrement">Decrement</button>
        <button class="counterButton" @click="increment">Increment</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./assets/variables.css";
.container {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
.wrapper {
  text-align: center;
  display: grid;
  font-size: 2rem;
}
.counterButton {
  background: var(--cyan);
  border: 1px var(--dark-cyan-50) solid;
  padding: 2px 5px;
  margin: 0 5px;
  margin-top: 1rem;
  color: var(--dark-cyan);
  font-size: 0.5em;
}
.counterButton:active {
  background: var(--dark-cyan-50);
}
</style>
