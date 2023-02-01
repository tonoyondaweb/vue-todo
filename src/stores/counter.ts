import { defineStore } from "pinia";

export const useCounterStore = defineStore("storeId", {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) this.count--;
    },
  },
});
