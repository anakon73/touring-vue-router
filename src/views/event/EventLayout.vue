<script setup lang="ts">
import { ref } from 'vue'
import EventService from '@/services/EventService'
import type { event } from '@/types/event'
import router from '@/router';
const { id } = defineProps(['id'])
const event = ref<event>()

EventService.getEvent(id)
  .then((response) => {
    event.value = response.data
  })
  .catch((error) => {
    if (error.response && error.response.status === 404) {
      router.push({
        name: '404Resource',
        params: { resource: 'event' }
      })
    } else {
      router.push({ name: 'NetworkError' })
    }

  })

const links = ref([
  {
    name: 'Details',
    page: "EventDetails"
  },
  {
    name: 'Register',
    page: "EventRegister"
  },
  {
    name: 'Edit',
    page: "EventEdit"
  }
])
</script>

<template>
  <div v-if="event">
    <h1 class="text-[32px] font-bold">{{ event.title }}</h1>
    <nav class="flex justify-center gap-2 my-3 font-bold">
      <RouterLink v-for="(link, index) in links" :to="{ name: `${link.page}` }" active-class="text-emerald-400">
        {{ link.name }}
        <template v-if="index < links.length - 1">
          <span class="text-slate-700">|</span>
        </template>
      </RouterLink>
    </nav>
    <RouterView :event="event" />
  </div>
</template>