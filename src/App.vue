<template>
  <div :class="darkMode ? 'dark' : ''">
    <div class="bg-gray-100 dark:bg-slate-800 min-h-screen">
      <navbar @change="toggleMode" />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { event } from 'vue-gtag'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()

const darkMode = ref(false)

const toggleMode = (value) => {
  darkMode.value = value
}

watch(route, (newVal) => {
  event('Route Change', newVal.name)
})
</script>
