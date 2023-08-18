import BasicLayout from "@/layouts/BasicLayout.vue";
import NotFound from "@/views/NotFound.vue";
import { type RouteRecordRaw } from "vue-router";
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/:mathRouter(.*)*",
    component: BasicLayout,
    children: [
      {
        path: "",
        name: "NotFound",
        component: NotFound,
      },
    ],
  },
];

interface RouterMenu {
  id: string;
  name: string;
  priority: number;
}
export const routerMenuGroup: Array<RouterMenu> = [];
