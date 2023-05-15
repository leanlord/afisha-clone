import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import FilmView from "@/views/FilmView.vue";

const routes = [
  {
    path: "/main",
    name: "main",
    component: () => MainView,
  },
  {
    path: "/films/:id",
    name: "film",
    component: () => FilmView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
