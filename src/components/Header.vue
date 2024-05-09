<template>
  <div class="header_sup">
    <div class="circle">
      <div class="bg-red-lighten-2"></div>
      <div class="bg-orange-lighten-2"></div>
      <div class="bg-green-lighten-2"></div>
    </div>
    <p>Simonin Enzo</p>
  </div>
  <div class="header_mid">
    <a href="#" :class="{ selected: page === 'Home' }">Home</a>
    <a href="#" :class="{ selected: page === 'My TechStack' }">My TechStack</a>
    <a href="#" :class="{ selected: page === 'My experiences' }">My experiences</a>
    <a href="#" :class="{ selected: page === 'My Projetcs' }">My Projects</a>
    <a href="#" :class="{ selected: page === 'About Me' }">About Me</a>
    <a href="#" :class="{ selected: page === 'Contact Me' }">Contact Me</a>
    <div class="mid_empty"></div>
  </div>
  <hr class="header_bottom" />
</template>

<script setup>
import { ref } from 'vue'
const page = ref('Home')
</script>

<style scoped>
.header_sup {
  display: flex;
}

.header_sup p {
  margin-left: auto;
  margin-right: auto;
  padding: 3px;
}

.circle {
  display: flex;
  padding: 10px;
}

.circle div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 3px;
}

p,
a {
  color: white;
  opacity: 0.4;
}

.header_mid {
  display: flex;
  border-top: 2px solid rgba(255, 255, 255, 0.2);
}

.header_mid a {
  width: 140px;
  display: inline-block;
  text-align: center;
  border-right: 2px solid rgba(255, 255, 255, 0.4);
  padding: 10px 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
}

.header_mid {
  background: #232323;
}

a.selected {
  background: #2c2c2c;
  color: #e57373;
  opacity: 1;
  border-bottom: 2px solid #2c2c2c;
  border-right: 2px solid rgba(255, 255, 255, 0.1);
  border-top: 3px solid #e57373;
}

.mid_empty {
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  width: calc(100% - (6 * 140px));
}

.header_bottom {
  border: none;
  border-bottom: 12px solid rgba(255, 255, 255, 0);
  background-color: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
