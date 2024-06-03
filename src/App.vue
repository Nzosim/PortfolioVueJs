<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div id="page">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style>
body {
  background-color: #1e1e1e;
  font-family: 'Fira Code', monospace;
}

a {
  text-decoration: none;
}

#page {
  background-color: #2c2c2c;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

@media screen and (min-width: 930px) {
  #page {
    position: absolute;
    left: 40px;
    top: 40px;
    width: calc(100vw - 100px);
    height: calc(100vh - 80px);
    border-radius: 10px 10px;
  }
}

@media screen and (max-width: 930px) {
  #page {
    overflow-y: auto;
  }
}
</style>
