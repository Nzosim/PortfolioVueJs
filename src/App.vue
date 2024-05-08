<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div id="page">
    <Header />
    <Footer />
  </div>
</template>

<style>
body {
  background-color: #1e1e1e;
}

#page {
  position: absolute;
  left: 40px;
  top: 40px;
  width: calc(100vw - 100px);
  height: calc(100vh - 80px);
  background-color: #2c2c2c;
  border-radius: 10px 10px;
}

a {
  text-decoration: none;
}
</style>
