<script setup>
defineProps({
  navbarItems: {
    type: Array,
    required: true
  },
  logoLight: {
    type: String,
    required: true
  },
  logoDark: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nav class="navbar">
    <div class="navbar-content">
      <button
        id="toggle-sidebar-btn"
        class="btn btn-action"
        type="button"
        onclick="halfmoon.toggleSidebar()">
        <i class="bi bi-list"></i>
      </button>
    </div>
    <a
      href="/"
      class="navbar-brand">
      <img
        :src="logoLight"
        class="hidden-dm h-25"
        alt="company logo" />
      <img
        :src="logoDark"
        class="hidden-lm h-25"
        alt="company logo" />
      <div v-if="title != ''">
        <span
          class="text-primary"
          v-text="title" />
      </div>
    </a>

    <ul class="navbar-nav hidden-sm-and-down">
      <div
        v-for="item in navbarItems"
        :key="item">
        <li class="nav-item">
          <router-link
            :to="`${item.path}`"
            class="nav-link">
            <span v-text="item.text" />
          </router-link>
        </li>
      </div>
    </ul>

    <div class="navbar-content ml-auto">
      <button
        class="btn btn-action mr-5"
        type="button"
        onclick="halfmoon.toggleDarkMode()">
        <i class="hidden-dm bi bi-moon-stars-fill"></i>
        <i class="hidden-lm bi bi-sun"></i>
      </button>
    </div>
  </nav>
</template>
