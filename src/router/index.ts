import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./router.config";

const route = createRouter({
  history: createWebHistory(),
  routes,
});

export default route;
