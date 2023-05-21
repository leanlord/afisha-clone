import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import FilmView from "@/views/FilmView.vue";

const routes = [
  {
    path: "/*",
    name: "catchAll",
    redirect: "/",
  },
  {
    path: "/",
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

router.beforeEach((to, from, next) => {
  console.log("ERROR");
  document.title = "Афиша - куда сходить в Краснодаре";
  next();
});

export default router;
