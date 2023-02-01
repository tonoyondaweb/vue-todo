<script lang="ts">
export default {
  data() {
    let text: string = "";
    return {
      text,
    };
  },
  methods: {
    consoleItem() {
      const item = {
        id: "",
        todoText: this.text,
        done: false,
      };
      console.log(item);
      this.text = "";
    },
  },
};
</script>

<template>
  <div :class="$style.container">
    <form>
      <input :class="$style['text-input']" type="text" v-model="text" />
    </form>
    <button
      :class="[
        $style['add-button'],
        { [$style['add-button-enabled']]: text.length > 0 },
      ]"
      @click="consoleItem"
    >
      Add Item
    </button>
  </div>
</template>

<style module>
.container {
  width: 100%;
  max-width: 450px;
  text-align: center;
}
.text-input {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  font-size: 1em;
  background: transparent;
  border: 0;
  border-bottom: 0.23rem var(--dark-cyan) solid;
  color: var(--dark-cyan);
  padding: 1px 0.5rem;
  opacity: 0.2;
  outline: none;
  transition: opacity 200ms;
}
.text-input:focus {
  opacity: 1;
}
.add-button {
  font-size: 1.2em;
  margin-top: 15px;
  padding: 0.2rem 1rem;
  background: var(--cyan);
  border: 1px solid var(--dark-cyan);
  border-radius: 4px;
  cursor: pointer;
  float: right;
  opacity: 0;
  transition: opacity 150ms;
}

.add-button:active {
  background: var(--bright-cyan);
}

.add-button-enabled {
  opacity: 1;
}
</style>
