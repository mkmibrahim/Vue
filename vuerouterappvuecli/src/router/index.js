import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BrazilView from "../views/BrazilView.vue";
import HawaiiView from "../views/HawaiiView.vue";
import JamaicaView from "../views/JamaicaView.vue";
import PanamaView from "../views/PanamaView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/brazil",
    name: "brazil",
    component: BrazilView,
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: HawaiiView,
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: JamaicaView,
  },
  {
    path: "/panama",
    name: "panama",
    component: PanamaView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
