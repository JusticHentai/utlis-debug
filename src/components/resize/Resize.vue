<script setup lang="ts">
import resize from '@justichentai/resize'
import { onMounted } from 'vue'

onMounted(() => {
  resize({
    debounce: {
      duration: 500,
    },
  })

  interface Key {
    /** Keyboard key code */
    code: number
    /** Ctrl / ⌃ */
    ctrl?: boolean
    /** Shift key */
    shift?: boolean
    /** Alt / ⌥ */
    alt?: boolean
    /** meta ⌘ / ⊞ */
    meta?: boolean
  }

  const key = {
    code: 101,
  }

  const stringifyHotkey = (k: Key) => {
    return JSON.stringify({
      code: k.code,
      ctrl: !!k.ctrl,
      shift: !!k.shift,
      alt: !!k.alt,
      meta: !!k.meta,
    })
  }

  console.log(stringifyHotkey(key))
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
