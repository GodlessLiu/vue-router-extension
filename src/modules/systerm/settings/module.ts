import BasicLayoutVue from "@/layouts/BasicLayout.vue";
import { definePlugin } from "@/utils";
import SettingsVue from "./Settings.vue";
export default definePlugin({
  components: {},
  routes: [
    {
      path: "/settings",
      component: BasicLayoutVue,
      children: [
        {
          path: "",
          component: SettingsVue,
        },
      ],
    },
  ],
});
