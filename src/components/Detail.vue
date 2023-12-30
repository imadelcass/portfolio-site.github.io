<template>
  <el-dialog
    v-model="modelVisible"
    width="50%"
    :class="modeStore.isDark ? '!bg-slate-800 text-gray-400' : ''"
  >
    <template #header>
      <div class="min-h-max">
        <h3 class="font-medium dark:text-grey-500">{{ item.name }}</h3>
      </div>
      <el-divider class="!my-3" :class="modeStore.isDark ? '!border-gray-600' : ''" />
    </template>
    <el-tag
      v-for="el in item.stack"
      :key="el.label"
      :type="item.type"
      class="mx-1"
      :effect="modeStore.isDark ? 'dark' : 'light'"
    >
      {{ el }}
    </el-tag>
    <p class="px-2 pt-3 dark:text-gray-400">
      {{ item.desc }}
    </p>
  </el-dialog>
</template>

<script setup>
import { inject } from 'vue'
import { useModeStore } from '@/stores/modeStore'

const modeStore = useModeStore()

const { modelVisible, item } = inject('detail_model', false)
</script>

<style>
.el-dialog__body {
  padding-top: 0 !important;
}
</style>
