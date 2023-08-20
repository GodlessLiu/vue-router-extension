import type { Component } from "vue";
import { type RouteRecordRaw } from "vue-router";

export interface PluginModule {
  components?: Record<string, Component>;
  routes?: Array<RouteRecordRaw>;
}

export function definePlugin(plugin: PluginModule): PluginModule {
  return plugin;
}
