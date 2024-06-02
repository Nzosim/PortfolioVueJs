<template>
  <div class="about">
    <div class="menu">
      <div class="d-flex menu-all pt-3 pb-2 pl-2" @click="isPersonalOpen = !isPersonalOpen">
        <v-icon>{{ isPersonalOpen ? 'mdi-menu-down' : 'mdi-menu-right' }}</v-icon>
        <p>personal-info</p>
      </div>
      <div v-if="isPersonalOpen" class="personal">
        <div class="d-flex" @click="isBioOpen = !isBioOpen">
          <v-icon>{{ isBioOpen ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
          <v-icon color="#e57373">mdi-folder-open-outline</v-icon>
          <p>bio</p>
        </div>
        <div v-if="isBioOpen" class="d-flex text-white ml-6">
          <v-icon color="white">mdi-information</v-icon>
          <p>about-me.md</p>
        </div>
        <div class="d-flex" @click="isExperiencesOpen = !isExperiencesOpen">
          <v-icon>{{ isExperiencesOpen ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
          <v-icon color="yellow">mdi-folder</v-icon>
          <p>experiences</p>
        </div>
        <div v-if="isExperiencesOpen" class="d-flex ml-6">
          <v-icon color="white">mdi-information</v-icon>
          <p>education.md</p>
        </div>
        <div v-if="isExperiencesOpen" class="d-flex ml-6">
          <v-icon color="white">mdi-information</v-icon>
          <p>internship.md</p>
        </div>
        <div v-if="isExperiencesOpen" class="d-flex ml-6">
          <v-icon color="white">mdi-information</v-icon>
          <p>apprentice.md</p>
        </div>
      </div>
      <div class="contact">
        <div class="d-flex menu-all pt-3 pb-2 pl-2" @click="isContactOpen = !isContactOpen">
          <v-icon>{{ isContactOpen ? 'mdi-menu-down' : 'mdi-menu-right' }}</v-icon>
          <p>contact</p>
        </div>
        <div v-if="isContactOpen" class="d-flex ml-6 mt-1">
          <v-icon color="white">mdi-information</v-icon>
          <p>contact.md</p>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="close">
        <p>about-me.md</p>
        <v-icon>mdi-close</v-icon>
      </div>
      <div class="text">
        <p># SIMONIN Enzo</p>
        <p>
          Je suis `actuellement` en troisième année de **BUT Informatique** en `alternance` chez
          **Dassault Systèmes**.
        </p>
        <p>
          Futur étudiant de **Polytech Nancy** en cycle ingénieur Informatique Automatisme Robotique
          et Réseaux `(IA2R)`, je suis à la recherche d'une alternance pour les `3` années à venir.
        </p>
        <p>Mon objectif est d'appronfindir mes connaissances grâce à la pratique en entreprise.</p>
      </div>
    </div>
    <div class="preview">
      <div class="close">
        <v-icon>mdi-file-find</v-icon>
        <p>preview</p>
        <v-icon>mdi-close</v-icon>
      </div>
      <div class="text">
        <h1>SIMONIN Enzo</h1>
        <p>
          Je suis <span class="text-yellow">actuellement</span> en troisième année de
          <b>BUT Informatique</b> en <span class="text-yellow">alternance</span> chez
          <b>Dassault Systèmes</b>.
        </p>
        <p>
          Futur étudiant de <b>Polytech Nancy</b> en cycle ingénieur Informatique Automatisme
          Robotique et Réseaux <span class="text-yellow">(IA2R)</span>, je suis à la recherche d'une
          alternance pour les <span class="text-yellow">3</span> années à venir.
        </p>
        <p>Mon objectif est d'appronfindir mes connaissances grâce à la pratique en entreprise.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isPersonalOpen = ref(true)
const isBioOpen = ref(true)
const isExperiencesOpen = ref(true)
const isContactOpen = ref(true)
</script>

<style scoped>
.about {
  display: flex;
  color: rgba(255, 255, 255, 0.4);
}

.menu {
  width: 11%;
  height: calc(75vh);
}

.menu div {
  padding: 2px;
}

.menu div p {
  padding-left: 10px;
  cursor: pointer;
}

.menu div p:hover {
  color: white;
}

.menu-all {
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.page,
.preview {
  width: 45%;
  overflow-y: auto;
}

.page .text,
.preview .text {
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  padding: 40px;
}

.close {
  justify-content: space-between;
  width: 25%;
  border-right: 2px solid rgba(255, 255, 255, 0.2);
  padding: 10px;
}

.page {
  height: 100vw;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  border-right: 2px solid rgba(255, 255, 255, 0.2);
}

.page .text p {
  padding-bottom: 15px;
}

h1 {
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.close {
  display: flex;
}

.preview .text p {
  padding-top: 15px;
}

.preview .text {
  color: rgba(255, 255, 255, 0.8);
}

.personal {
  display: flex;
  flex-direction: column;
}

.menu-all:hover {
  background: #363535;
  transition: 0.1s;
}
</style>
