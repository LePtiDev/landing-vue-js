import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Library
import { gsap } from "gsap";
import VueFormulate from "@braid/vue-formulate";

createApp(App).use(store).use(router).use(gsap).use(VueFormulate).mount("#app");
