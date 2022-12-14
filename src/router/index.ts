import { createRouter, createWebHashHistory } from 'vue-router'
import EventsList from '@/views/EventsList.vue'
import AboutPage from '@/views/AboutPage.vue'
import EventDetails from '@/views/EventDetails.vue'

const routes = [
  {
    path: '/',
    name: 'EventsList',
    component: EventsList,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/events/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
