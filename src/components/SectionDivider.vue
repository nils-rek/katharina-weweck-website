<template>
  <div class="w-full overflow-hidden leading-none" :class="flip ? 'rotate-180' : ''" :style="{ backgroundColor: topColor }">
    <svg
      class="w-full block"
      :style="{ height: '70px' }"
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        :d="curvePath"
        :fill="bottomColor"
      />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  topColor: { type: String, default: '#FAF7F2' },
  bottomColor: { type: String, default: '#FFFFFF' },
  flip: { type: Boolean, default: false }
})

const curvePath = 'M0,70 L0,30 Q360,0 720,35 Q1080,70 1440,25 L1440,70 Z'
</script>
