<template>
  <SiteLoader />
  <!-- header -->
  <header id="header">
    <Header />
  </header>
  <!-- main -->
  <main id="main">
    <router-view></router-view>
  </main>
</template>

<script setup>
// components
import SiteLoader from './components/SiteLoader.vue';
import Header from './parts/Header';
</script>