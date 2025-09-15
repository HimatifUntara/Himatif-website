import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Profile from "../pages/Profile.vue";
import UnderConstruction from "../pages/UnderConstruction.vue";
import About from "../pages/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/About", component: About },
  { path: "/Profile", component: Profile },
  { path: "/under-construction", component: UnderConstruction },

  // Optional: fallback untuk semua rute yang tidak dikenali
  { path: "/:pathMatch(.*)*", name: "NotFound", component: UnderConstruction },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});
