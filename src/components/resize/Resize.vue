<script setup lang="ts">
import resize from '@justichentai/resize'
import { onMounted } from 'vue'

onMounted(() => {
  resize()
})

function testClick() {}
</script>

<template>
  <div ref="el" class="resize" @click="testClick"></div>
</template>

<style scoped lang="scss">
.resize {
  position: absolute;
  width: 500px;
  height: 500px;
  background: #6c5ce7;
}
</style>
