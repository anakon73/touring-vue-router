import { createRouter, createWebHashHistory } from 'vue-router'
import EventsList from '@/views/EventsList.vue'
import AboutPage from '@/views/AboutPage.vue'
import EventDetails from '@/views/event/EventDetails.vue'
import EventEdit from '@/views/event/EventEdit.vue'
import EventRegister from '@/views/event/EventRegister.vue'

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
    props: (route: routeType) => ({ page: parseInt(route.query.page) || 1 }),
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
  {
    path: '/events/:id/edit',
    name: 'EventEdit',
    props: true,
    component: EventEdit,
  },
  {
    path: '/events/:id/register',
    name: 'EventRegister',
    props: true,
    component: EventRegister,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
