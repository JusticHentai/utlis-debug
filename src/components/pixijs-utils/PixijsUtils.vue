<script setup lang="ts">
import { onMounted, ref } from 'vue'

const el = ref()

onMounted(async () => {})
</script>

<template>
  <div ref="el" class="pixijs-utils"></div>
</template>

<style scoped lang="scss">
.pixijs-utils {
  position: absolute;
  width: 300px;
  height: 300px;
}
</style>
