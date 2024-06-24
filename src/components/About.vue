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
        <div
          v-if="isBioOpen"
          class="d-flex ml-6"
          :class="{ 'text-white': pageName === 'about' }"
          @click="pageName = 'about'"
        >
          <v-icon color="white">mdi-information</v-icon>
          <p>about-me.md</p>
        </div>
        <div class="d-flex" @click="isExperiencesOpen = !isExperiencesOpen">
          <v-icon>{{ isExperiencesOpen ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
          <v-icon color="yellow">mdi-folder</v-icon>
          <p>experiences</p>
        </div>
        <div
          v-if="isExperiencesOpen"
          class="d-flex ml-6"
          :class="{ 'text-white': pageName === 'education' }"
          @click="pageName = 'education'"
        >
          <v-icon color="white">mdi-information</v-icon>
          <p>education.md</p>
        </div>
        <div
          v-if="isExperiencesOpen"
          class="d-flex ml-6"
          :class="{ 'text-white': pageName === 'internship' }"
          @click="pageName = 'internship'"
        >
          <v-icon color="white">mdi-information</v-icon>
          <p>internship.md</p>
        </div>
        <div
          v-if="isExperiencesOpen"
          class="d-flex ml-6"
          :class="{ 'text-white': pageName === 'apprentice' }"
          @click="pageName = 'apprentice'"
        >
          <v-icon color="white">mdi-information</v-icon>
          <p>apprentice.md</p>
        </div>
      </div>
      <div class="contact">
        <div class="d-flex menu-all pt-3 pb-2 pl-1" @click="isContactOpen = !isContactOpen">
          <v-icon>{{ isContactOpen ? 'mdi-menu-down' : 'mdi-menu-right' }}</v-icon>
          <p>contact</p>
        </div>
        <div
          v-if="isContactOpen"
          class="d-flex ml-6 mt-1"
          :class="{ 'text-white': pageName === 'contact' }"
          @click="pageName = 'contact'"
        >
          <v-icon color="white">mdi-information</v-icon>
          <p>contact.md</p>
        </div>
      </div>
    </div>
    <aboutMe v-if="pageName === 'about'" />
    <education v-if="pageName === 'education'" />
    <internship v-if="pageName === 'internship'" />
    <apprentice v-if="pageName === 'apprentice'" />
    <contact v-if="pageName === 'contact'" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import aboutMe from '@/components/about-pages/about-me.vue'
import education from '@/components/about-pages/education.vue'
import internship from '@/components/about-pages/internship.vue'
import apprentice from '@/components/about-pages/apprentice.vue'
import contact from '@/components/about-pages/contact.vue'

const isPersonalOpen = ref(true)
const isBioOpen = ref(true)
const isExperiencesOpen = ref(true)
const isContactOpen = ref(true)

const url = window.location.href
const page = url.split('/').pop()
const pageName = ref(page === 'contact' ? 'contact' : 'about')
</script>

<style>
.about {
  display: flex;
  color: rgba(255, 255, 255, 0.4);
}

.menu {
  width: 11%;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: white;
}

.page,
.preview {
  height: 300vw;
  width: 45%;
  overflow-y: auto;
}

.page .text,
.preview .text {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 40px;
}

.close {
  justify-content: space-between;
  width: 30%;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  padding: 10px;
}

.page {
  border-left: 1px solid rgba(255, 255, 255, 0.05);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
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

@media screen and (max-width: 1840px) {
  .menu {
    width: 20%;
  }
}

@media screen and (max-width: 1380px) {
  .close {
    width: 50%;
  }
}

@media screen and (max-width: 1148px) {
  .menu {
    width: 25%;
  }
}

@media screen and (max-width: 930px) {
  .page {
    display: none;
  }
  .menu {
    width: 30%;
  }
  .preview {
    width: 70%;
    border-left: 1px solid rgba(255, 255, 255, 0.05);
  }
}

@media screen and (max-width: 700px) {
  .about {
    flex-direction: column;
  }
  .menu {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding-bottom: 10px;
  }
  .preview {
    overflow-y: auto;
    width: 100%;
    border: none;
    height: 100%;
    padding-bottom: 40px;
  }
  .preview .text {
    padding: 20px;
    margin-bottom: 50px;
  }
}
</style>
