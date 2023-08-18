import { createApp } from "vue";
import App from "./App.vue";
import route from "./router";
import "./styles/tailwind.css";
const app = createApp(App);

function initApp() {
  try {
    console.log("init router");
  } catch (e) {
    console.error(e);
  } finally {
    app.use(route);
    app.mount("#app");
  }
}

initApp();
