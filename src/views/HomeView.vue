<script setup>
import MainContainer from '../components/utilities/MainContainer.vue'
import CardContainer from '../components/utilities/CardContainer.vue'
</script>

<template>
  <MainContainer>
    <CardContainer :title="'Colours'">
      <span class="badge mr-5">Default</span>
      <span class="badge badge-primary mr-5">Primary</span>
      <span class="badge badge-success mr-5">Success</span>
      <span class="badge badge-secondary mr-5">Secondary</span>
      <span class="badge badge-danger mr-5">Danger</span>
    </CardContainer>
  </MainContainer>
</template>
