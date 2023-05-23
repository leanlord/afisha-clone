import { defineStore } from "pinia";

export const userStore = defineStore("userStore", {
  state: () => ({
    isUserAuth: false,
  }),
});
