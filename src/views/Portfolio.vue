<template>
  <div class="py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
        <div
          class="shadow-lg bg-white h-96 rounded hover:cursor-pointer"
          v-for="(project, i) in projects"
          :key="i"
          @click="itemClicked(project)"
        >
          <div class="h-1/2 border-b">
            <img :src="project.img" class="h-full w-full object-contain object-center" />
          </div>
          <div class="p-2">
            <a class="text-indigo-500 after:content-['_↗'] ..." :href="project.url" target="_blank">{{ project.name }}</a>
            <p class="text-md line-clamp-4 font-light text-gray-500">{{ project.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <detail />
</template>

<script setup>
import { provide, ref } from 'vue'
import bimma from '@/assets/img/bimma.png'
import agriwise from '@/assets/img/agriwise.jpg'
import maahid from '@/assets/img/maahid.png'
import Detail from '@/components/Detail.vue'

const modelVisible = ref(false)
const item = ref({})
const setModelVisible = (value) => (modelVisible.value = value)
provide('detail_model', { modelVisible, item, setModelVisible })

const itemClicked = (e) => {
  item.value = Object.assign({}, e)
  setModelVisible(true)
}

const projects = ref([
  {
    id: 1,
    type: 'Web App',
    stack: ['JavaScript', 'Vue'],
    name: 'Agriwise',
    "url" : "#",
    desc: 'Agriwise is a comprehensive farm management system that streamlines various agricultural processes. It provides tools for managing employees, users, point-of-sale, inventory, reception, expedition, and more. With Agriwise, farmers can efficiently track and analyze their operations, enabling better decision-making and increased productivity. The web application is built using JavaScript and the Vue.js framework.',
    img: agriwise
  },
  {
    id: 2,
    type: 'Web App',
    stack: ['JavaScript', 'Vue'],
    name: 'Ma3ahid',
    "url" : "#",
    desc: 'Agriwise is a comprehensive farm management system that streamlines various agricultural processes. It provides tools for managing employees, users, point-of-sale, inventory, reception, expedition, and more. With Agriwise, farmers can efficiently track and analyze their operations, enabling better decision-making and increased productivity. The web application is built using JavaScript and the Vue.js framework.',
    img: maahid
  },
  {
    id: 3,
    type: 'Mobile App',
    stack: ['JavaScript', 'React Native', 'Php', 'Laravel'],
    name: 'Bimma EWD',
    "url" : "#",
    desc: 'Bimma EWD is a mobile application developed using JavaScript, React Native, PHP, and Laravel frameworks. It serves as a useful tool for accessing electrical schemas of various BMW models. Users can easily search for a specific schema and view it within the app. They also have the option to download the schema or add it to their bookmarks for future reference. To explore the source code, please check the provided link.',
    img: bimma
  }
])
</script>
