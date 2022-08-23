<script setup lang="ts">
// @ts-ignore 图片类型声明失败
// import keyFrameTestImg from '@assets/keyFrameTest.png'
import frameAnimation from '@justichentai/frame-animation'
import { onMounted, ref } from 'vue'

const el = ref()
const anime = ref()

onMounted(async () => {
  anime.value = new frameAnimation({
    el: el.value,
    url: '//i0.hdslb.com/bfs/activity-plat/static/20220823/e0d3f10e7ac18c8e4058e769fd6fe541/iT4U3MwDin.png',
    frame: 20,
    column: 1,
    complete: () => {
      anime.value.playState
        ? anime.value.reverse().playTimes(1)
        : anime.value.restart().playTimes(1)
    },
    duration: 800,
  })

  await anime.value.init()

  // anime.value.playTimes(1)
})

function pauseClick() {
  anime.value.animeState ? anime.value.pause() : anime.value.play()
}
</script>

<template>
  <div ref="el" class="frame-animation" @click="pauseClick"></div>
</template>

<style scoped lang="scss">
.frame-animation {
  position: absolute;
  width: 673px;
  height: 37.65px;
}
</style>
