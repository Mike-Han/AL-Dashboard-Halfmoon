<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="content">
    <h2
      class="content-title"
      v-if="title != ''"
      v-text="title"></h2>
    <slot />
  </div>
</template>
