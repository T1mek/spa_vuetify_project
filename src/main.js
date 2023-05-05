import App from "./App.vue";

import { createApp } from "vue";

import { registerPlugins } from "@/plugins";
import store from "@/store";
import router from "@/router";


const app = createApp(App);

registerPlugins(app);

app
  .use(router)
  .use(store)
  .mount("#app");

