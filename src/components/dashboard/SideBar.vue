<script setup>
defineProps({
  sidebarItems: {
    type: Array,
    required: true,
  },
  brand: {
    type: String,
    default: '',
  },
  brandImageLight: {
    type: String,
    default: '',
  },
  brandImageDark: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="sidebar-menu">
    <div v-if="brand != '' || brandImageLight != '' || brandImageDark != ''">
      <a
        href="#"
        class="sidebar-brand">
        <img
          v-if="brandImageLight != ''"
          :src="brandImageLight"
          class="hidden-dm sidebar-brand h-50"
          alt="brand image" />
        <img
          v-if="brandImageDark != ''"
          :src="brandImageDark"
          class="hidden-lm sidebar-brand h-50"
          alt="brand image" />
        <span
          v-text="brand"
          v-if="brand != ''" />
      </a>
    </div>
    <div
      v-for="item in sidebarItems"
      :key="item">
      <h5
        class="sidebar-title"
        v-text="item.title"></h5>
      <div class="sidebar-divider"></div>
      <div
        v-for="link in item.links"
        :key="link">
        <router-link
          :to="link.path"
          :id="link.text"
          class="sidebar-link sidebar-link-with-icon"
          data-active-scroll-disabled="disabled">
          <span
            class="sidebar-icon bg-transparent"
            :class="link.colour">
            <i :class="link.icon"></i>
          </span>
          <span
            class="name"
            v-text="link.text"></span>
        </router-link>
      </div>
      <br />
    </div>
  </div>
</template>
