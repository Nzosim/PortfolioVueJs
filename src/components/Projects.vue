<template>
  <div class="projects">
    <div class="menu">
      <div class="d-flex menu-all pt-3 pb-2 pl-2" @click="isAllOpen = !isAllOpen">
        <v-icon>{{ isAllOpen ? 'mdi-menu-down' : 'mdi-menu-right' }}</v-icon>
        <p>all-projects</p>
      </div>
      <div v-if="isAllOpen" class="personal">
        <v-checkbox
          :class="{ 'text-white': selected === true }"
          class="pl-1"
          v-model="selected"
          label="all"
        ></v-checkbox>
      </div>
      <div class="filter">
        <div class="d-flex menu-all pb-2 pl-2" @click="isFilterOpen = !isFilterOpen">
          <v-icon>{{ isFilterOpen ? 'mdi-menu-down' : 'mdi-menu-right' }}</v-icon>
          <p>filter</p>
        </div>
        <div
          v-if="isFilterOpen"
          class="d-flex mt-1"
          :class="{ 'text-white': pageName === 'filter' }"
          @click="pageName = 'filter'"
        >
          <v-radio-group v-model="selected" class="radio text-grey-darken-1">
            <v-radio
              :class="{ 'text-white': selected === 'vue' }"
              label="Vue.js"
              value="vue"
            ></v-radio>
            <v-radio
              :class="{ 'text-white': selected === 'js' }"
              label="JavaScript"
              value="js"
            ></v-radio>
            <v-radio
              :class="{ 'text-white': selected === 'tcj' }"
              label="HTML/CSS/JS"
              value="tcj"
            ></v-radio>
            <v-radio
              :class="{ 'text-white': selected === 'nuxt' }"
              label="Nuxt.js"
              value="nuxt"
            ></v-radio>
            <v-radio
              :class="{ 'text-white': selected === 'java' }"
              label="Java"
              value="java"
            ></v-radio>
            <v-radio
              :class="{ 'text-white': selected === 'php' }"
              label="PHP"
              value="php"
            ></v-radio>
            <v-radio
              :class="{ 'text-white': selected === 'flutter' }"
              label="Flutter"
              value="flutter"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>
    </div>
    <div class="content">
      <projectsList />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import projectsList from '@/components/projects-pages/projects-list.vue'

const isAllOpen = ref(true)
const isFilterOpen = ref(true)
const selected = ref('')
</script>

<style scoped>
.projects {
  display: flex;
  color: rgba(255, 255, 255, 0.4);
}

.menu {
  width: 11%;
}

.content {
  width: 89%;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(80vh - 20px);
  padding-left: calc(20px);
  padding-right: auto;
}

.menu-all {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: white;
}

.content {
  border-left: 1px solid rgba(255, 255, 255, 0.05);
}

.menu-all:hover {
  background: #363535;
  transition: 0.1s;
}

@media screen and (max-width: 1840px) {
  .menu {
    width: 20%;
  }
}

@media screen and (max-width: 1625px) {
  /* .content {
    padding-left: 130px;
  } */
}

@media screen and (max-width: 930px) {
  .menu {
    width: 30%;
  }
}

@media screen and (max-width: 700px) {
  .projects {
    flex-direction: column;
  }
  .menu {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding-bottom: 10px;
  }
  .content {
    width: 100%;
    height: calc(80vh);
  }
}
</style>

-
