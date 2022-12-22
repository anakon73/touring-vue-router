<script setup lang="ts">
import { ref } from 'vue'
import EventService from '@/services/EventService'
import type { event } from '@/types/event'
const { id } = defineProps(['id'])
const event = ref<event>()

EventService.getEvent(id)
  .then((response) => {
    event.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
</script>

<template>
  <div v-if="event">
    <h1 class="text-[32px] font-bold">{{ event.title }}</h1>
    <nav class="flex justify-center gap-2 my-3 font-bold">
      <RouterLink 
      :to="{ name: 'EventDetails', params: { id } }" 
      active-class="text-emerald-400"
      >
        Details
      </RouterLink>
      |
      <RouterLink 
      :to="{ name: 'EventRegister', params: { id } }" 
      active-class="text-emerald-400"
      >
        Register
      </RouterLink>
      |
      <RouterLink 
      :to="{ name: 'EventEdit', params: { id } }"
      active-class="text-emerald-400"
      >
        Edit
      </RouterLink>
    </nav>
    <p class="my-5">
      {{ event.time }} on {{ event.date }} @ {{ event.location }}
    </p>
    <p>{{ event.description }}</p>
  </div>
</template>
