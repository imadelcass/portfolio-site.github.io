import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Home' }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
      meta: { title: 'Portfolio' }
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
      meta: { title: 'Resume' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { title: 'Contact' }
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'home' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
