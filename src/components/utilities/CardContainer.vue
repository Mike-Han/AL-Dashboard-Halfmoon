<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  accentDirection: {
    type: String,
    default: '',
  },
  accentWidth: {
    type: String,
    default: '3px',
  },
  accentColour: {
    type: String,
    default: 'var(--primary-color)',
  },
})
</script>

<template>
  <div
    :style="
      accentDirection != '' ? `border-${accentDirection}: ${accentWidth} solid ${accentColour}` : ''
    "
    class="card">
    <h2
      class="card-title"
      v-if="title != ''"
      v-text="title"></h2>
    <slot />
  </div>
</template>
