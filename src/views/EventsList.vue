<script setup lang="ts">
import { ref } from 'vue'
import EventService from '@/services/EventService'
import { watchEffect, toRefs, computed } from 'vue'
import type { event } from '@/types/event'
const props = defineProps(['page'])
const { page } = toRefs(props)

const events = ref<event[]>([])
const totalEvents = ref<number>(6)

watchEffect(() => {
  EventService.getEvents(2, page?.value)
    .then((response) => {
      events.value = response.data
      // totalEvents.value = response.headers['X-Total-Count']
    })
    .catch((error) => {
      console.log(error)
    })
})

const hasNextPage = computed(() => {
  let totalPages = Math.ceil(totalEvents.value / 2)

  return page?.value < totalPages
})
</script>

<template>
  <h1 class="mb-[18px] text-[32px] font-bold">Events For Good</h1>
  <div class="flex flex-col items-center">
    <EventCard
      class="mb-[18px]"
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
    <div class="flex w-[290px]">
      <RouterLink
        class="flex-1 text-slate-700 text-left"
        id="page-prev"
        :to="{ name: 'EventsList', query: { page: page - 1 } }"
        v-if="page != 1"
        rel="prev"
        >&#60; Previous</RouterLink
      >
      <RouterLink
        class="flex-1 text-slate-700 text-right"
        id="page-next"
        :to="{ name: 'EventsList', query: { page: page + 1 } }"
        v-if="hasNextPage"
        rel="next"
        >Next &#62;</RouterLink
      >
    </div>
  </div>
</template>
