import { defineStore } from "pinia";

interface PluginStoreModule {
  plugins: Array<any>;
}

export const UsePlugin = defineStore("plugin-store", {
  state: (): PluginStoreModule => ({
    plugins: [],
  }),
  actions: {},
});
