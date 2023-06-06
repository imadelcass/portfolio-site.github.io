<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="mb-6 flex items-end justify-between gap-4">
        <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">Collections</h2>

        <a
          href="https://github.com/imadelcass"
          class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >Show more</a
        >
      </div>

      <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
        <div v-for="(project, i) in projects" :key="i" @click="itemClicked(project)">
          <a
            href="#"
            class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
          >
            <img
              :src="project.img"
              loading="lazy"
              class="h-full w-full object-contain object-center transition duration-200 group-hover:scale-110"
            />
          </a>
          <div class="flex flex-col">
            <span class="text-gray-500">{{ project.type }}</span>
            <a
              href="#"
              class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
              >{{ project.name }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <detail />
</template>
<script setup>
import { provide, ref } from 'vue'
import bimma from '../assets/img/bimma.png'
import portfolio from '../assets/img/portfolio.png'
import Detail from '../components/Detail.vue'

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
    desc: 'Agriwise is a comprehensive farm management system that streamlines various agricultural processes. It provides tools for managing employees, users, point-of-sale, inventory, reception, expedition, and more. With Agriwise, farmers can efficiently track and analyze their operations, enabling better decision-making and increased productivity. The web application is built using JavaScript and the Vue.js framework.',
    img: 'https://media.licdn.com/dms/image/D4E0BAQFixQwo_sMWTg/company-logo_200_200/0/1680611971270?e=1694044800&v=beta&t=B6RewpkHyLfAvYhRZ_q0wMK60W80sWj2ofJKKB2rXWM'
  },
  {
    id: 2,
    type: 'Mobile App',
    stack: ['JavaScript', 'React Native', 'Php', 'Laravel'],
    name: 'Bimma EWD',
    desc: 'Bimma EWD is a mobile application developed using JavaScript, React Native, PHP, and Laravel frameworks. It serves as a useful tool for accessing electrical schemas of various BMW models. Users can easily search for a specific schema and view it within the app. They also have the option to download the schema or add it to their bookmarks for future reference. To explore the source code, please check the provided link.',
    img: bimma
  },
  {
    id: 3,
    type: 'Web App',
    stack: ['JavaScript', 'Vue', 'Php', 'Laravel'],
    name: 'Inventory MS',
    desc: 'Inventory MS is a web application built using JavaScript, Vue.js, PHP, and Laravel frameworks. It provides a comprehensive inventory management system for businesses. With Inventory MS, users can efficiently track and manage their inventory, ensuring optimal stock levels and minimizing stockouts. The system offers features such as inventory tracking, order management, stock alerts, and reporting capabilities.',
    img: 'https://b2180414.smushcdn.com/2180414/wp-content/uploads/2020/10/small-business-inventory-management.png?lossy=0&strip=1&webp=1'
  },
  {
    id: 4,
    type: 'Web App',
    stack: ['JavaScript', 'Vue'],
    name: 'Portfolio',
    desc: 'Portfolio is a personal website showcasing the work, skills, and achievements of an individual. It serves as a digital resume and a platform to exhibit projects and accomplishments. The Portfolio web app is developed using JavaScript and the Vue.js framework. It offers an attractive and user-friendly interface to present information, including project details, contact information, and professional background.',
    img: portfolio
  }
])

</script>
