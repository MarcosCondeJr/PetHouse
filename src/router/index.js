import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import PetsPage from '../pages/PetsPage.vue'
import VacinasPage from '../pages/VacinasPage.vue'
import LembretesPage from '../pages/LembretesPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/pets', name: 'PetsPage', component: PetsPage },
  { path: '/vacinas', name: 'VacinasPage', component: VacinasPage },
  { path: '/lembretes', name: 'LembretesPage', component: LembretesPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
