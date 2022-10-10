<script setup>
import { RouterView } from 'vue-router'
import navbar from './NavigationBar.vue'
import sidebar from './SideBar.vue'

const navbarItems = [
  { path: '/', text: 'Home' },
  { path: '/demo1', text: 'Demo 1' },
  { path: '/demo2', text: 'Demo 2' }
]

const sidebarItems = [
  {
    title: 'Demo',
    links: [
      {
        path: '/demo1',
        text: 'Demo 1',
        icon: 'bi bi-1-square',
        colour: 'text-success'
      },
      {
        path: '/demo2',
        text: 'Demo 2',
        icon: 'bi bi-2-square',
        colour: 'text-success'
      }
    ]
  },
  {
    title: 'Dashboard Components',
    links: [
      {
        path: '/summary',
        text: 'Summary Components',
        icon: 'bi bi-card-heading',
        colour: 'text-primary'
      },
      {
        path: '/chart',
        text: 'Chart Components',
        icon: 'bi bi-graph-up',
        colour: 'text-secondary'
      }
    ]
  }
]
</script>

<template>
  <div
    class="page-wrapper with-navbar with-sidebar with-navbar-fixed-bottom"
    data-sidebar-type="overlayed-sm-and-down">
    <!-- Sidebar overlay -->
    <div
      class="sidebar-overlay"
      onclick="halfmoon.toggleSidebar()"></div>

    <!-- Navbar -->
    <navbar
      :navbarItems="navbarItems"
      :logoLight="'/src/assets/images/painel-light.png'"
      :logoDark="'/src/assets/images/painel-dark.png'"
      :title="'Modern Dashboard'" />

    <!-- Sidebar -->
    <div class="sidebar">
      <sidebar
        :sidebarItems="sidebarItems"
        :brand="''"
        :brandImageDark="'/src/assets/images/logo-dark.png'"
        :brandImageLight="'/src/assets/images/logo-light.png'" />
    </div>

    <!-- Router -->
    <router-view></router-view>

    <!-- Navbar fixed bottom -->
    <nav class="navbar navbar-fixed-bottom">
      <ul class="navbar-nav ml-auto"></ul>
      <span class="navbar-text mr-15">&copy; Team RDM</span>
      <span class="badge badge-danger mr-5">Ryan</span>
      <span class="badge badge-success mr-5">Daniel</span>
      <span class="badge badge-primary mr-5">Mike</span>
    </nav>
  </div>
</template>
