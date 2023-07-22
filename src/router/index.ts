import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@views/Home/HomeView.vue')
    },
    {
      path: '/jury',
      name: 'Jury',
      component: () => import('@views/Jury/JuryView.vue')
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
