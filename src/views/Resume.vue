<template>
  <section class="text-gray-600 px-20 py-10 mx-auto body-font">
    <div class="container flex flex-wrap">
      <div class="flex justify-between w-full">
        <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
          <div
            class="uppercase tracking-widest text-indigo-500 text-xs font-medium title-font mb-4"
          >
            experiences
          </div>
          <div v-for="exp in experiences" :key="exp.id" class="flex relative pb-12">
            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"
            ></div>
            <div class="flex-grow pl-4 dark:text-gray-400">
              <p class="font-medium">
                {{ exp.company }}
              </p>
              <h2 class="font-medium text-sm">
                {{ exp.dates }}
              </h2>
              <p class="text-sm my-1">{{ exp.title }}</p>
              <p class="text-sm">{{ exp.desc }}</p>
            </div>
          </div>
        </div>
        <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
          <div
            class="uppercase tracking-widest text-indigo-500 text-xs font-medium title-font mb-4"
          >
            education
          </div>
          <div v-for="edu in educations" :key="edu.id" class="flex relative pb-12">
            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10"
            ></div>
            <div class="flex-grow pl-4 dark:text-gray-400">
              <h2 class="font-medium text-sm">
                {{ edu.dates }}
              </h2>
              <p>
                {{ edu.school }}
              </p>
              {{ edu.degree }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uppercase tracking-widest text-indigo-500 text-xs font-medium title-font mb-1">
      soft skills
    </div>
    <div class="grid grid-cols-4 mb-4">
      <div v-for="skill in softSkills" :key="skill.id" class="block p-2 col-span-1">
        <div class="dark:text-gray-400">{{ skill.name }}</div>
        <div class="w-full h-2 bg-gray-200 rounded-full mt-3">
          <div
            class="h-full text-center text-xs text-white bg-indigo-500 rounded-full"
            :class="skill.level"
          ></div>
        </div>
      </div>
    </div>
    <div class="uppercase tracking-widest text-indigo-500 text-xs font-medium title-font mb-1">
      coding skills
    </div>
    <div class="grid grid-cols-4">
      <div v-for="skill in hardSkills" :key="skill.id" class="block p-2 col-span-1">
        <div class="dark:text-gray-400">{{ skill.name }}</div>
        <div class="w-full h-2 bg-gray-200 rounded-full mt-3">
          <div
            class="h-full text-center text-xs text-white bg-indigo-500 rounded-full"
            :class="skill.level"
          ></div>
        </div>
      </div>
    </div>
  </section>
  <div class="flex justify-center mt-2 pb-4">
    <button
      class="rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
      @click="downloadFile"
    >
      Download resume
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import fileUrl from '../../public/files/MADELCASS 2023.pdf'

const experiences = ref([
  {
    company: 'Agriwise',
    title: 'Web Developer',
    desc: 'Collaborated on a Vue.js and Laravel solution for agricultural businesses. Designed, developed, and optimized key features. Worked closely with agricultural experts to meet specific needs.',
    location: 'Agadir, Morocco',
    dates: 'October 2022 - December 2023'
  },
  {
    company: 'Ma3ahid',
    title: 'Web Developer',
    desc: 'Developing a school management app with Laravel and Vue.js. Handling student, teacher, timetable, and grading features.',
    location: 'Agadir, Morocco',
    dates: 'Mars 2023 - November 2023'
  },
  {
    company: 'Bimma EWD',
    title: 'Mobile Developer',
    desc: 'Created a React Native app for managing BMW automobile electrical schematics.',
    location: 'Freeance',
    dates: 'November 2021 - May 2022'
  }
])

const educations = ref([
  {
    id: 1,
    school: 'ISTA - Agadir',
    location: 'Agadir, Morocco',
    dates: 'October 2020 - June 2022',
    degree: 'Specialized technician in computer development'
  },
  {
    id: 2,
    school: 'ESSAADA - Agadir',
    location: 'Agadir, Morocco',
    dates: 'October 2015 - June 2016',
    degree: 'High school diploma in physical sciences'
  }
])

const hardSkills = ref([
  {
    name: 'Html',
    level: 'w-4/5'
  },
  {
    name: 'Css',
    level: 'w-4/5'
  },
  {
    name: 'JavaScript',
    level: 'w-4/5'
  },
  {
    name: 'Vue',
    level: 'w-4/5'
  },
  {
    name: 'React',
    level: 'w-3/5'
  },
  {
    name: 'Php',
    level: 'w-3/4'
  },
  {
    name: 'Laravel',
    level: 'w-3/4'
  },
  {
    name: 'MySQL',
    level: 'w-3/4'
  }
])

const softSkills = ref([
  {
    name: 'Communication',
    level: 'w-4/5'
  },
  {
    name: 'Problem-solving',
    level: 'w-4/5'
  },
  {
    name: 'Adaptability',
    level: 'w-4/5'
  },
  {
    name: 'Creativity',
    level: 'w-4/5'
  }
])

const downloadFile = () => {
  const link = document.createElement('a')
  link.href = fileUrl
  link.setAttribute('download', '')

  link.click()
}
</script>
