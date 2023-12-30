<template>
  <div class="py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:w-3/4 m-auto">
        <div
          class="shadow-lg dark:shadow dark:shadow-gray-500 bg-white dark:bg-slate-800 h-96 rounded hover:cursor-pointer"
          v-for="(project, i) in projects"
          :key="i"
          @click="itemClicked(project)"
        >
          <div class="h-1/2 border-b dark:border-gray-600">
            <img :src="project.img" class="h-full w-full object-contain object-center" />
          </div>
          <div class="p-2">
            <a
              class="text-indigo-500 after:content-['_↗'] block"
              :href="project.url"
              target="_blank"
              >{{ project.name }}</a
            >
            <div class="h-14">
              <el-tag
                v-for="el in project.stack"
                :key="el.label"
                :type="project.type"
                size="small"
                class="mr-1"
                :effect="modeStore.isDark ? 'dark' : 'light'"
                >{{ el }}
              </el-tag>
            </div>
            <p class="text-md line-clamp-3 font-light text-gray-500 dark:text-gray-400">
              {{ project.desc }}
            </p>
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
import agriwise from '@/assets/img/agriwise.png'
import maahid from '@/assets/img/maahid.png'
import Detail from '@/components/Detail.vue'
import { useModeStore } from '@/stores/modeStore'

const modeStore = useModeStore()
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
    type: 'success',
    stack: ['JavaScript', 'Vue', 'Php', 'Laravel', 'MySQL'],
    name: 'Agriwise',
    url: '#',
    desc: 'Agriwise is a comprehensive farm management system that streamlines various agricultural processes. It provides tools for managing employees, users, point-of-sale, inventory, reception, expedition, and more. With Agriwise, farmers can efficiently track and analyze their operations, enabling better decision-making and increased productivity.',
    img: agriwise,
    start_date: '2020-01-01',
    end_date: '2020-01-01'
  },
  {
    id: 2,
    type: 'danger',
    stack: ['JavaScript', 'Vue', 'Php', 'Laravel', 'MySQL'],
    name: 'Ma3ahid',
    url: '#',
    desc: 'Agriwise is a comprehensive farm management system that streamlines various agricultural processes. It provides tools for managing employees, users, point-of-sale, inventory, reception, expedition, and more. With Agriwise, farmers can efficiently track and analyze their operations, enabling better decision-making and increased productivity. The web application is built using JavaScript and the Vue.js framework.',
    img: maahid,
    start_date: '2020-01-01',
    end_date: '2020-01-01'
  },
  {
    id: 3,
    type: '',
    stack: ['JavaScript', 'React Native', 'Php', 'Laravel', 'MySQL'],
    name: 'Bimma EWD',
    url: 'https://play.google.com/store/apps/details?id=com.bimma_ewd_v2',
    desc: 'Bimma EWD is a mobile application developed using JavaScript, React Native, PHP, and Laravel frameworks. It serves as a useful tool for accessing electrical schemas of various BMW models. Users can easily search for a specific schema and view it within the app. They also have the option to download the schema or add it to their bookmarks for future reference. To explore the source code, please check the provided link.',
    img: bimma,
    start_date: '2020-01-01',
    end_date: '2020-01-01'
  }
])
</script>
