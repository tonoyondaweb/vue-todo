<script lang="ts">
import { mapState } from "pinia";
import TodoInput from "./components/TodoInput.vue";
import { useTodoStore } from "./stores/todoStore";

export default {
  components: {
    TodoInput,
  },
  computed: {
    ...mapState(useTodoStore, ["todoList"]),
  },
};
</script>

<template>
  <div :class="$style.container">
    <div :class="$style['components-wrapper']">
      <TodoInput />
      <p v-for="item in todoList" v-bind:key="item.id">{{ item }}</p>
    </div>
  </div>
</template>

<style module>
.container {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
.components-wrapper {
  width: 100%;
}
</style>
