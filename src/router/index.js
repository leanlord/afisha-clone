import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import FilmView from "@/views/FilmView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/films/:id",
    name: "film",
    component: FilmView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = "Афиша - куда сходить в Краснодаре";
  next();
});

export default router;
