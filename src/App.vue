<script setup lang="ts">
// import FrameAnimation from '@components/frame-animation/FrameAnimation.vue'
import PixijsUtils from '@components/pixijs-utils/PixijsUtils.vue'
</script>

<template>
  <div class="douza-app">
    <!--    <FrameAnimation></FrameAnimation>-->
    <PixijsUtils></PixijsUtils>
  </div>
</template>

<style lang="scss">
@include basic;

.douza-app {
  height: 100vh;

  @include test-color;
}
</style>
