<script setup lang='ts'>
type Props = {
  resource: string
}
const props = defineProps<Props>()
const { resource = 'page' } = props
</script>

<template>
  <h1 class="font-bold text-3xl mb-3">Oops!</h1>
  <h3 class="font-bold text-lg mb-5">The {{ resource }} you're looking for is not here</h3>
  <RouterLink class="text-blue-700 font-bold rounded-md px-4 py-2 bg-slate-200" :to="{
    name: 'EventsList'
  }">
    Back to the home page
  </RouterLink>
</template>