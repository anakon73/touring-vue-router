import { createRouter, createWebHashHistory } from 'vue-router'
import EventsList from '@/views/EventsList.vue'
import AboutPage from '@/views/AboutPage.vue'
import EventDetails from '@/views/EventDetails.vue'

type routeType = {
  query: {
    page: string
  }
}

const routes = [
  {
    path: '/',
    name: 'EventsList',
    component: EventsList,
    props: (route: any) => ({ page: parseInt(route.query.page) || 1 }),
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
