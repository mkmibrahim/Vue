import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
//import AboutView from "../views/AboutView.vue";
//import BrazilView from "../views/BrazilView.vue";
//import HawaiiView from "../views/HawaiiView.vue";
//import JamaicaView from "../views/JamaicaView.vue";
//import PanamaView from "../views/PanamaView.vue";
//import NetherlandsView from "../views/NetherlandsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    //component: AboutView,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () =>
      import(/* webpackChunkName: "brazil" */ "../views/BrazilView.vue"),
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () =>
      import(/* webpackChunkName: "hawaii" */ "../views/HawaiiView.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () =>
      import(/* webpackChunkName: "jamaica" */ "../views/JamaicaView.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () =>
      import(/* webpackChunkName: "panama" */ "../views/PanamaView.vue"),
  },
  {
    path: "/netherlands",
    name: "netherlands",
    component: () =>
      import(
        /* webpackChunkName: "netherlands" */ "../views/NetherlandsView.vue"
      ),
  },
  {
    path: "/destination/:id",
    component: () => import("../views/DestinationShow.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "vue-active-link",
});

export default router;
