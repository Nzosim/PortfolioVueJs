<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div id="page">
    <Header />
    <RouterView class="pagesRouter" />
    <Footer />
  </div>
</template>

<style>
body {
  background-color: #181818;
  font-family: 'Fira Code', monospace;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

#page {
  background-color: #1e1e1e;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar {
  display: none;
}

@media screen and (min-width: 930px) {
  #page {
    position: absolute;
    left: 40px;
    top: 40px;
    width: calc(100vw - 80px);
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
