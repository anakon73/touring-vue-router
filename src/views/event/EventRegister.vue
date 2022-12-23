<script setup lang="ts">
import router from '@/router';

const { event } = defineProps(['event'])

const register = () => {
  router.push({
    name: "EventDetails",
  })
}
</script>

<template>
  <p class="my-5">Register for the event here</p>
  <button @click="register">Register Me</button>
</template>
