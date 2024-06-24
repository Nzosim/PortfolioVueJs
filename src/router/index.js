import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/components/Homepage.vue'
import TechStack from '@/components/TechStack.vue'
import Projects from '@/components/Projects.vue'
import About from '@/components/About.vue'
import NotFound from '@/components/NotFound.vue'
import Soon from '@/components/soon.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/techstack',
      name: 'techstack',
      component: TechStack
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/about/contact',
      name: 'contact',
      component: About
    },
    {
      path: '/:pathMatch(.*)*', // Ceci correspond à toutes les routes non définies
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/soon',
      name: 'soon',
      component: Soon
    }
  ]
})

export default router
