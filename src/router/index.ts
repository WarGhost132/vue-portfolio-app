import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: () => import('@/views/Projects.vue') }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router;
