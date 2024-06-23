<template>
  <div v-for="item in filteredProjects" :key="item" class="all">
      <p class="pb-3 text-red-lighten-2">
        {{ item.title }}
      </p>
      <v-card class="mx-auto card">
        <v-img height="300px" :aspect-ratio="1.67" :src="item.image" cover></v-img>

        <v-card-text class="card_content text-grey mt-3">{{ item.description }}</v-card-text>

        <v-card-actions> <v-btn class="btn ml-3" href="/">view details</v-btn></v-card-actions>
      </v-card>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import alClateImage from '@/assets/alclate.png'
import forumImage from '@/assets/forum.png'
import musicBrainzImage from '@/assets/musicbrainz.png'
import pizzaShop from '@/assets/pizzashop.png'
import photo from '@/assets/photo.png'
import thisImage from '@/assets/this.png'
import netvod from '@/assets/netvod.png'
import discord from '@/assets/discord.jpg'

const props = defineProps({
  filter: String
})

let projects = [
  {
    title: 'AlClate',
    description:
      'AlClate is a small web project with an HTML/CSS/JSS frontend and a PHP backend which allows you to notify the late arrivals of Edouard',
    image: alClateImage,
    type: ['js', 'hc', 'php']
  },
  {
    title: 'Nuxt forum',
    description:
      'Small forum created for my studies with Nuxt.jso, it uses websockets to update for everyone after adding a post',
    image: forumImage,
    type: ['js', 'nuxt']
  },
  {
    title: 'Music Brainz',
    description:
      'Description of this aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaa',
    image: musicBrainzImage,
    type: ['js', 'vue', 'hc']
  },
  {
    title: 'PizzaShop',
    description:
      'Description of this sssssssssssssssssssss projecssssssss ssss ss ssssssssssssss sssssssssssssss ssssssss ssssssssssss',
    image: pizzaShop,
    type: ['php']
  },
  {
    title: 'Photo Website',
    description:
      'Description of this sssssssssssssssssssss projecssssssss ssss ss ssssssssssssss sssssssssssssss ssssssss ssssssssssss',
    image: photo,
    type: ['js', 'hc']
  },
  {
    title: 'My Portfolio',
    description:
      'Description of this sssssssssssssssssssss projecssssssss ssss ss ssssssssssssss sssssssssssssss ssssssss ssssssssssss',
    image: thisImage,
    type: ['hc', 'vue', 'js']
  },
  {
    title: 'NetVod',
    description:
      'Description of this sssssssssssssssssssss projecssssssss ssss ss ssssssssssssss sssssssssssssss ssssssss ssssssssssss',
    image: netvod,
    type: ['js', 'hc', 'php']
  },
  {
    title: 'Discord bot',
    description:
      'Description of this sssssssssssssssssssss projecssssssss ssss ss ssssssssssssss sssssssssssssss ssssssss ssssssssssss',
    image: discord,
    type: ['js']
  }
]

const filteredProjects = computed(() => {
  if(props.filter === true) return projects
  return projects.filter(item => item.type.includes(props.filter))
})      
</script>

<style scoped>
.all {
  margin: 20px;
  width: 30%;
  display: inline-block;
}

.card {
  background-color: #181818;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

img {
  height: 280px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.card_content {
  padding: 5px 20px;
  height: 100px;
}

.btn {
  margin: 20px 0;
  color: white;
  background: #2c2c2c;
  text-transform: lowercase;
}

@media screen and (max-width: 1625px) {
  .all {
    width: 40%;
  }
}

@media screen and (max-width: 930px) {
  .all {
    width: 90%;
  }
}
</style>
