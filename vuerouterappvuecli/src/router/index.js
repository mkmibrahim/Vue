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
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "vue-active-link",
});

export default router;
