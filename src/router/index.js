import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import UnderConstruction from '../pages/UnderConstruction.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/under-construction', component: UnderConstruction },

  // Optional: fallback untuk semua rute yang tidak dikenali
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: UnderConstruction }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
