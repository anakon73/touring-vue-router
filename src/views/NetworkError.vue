<script setup lang='ts'>
import router from '@/router';
</script>

<template>
  <h1 class="font-bold text-3xl mb-3">Uh-Oh!</h1>
  <h3 class="font-bold text-lg mb-5">It looks like you're experiencing some network issues, please take
    a breath and <a href="#" @click="router.go(-1)">click here</a> to try again.
  </h3>
</template>