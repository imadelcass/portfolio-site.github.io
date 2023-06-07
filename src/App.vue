<template>
  <navbar />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { event } from 'vue-gtag'
import { useRoute } from 'vue-router'
import { onMounted, watch } from 'vue'

const route = useRoute()

onMounted(() => {
  event('App Mounted')
})

watch(route, (newVal) => {
  event('Route Change', newVal.name)
})
</script>
