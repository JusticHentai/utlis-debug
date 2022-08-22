<script setup lang="ts">
import PixijsUtils from '@justichentai/pixijs-utils/index'
import { onMounted, ref } from 'vue'
// @ts-ignore 忽略图片类型
import keyFrameTest from '@assets/keyFrameTest.png'

const el = ref()

onMounted(() => {
  const pixiUtils = ref(
    new PixijsUtils({
      el: el.value,
    })
  )

  pixiUtils.value.init()

  pixiUtils.value.addImage({
    url: keyFrameTest,
    width: 1857,
    height: 800,
    anchor: 0,
  })
})
</script>

<template>
  <div ref="el" class="pixijs-utils"></div>
</template>

<style scoped lang="scss">
.pixijs-utils {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
