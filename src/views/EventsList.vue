<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import type { event } from '@/types/event'
const events = ref<event[]>([])
axios
  .get('https://my-json-server.typicode.com/anakon73/real-world-vue-3/events')
  .then((response) => {
    events.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
</script>

<template>
  <h1 class="mb-[18px] text-[32px] font-bold">Events For Good</h1>
  <div class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
