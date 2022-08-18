<script setup lang="ts">
// @ts-ignore 图片类型声明失败
import keyFrameTestImg from '@assets/keyFrameTest.png'
import frameAnimation from '@justichentai/frame-animation'
import { onMounted, ref } from 'vue'

const el = ref()

onMounted(async () => {
  const anime = new frameAnimation({
    el: el.value,
    url: keyFrameTestImg,
    frame: 24,
  })

  await anime.init()

  anime.play()
})
</script>

<template>
  <div ref="el" class="frame-animation"></div>
</template>

<style scoped lang="scss">
.frame-animation {
  position: absolute;
  width: 300px;
  height: 300px;
}
</style>
