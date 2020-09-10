import { createRouter, createWebHistory } from 'vue-router'
import Missions from '../views/Missions.vue'
import Mission from '../views/Mission.vue'

const routes = [
  {
    path: '/',
    name: 'Missions',
    component: Missions
  },
  {
    path: '/:id',
    name: 'Mission',
    component: Mission,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  }
})

export default router
