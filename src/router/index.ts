import { createRouter, createWebHashHistory } from 'vue-router'
import EventsList from '@/views/EventsList.vue'
import AboutPage from '@/views/AboutPage.vue'
import EventLayout from '@/views/event/EventLayout.vue'
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
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
      path: 'details',
      name: 'EventDetails',
      component: EventDetails
    },
      {
      path: 'register',
      name: 'EventEdit',
      component: EventEdit
    },
      {
      path: 'edit',
      name: 'EventRegister',
      component: EventRegister
    },
  ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
