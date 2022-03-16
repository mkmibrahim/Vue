import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
//import NotFound from "../views/NotFound.vue";
import sourceData from "@/data.json";

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
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to) {
      const exists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      if (!exists)
        return {
          name: "NotFound",
          // allows keeping the URL while rendering a different page
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("@/views/ExperienceShow.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: "/destination2/:id/:slug",
    name: "destination2.show",
    component: () => import("@/views/DestinationShow2.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    //component: NotFound,
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // linkActiveClass: "vue-active-link",
  // scrollBehavior(to, from, savedPosition) {
  //   return savedPosition || new Promise ((resolve) => {
  //       setTimeout(() => resolve({ top: 0 }), 300);
  //   })
  // },
  scrollBehavior(savedPosition) {
    // eslint-disable-next-line
    /* eslint-disable */
    return savedPosition || 
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behaviour: 'smooth' }), 300);
      });  }
});

export default router;
