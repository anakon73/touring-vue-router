<template>
  <div class="text-center text-slate-700 font-sans m-2">
    <nav class="p-[30px]">
      <router-link
        class="font-bold text-slate-700"
        active-class="text-emerald-400"
        :to="{ name: 'EventsList' }"
        >Events</router-link
      >
      |
      <router-link
        class="font-bold text-slate-700"
        active-class="text-emerald-400"
        :to="{ name: 'AboutPage' }"
        >About</router-link
      >
    </nav>
    <router-view />
  </div>
</template>
