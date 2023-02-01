<script lang="ts">
import TodoInput from "./components/TodoInput.vue";

export default {
  components: {
    TodoInput,
  },
};
</script>

<template>
  <div :class="$style.container">
    <TodoInput />
  </div>
</template>

<style module>
.container {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
</style>
