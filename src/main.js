import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

// eslint-disable-next-line no-unused-vars
import VueI18n from "vue-i18n";

import i18n from './i18n'

createApp(App).use(i18n).use(router).mount("#app");