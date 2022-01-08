import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../pages/index";
import Select from "../pages/select";

const routes = [
  {
    path: "/index", // 首页
    name: "Index",
    component: Index,
  },
  {
    path: "/select", // 选车页面
    name: "Select",
    component: Select,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
