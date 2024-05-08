<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <div id="page">
    <Header />
  </div>
</template>

<style>
body {
  background-color: #1E1E1E;
}

#page {
  position: absolute;
  left: 40px; 
  top: 40px; 
  width: calc(100vw - 100px); 
  height: calc(100vh - 80px); 
  background-color: #2C2C2C;
  border-radius: 10px 10px
}
</style>