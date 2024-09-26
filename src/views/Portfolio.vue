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
            <img :src="project.logo" class="h-full w-full object-contain object-center" />
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
import elevateGuru from '@/assets/img/elevateGuru.png'
import agriwise from '@/assets/img/agriwise.png'
import Detail from '@/components/Detail.vue'
import maahid from '@/assets/img/maahid.png'
import m1 from '@/assets/img/m1.png'
import m2 from '@/assets/img/m2.png'
import m3 from '@/assets/img/m3.png'
import m4 from '@/assets/img/m4.png'
import m5 from '@/assets/img/m5.png'
import eg1 from '@/assets/img/eg1.svg'
import eg2 from '@/assets/img/eg2.svg'
import eg3 from '@/assets/img/eg3.svg'
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
    type: '',
    stack: ['CakePHP', 'MySQL', 'Docker', 'Puppeteer', 'WebSockets', 'Laravel', 'Vue'],
    name: 'Elevate Guru',
    url: 'https://www.elevateguru.com/en',
    desc: 'ElevateGuru.com is an online platform tailored for business advisors and entrepreneurs, enhancing workflow and collaboration. It guides startups through essential steps, from developing compelling business concepts to optimizing operations. With a comprehensive toolkit for informed decision-making, exceptional training programs, and monitoring tools, ElevateGuru empowers users to measure impact and highlight success stories. The platform fosters collaboration, providing resources for various business development aspects, making it essential for entrepreneurs at any stage of their journey.',
    logo: elevateGuru,
    imgs: [eg1, eg2, eg3]
  },
  {
    id: 2,
    type: 'success',
    stack: ['JavaScript', 'Vue', 'Php', 'Laravel', 'MySQL'],
    name: 'Agriwise',
    url: 'https://agriwise.ma',
    desc: 'Agriwise is a comprehensive farm management system that streamlines various agricultural processes. It provides tools for managing employees, users, point-of-sale, inventory, reception, expedition, and more. With Agriwise, farmers can efficiently track and analyze their operations, enabling better decision-making and increased productivity.',
    logo: agriwise
  },
  {
    id: 3,
    type: 'danger',
    stack: ['JavaScript', 'Vue', 'Php', 'Laravel', 'MySQL'],
    name: 'Ma3ahid',
    url: 'https://ma3ahid.gismait.com/',
    desc: "Ma3ahid is a versatile web application tailored for school management, catering to the needs of trainees, trainers, and tutors. The application featured a robust timetable system, facilitating the scheduling of sessions, modules, and groups across different sectors, optimizing the overall learning experience. 📅✨ A key highlight was the implementation of a user system with role-based access control. The Super Admin could create custom roles, such as 'Assistance', and assign specific permissions. This allowed for a highly customizable system, enabling users to perform tasks like creating or updating groups and modules based on their assigned roles. 🛠️🔐 'Ma3ahid' supported seamless data export to Excel, enhancing data analysis capabilities. Additionally, it allowed for the generation of printable documents, such as timetables in PDF format, providing users with convenient documentation options. 📊🖨️ To streamline financial management, the web app supported invoicing and payments, contributing to the overall efficiency of administrative tasks within the educational institution. 💸📑 In summary, 'Ma3ahid' prioritized user flexibility, offering a customizable solution for academic institutions. Its diverse features aimed to simplify administrative processes, optimize resource allocation, and contribute to the overall success of the educational institution. 🏫🚀",
    logo: maahid,
    imgs: [m1, m2, m3, m4, m5]
  },
  {
    id: 4,
    type: '',
    stack: ['JavaScript', 'React Native', 'Php', 'Laravel', 'MySQL'],
    name: 'Bimma EWD',
    url: 'https://play.google.com/store/apps/details?id=com.bimma_ewd_v2',
    desc: 'Bimma EWD is a mobile application developed using JavaScript, React Native, PHP, and Laravel frameworks. It serves as a useful tool for accessing electrical schemas of various BMW models. Users can easily search for a specific schema and view it within the app. They also have the option to download the schema or add it to their bookmarks for future reference. To explore the source code, please check the provided link.',
    logo: bimma,
    imgs: [
      'https://play-lh.googleusercontent.com/p_oiIo5C5AfoFZ7jRMT-2Ff1aZ7XLojg3N7JkyE6lMEo5KMr1iAUj3VoxAk0MoDbSg=w526-h296-rw',
      'https://play-lh.googleusercontent.com/IVTo1NIAQ87ICodrCkR4T6AzlVIhaJNf-998zUyRmxJelOARYjL58YhknP2EDBP_NLo=w526-h296-rw',
      'https://play-lh.googleusercontent.com/opQjjP4tcQKF6cQrgkq42uM4qPC3q-2XZmZj8VX4sR3-3dUDyop5mgkKxZ0jGBtmgl4=w526-h296-rw',
      'https://play-lh.googleusercontent.com/2DDMMZkC0FkPER2tXg7LJXVA-Xbdtq0jjwU28oE6Hiu7cVIZ_zBr0g-iZ-r5tTo58A=w526-h296-rw',
      'https://play-lh.googleusercontent.com/umlp8d_WDyQH-9CIVqMFxHPZnWVDaNCvql_AdcDminRkN_7oifGhSnJg-2aOTQW6H04=w526-h296-rw',
      'https://play-lh.googleusercontent.com/A6WQwmEXPvcT6_UziphfSPDth7lPLg-12wlc8tCPZzisP9Bng-s76vzRAoaxv404Bw=w526-h296-rw'
    ]
  }
])
</script>
