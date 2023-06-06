<template>
  <el-dialog v-model="modelVisible" :title="item.name" width="50%" :before-close="handleClose">
    <el-tag v-for="el in item.stack" :key="el.label" :type="el.type" class="mx-1" effect="dark">
      {{ el }}
    </el-tag>
    <p class="px-2 pt-3">
      {{ item.desc }}
    </p>
  </el-dialog>
</template>

<script setup>
import { inject, ref } from 'vue'

const { modelVisible, item, setModelVisible } = inject('detail_model', false)
</script>
