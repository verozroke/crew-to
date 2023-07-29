import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@views/Home/HomeView.vue')
    },
    {
      path: '/crew-awards',
      name: 'CrewAwards',
      component: () => import('@views/Crew/CrewView.vue')
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: () => import('@views/Gallery/GalleryView.vue')
    },
    {
      path: '/speaker',
      name: 'Speaker',
      component: () => import('@views/Speaker/SpeakerView.vue')
    }
  ]
})

export default router
