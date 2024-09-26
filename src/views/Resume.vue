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
              <p class="text-sm" v-html="exp.desc"></p>
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
  <div class="flex justify-center mt-2 pb-4 sticky bottom-0">
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
import fileUrl from '../../public/files/cv.pdf'

const experiences = ref([
  {
    company: 'BRAINBYTES',
    title: 'Web Developer',
    desc: `<strong>1. Finalizing and Improving the Existing Application:</strong> 
    Worked with the team to finalize version 1 of an application using CakePHP and MySQL, fixing issues and making adjustments to meet user needs.
    <br><br>
    <strong>2. Optimizing Export Features:</strong> 
    Implemented a queuing system to handle PDF data export with Puppeteer, improving the app's performance and stability.
    <br><br>
    <strong>3. Setting Up Docker and Separating Modules:</strong> 
    Configured Docker for easier app deployment and isolated different modules in containers, enhancing portability and dependency management.
    <br><br>
    <strong>4. Integrating WebSockets:</strong> 
    Added WebSockets for real-time communication between the frontend and backend, enabling file download status tracking and instant updates for users.
    <br><br>
    <strong>5. Migrating to Laravel and Vue.js:</strong> 
    Rebuilt the application using Laravel for the backend and Vue.js for the frontend to clearly separate responsibilities and improve system maintainability and scalability.
    <br><br>
    <strong>6. Optimizing Databases:</strong> 
    Redid database migrations to optimize performance, reducing query times and improving data management for a smoother and more responsive user experience.
    <br><br>`,
    location: 'Agadir, Morocco',
    dates: 'February 2024 - September 2024'
  },
  {
    company: 'WISE SYSTEMS',
    title: 'Web Developer',
    desc: `
    <strong>1. Web Application Development:</strong> 
    Built a strong web application named Agriwise with server-side design in Laravel and client-side design in Vue.js. 
    Developed a well-designed MVC architecture with clear separation of concerns and wrote clean code for easy maintenance.
    <br><br>
    <strong>2. Database Management:</strong> 
    Designed and optimized a large relational database in MySQL: schemas, database optimization, and database migration. 
    Developed export features for reports to analyze data and provide information to users.
    <br><br>
    <strong>3. Testing and Debugging:</strong> 
    Tested and debugged RESTful APIs with Insomnia to ensure consistent and high-performance web services. 
    Documented APIs for effective software integration to reduce development costs and improve user experience.
    <br><br>
    <strong>4. Version Control and Source Code Management:</strong> 
    Used Git for source code version control and worked with a team on GitHub, following best practices for branching and merging. 
    Conducted code reviews to ensure code quality.
    <br><br>
    <strong>5. Agile Methodology:</strong> 
    Worked in an Agile team, joined daily meetings to discuss team projects, and adapted plans as needed. 
    Actively collaborated with other developers to solve technical problems and design, code, and deploy collaboratively and responsibly.
    <br><br>
    <strong>6. Collaboration and Inter-Team Support:</strong> 
    Collaborated with design and product teams to influence and define technical requirements.`,
    location: 'Agadir, Morocco',
    dates: 'October 2022 - January 2024'
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
    school: 'Specialized Institute of Applied T - Agadir',
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
