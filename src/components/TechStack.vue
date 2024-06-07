<template>
  <div class="ml-10 mt-10 mb-15 text-grey-lighten-1">
    <h2>My TechStack comming soon</h2>
    <h4 class="text-grey-darken-1">Technologies I’ve been working with</h4>
  </div>

  <div class="image-container" style="margin-bottom: 70px">
    <div v-for="(image, index) in images" :key="index" class="image-item">
      <a :href="image.link" target="_blank">
        <img :src="image.src" :alt="image.alt" width="100px" />
      </a>
    </div>
  </div>
</template>

<script setup>
import javascriptImage from '@/assets/javascript.png'
import typescriptImage from '@/assets/typescript.png'
import cImage from '@/assets/c.png'
import vuejsImage from '@/assets/vuejs.png'
import javaImage from '@/assets/java.png'
import figmaImage from '@/assets/figma.png'
import mysqlImage from '@/assets/MySQL.png'
import phpImage from '@/assets/php.png'
import flutterImage from '@/assets/flutter.png'
import nuxtjsImage from '@/assets/NuxtJS.png'
import dockerImage from '@/assets/docker.png'
import golangImage from '@/assets/golang.png'
import gitImage from '@/assets/git.png'
import bashImage from '@/assets/bash.png'

const images = [
  {
    src: javascriptImage,
    alt: 'Image 1',
    link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript'
  },
  { src: typescriptImage, alt: 'JavaScript', link: 'https://documentation2.com' },
  { src: cImage, alt: 'TypeScript', link: 'https://www.typescriptlang.org' },
  { src: golangImage, alt: 'Golang', link: 'https://go.dev' },
  { src: vuejsImage, alt: 'Vue.js', link: 'https://vuejs.org' },
  { src: javaImage, alt: 'Java', link: 'https://docs.oracle.com/en/java/' },
  { src: mysqlImage, alt: 'MySQL', link: 'https://www.mysql.com/fr/' },
  { src: figmaImage, alt: 'Figma', link: 'https://www.figma.com' },
  { src: phpImage, alt: 'PHP', link: 'https://www.php.net/manual/fr/intro-whatis.php' },
  { src: flutterImage, alt: 'Flutter', link: 'https://flutter.dev' },
  { src: nuxtjsImage, alt: 'Nuxt.js', link: 'https://nuxt.com' },
  { src: dockerImage, alt: 'Docker', link: 'https://www.docker.com' },
  { src: gitImage, alt: 'GIT', link: 'https://www.git-scm.com' },
  { src: bashImage, alt: 'Bash', link: 'https://doc.ubuntu-fr.org/bash' }
]
</script>

<style scoped>
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.image-item {
  flex: 1 1 calc(15% - 40px);
  max-width: calc(25% - 40px);
  display: flex;
  justify-content: center;
}

.image-item img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 1250px) {
  .image-item {
    flex: 1 1 calc(20% - 40px);
  }
}

@media (max-width: 1250px) {
  .image-item {
    flex: 1 1 calc(20% - 40px);
  }
}

@media (max-width: 768px) {
  .image-item {
    flex: 1 1 45%;
    max-width: 100%;
  }
}
</style>
