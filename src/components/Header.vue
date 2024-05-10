<template>
  <div class="header_sup">
    <div class="circle">
      <div class="bg-red-lighten-2"></div>
      <div class="bg-orange-lighten-2"></div>
      <div class="bg-green-lighten-2"></div>
    </div>
    <p>Simonin Enzo</p>
    <v-icon v-if="!isMenuOpen" class="header_sup_menu" @click="isMenuOpen = !isMenuOpen"
      >mdi-menu</v-icon
    >
    <v-icon v-else class="header_sup_menu" @click="isMenuOpen = !isMenuOpen">mdi-close</v-icon>
  </div>
  <div class="header_mid" v-show="isMenuOpen">
    <a @click="page.length === 0" href="/" :class="{ selected: page.length === 0 }">Home</a>
    <a @click="page = 'techstack'" href="techstack" :class="{ selected: page === 'techstack' }"
      >My TechStack</a
    >
    <a
      @click="page = 'experiences'"
      href="experiences"
      :class="{ selected: page === 'experiences' }"
      >My experiences</a
    >
    <a @click="page = 'projects'" href="projects" :class="{ selected: page === 'projects' }"
      >My Projects</a
    >
    <a @click="page = 'about'" href="about" :class="{ selected: page === 'about' }">About Me</a>
    <a @click="page = 'contact'" href="contact" :class="{ selected: page === 'contact' }"
      >Contact Me</a
    >
    <div class="mid_empty"></div>
  </div>
  <hr class="header_bottom" />
</template>

<script setup>
import { ref } from 'vue'

const url = window.location.href
const page = ref(url.split('/').pop())
const isMenuOpen = ref(window.innerWidth > 930)
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

.header_sup_menu {
  display: none;
}

@media screen and (max-width: 930px) {
  .header_bottom {
    display: none;
  }
  .header_sup_menu {
    display: block;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 1px;
    margin-right: 8px;
  }
  .header_sup {
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  }
  .header_mid {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
  .header_mid a {
    width: 100%;
    border-right: none;
    text-align: left;
    padding-left: 30px;
  }
  a.selected {
    border-top: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  }
}
</style>
