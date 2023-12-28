<template>
  <nav x-data="{ isOpen: false }" class="relative shadow">
    <div class="container px-6 py-4 mx-auto">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex items-center justify-between">
          <a
            class="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl"
            href="/"
          >
            <span class="lg:text-lg uppecase focus:ring-0">
              elcass <span class="text-indigo-500">imad</span>
            </span>
          </a>

          <!-- Mobile menu button -->
          <div class="flex lg:hidden">
            <button
              x-cloak
              @click="isOpen = !isOpen"
              type="button"
              class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg
                v-if="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
              </svg>

              <svg
                v-if="isOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          x-cloak
          :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
          class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex max-lg:items-center hidden max-lg:flex lg:py-0 max-lg:justify-center max-lg:flex-row"
        >
          <ul class=" list-none items-center inline-flex">
            <li v-for="route in routes" :key="route.name">
              <router-link
                :to="route.to"
                class="px-2 py-8 text-sm text-gray-500 border-b-2 border-transparent lg:px-6 hover:border-blue-500 md:px-3 hover:text-blue-600"
                >{{ route.name }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'

const open = ref(false)
const isOpen = ref(false)

const routes = ref([
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Portfolio',
    to: '/portfolio'
  },
  {
    name: 'Resume',
    to: '/resume'
  },
  {
    name: 'Contact',
    to: '/contact'
  }
])
</script>
