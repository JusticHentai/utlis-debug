<script setup lang="ts">
import PixijsUtils from '@justichentai/pixijs-utils'
import { onMounted, ref } from 'vue'
// @ts-ignore 忽略图片类型
import koko from '@assets/koko.jpg'
// @ts-ignore 忽略图片类型
import lianlian from '@assets/lianlian.png'

const el = ref()

onMounted(async () => {
  const pixiUtils = ref(
    new PixijsUtils({
      el: el.value,
    })
  )

  pixiUtils.value.init()

  const container = pixiUtils.value.addContainer({
    x: 200,
    y: 200,
  })

  pixiUtils.value.addImage(
    {
      url: koko,
      x: 100,
      y: 100,
      width: 216,
      height: 340,
      anchor: 0,
      interactive: true,
      buttonMode: true,
    },
    container
  )

  pixiUtils.value.addUserIcon({
    url: lianlian,
    x: 100,
    y: 50,
    diameter: 162,
  })

  await pixiUtils.value.addQrcode({
    url: '',
    x: 0,
    y: 0,
    query: {
      _port_: 8081,
      _ip_: '10.23.177.38',
    },
  })

  pixiUtils.value.addText({
    x: 300,
    y: 50,
    text: '喜欢我莲莲吗喜欢我莲莲吗喜欢我莲莲吗喜欢我莲莲吗',
    style: {
      fill: '#ffeaa7',
      wordWrap: true,
      wordWrapWidth: 300,
      breakWords: true,
      fontSize: 50,
    },
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
