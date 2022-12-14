<script setup lang="ts">
import type { event } from '@/types/event'
interface Props {
  event: event
}
const { event } = defineProps<Props>()
</script>

<template>
  <RouterLink :to="{ name: 'EventDetails', params: { id: event.id } }">
    <div
      class="p-5 w-[250px] cursor-pointer border border-slate-700 mb-[18px] hover:scale-[1.01] hover:shadow-[0_3px_12px_0_rgba(0,0,0,0.2)]"
    >
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4 class="text-xl font-semibold">
        {{ event.title }}
      </h4>
    </div>
  </RouterLink>
</template>
