<script setup lang="ts">
const { event } = defineProps(['event'])
</script>

<template>
  <p class="my-5">
    {{ event.time }} on {{ event.date }} @ {{ event.location }}
  </p>
  <p>{{ event.description }}</p>
</template>
