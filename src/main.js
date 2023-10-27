import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
// 初始号scss
import "./style/index.scss";
// 响应式
import * as responsive from "./responsive/index.js";
// 字体图标
import "@/assets/fonticon/index.css";
// 字体
import "@/assets/font/index.css";
// mock数据
import * as mock from "./mock/index";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
