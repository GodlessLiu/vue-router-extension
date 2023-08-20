import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import modules from "./modules";
import { default as route, default as router } from "./router";
import "./styles/tailwind.css";
import type { PluginModule } from "./utils";
const app = createApp(App);
app.use(createPinia());

function initCoreModule(pluginModule: PluginModule) {
  if (pluginModule.components) {
    Object.keys(pluginModule.components).forEach((key) => {
      const component = pluginModule.components?.[key];
      if (component) {
        app.component(key, component);
      }
    });
  }
  if (pluginModule.routes) {
    for (const route of pluginModule.routes) {
      if ("parentName" in route) {
        // router.addRoute(route.parentName, route.route);
      } else {
        router.addRoute(route);
      }
    }
  }
}

function initApp() {
  try {
    console.log("init router");
    modules.forEach((module) => {
      initCoreModule(module);
    });
  } catch (e) {
    console.error(e);
  } finally {
    app.use(route);
    app.mount("#app");
  }
}

initApp();
