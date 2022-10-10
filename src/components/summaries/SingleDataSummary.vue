<script setup>
import CardContainer from '../utilities/CardContainer.vue'

defineProps({
  title: {
    type: String,
    require: true,
  },
  titleColour: {
    type: String,
    default: 'text-default',
  },
  value: {
    type: String,
    default: '',
  },
  valueColour: {
    type: String,
    default: 'text-default',
  },
  icon: {
    type: String,
    default: '',
  },
  iconColour: {
    type: String,
    default: 'text-default',
  },
  alignment: {
    type: String,
    default: 'text-center',
  },
  accentDirection: {
    type: String,
  },
  accentWidth: {
    type: String,
  },
  accentColour: {
    type: String,
  },
})
</script>

<template>
  <CardContainer
    class="p-0 m-0"
    :accentDirection="accentDirection"
    :accentWidth="accentWidth"
    :accentColour="accentColour">
    <div class="row px-20">
      <div
        class="col"
        :class="alignment">
        <h6
          class="my-0 pt-5 font-weight-bolder"
          :class="titleColour"
          v-text="title"></h6>
      </div>
    </div>

    <div
      class="row px-20"
      v-if="value != ''">
      <div
        class="col-md"
        :class="`${iconColour} ${alignment}`">
        <div
          v-if="icon != ''"
          class="d-inline-block">
          <i
            class="mr-10"
            :class="icon"
            style="font-size: 1.85em"></i>
        </div>
        <div class="d-inline-block">
          <h4
            class="mb-10"
            :class="valueColour"
            v-text="value"></h4>
        </div>
      </div>
    </div>

    <slot />
  </CardContainer>
</template>
