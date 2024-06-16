<template>
  <div v-for="item in projects" :key="item" class="all">
    <p class="pb-3 text-red-lighten-2">
      {{ item.title }}
    </p>
    <div class="card">
      <img :src="item.image" alt="project1" width="100%" />
      <div class="card_content">
        <p>{{ item.description }}</p>
        <v-btn class="btn" href="/">view details</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import alClateImage from '@/assets/alclate.png'
import forumImage from '@/assets/forum.png'
import musicBrainzImage from '@/assets/musicbrainz.png'
import pizzaShop from '@/assets/pizzashop.png'
import photo from '@/assets/photo.png'
import thisImage from '@/assets/this.png'
import miniPress from '@/assets/minipress.png'
import cIcone from '@/assets/cIcone.png'
import netvod from '@/assets/netvod.png'
import discord from '@/assets/discord.jpg'

let projects = [
  {
    title: 'AlClate',
    description:
      'AlClate is a small web project with an HTML/CSS/JSS frontend and a PHP backend which allows you to notify the late arrivals of Edouard',
    image: alClateImage,
    type: ['js', 'hcj', 'php']
  },
  {
    title: 'Nuxt forum',
    description:
      'Small forum created for my studies with Nuxt.jso, it uses websockets to update for everyone after adding a post',
    image: forumImage
  },
  {
    title: 'Music Brainz',
    description:
      'Description of this aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa  aaaaaaaaaaaaa',
    image: musicBrainzImage
  },
  {
    title: 'PizzaShop',
    description:
      'Description of this sssssssssssssssssssss projecssssssss ssss ss ssssssssssssss sssssssssssssss ssssssss ssssssssssss',
    image: pizzaShop
  },
  {
    title: 'Photo Website',
    description:
      'Description of this sssssssssssssssssssss projecssssssss ssss ss ssssssssssssss sssssssssssssss ssssssss ssssssssssss',
    image: photo
  },
  {
    title: 'My Portfolio',
    description:
      'Description of this sssssssssssssssssssss projecssssssss ssss ss ssssssssssssss sssssssssssssss ssssssss ssssssssssss',
    image: thisImage
  },
  {
    title: 'MiniPress',
    description:
      'Description of this sssssssssssssssssssss projecssssssss ssss ss ssssssssssssss sssssssssssssss ssssssss ssssssssssss',
    image: miniPress
  },
  {
    title: 'GiftBox',
    description:
      'Description of this sssssssssssssssssssss projecssssssss ssss ss ssssssssssssss sssssssssssssss ssssssss ssssssssssss',
    image: pizzaShop
  },
  {
    title: 'MBash',
    description:
      'Description of this sssssssssssssssssssss projecssssssss ssss ss ssssssssssssss sssssssssssssss ssssssss ssssssssssss',
    image: cIcone
  },
  {
    title: 'NetVod',
    description:
      'Description of this sssssssssssssssssssss projecssssssss ssss ss ssssssssssssss sssssssssssssss ssssssss ssssssssssss',
    image: netvod
  },
  {
    title: 'Discord bot',
    description:
      'Description of this sssssssssssssssssssss projecssssssss ssss ss ssssssssssssss sssssssssssssss ssssssss ssssssssssss',
    image: discord
  }
]
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

@media screen and (max-width: 700px) {
  .all {
    width: 90%;
  }
}
</style>
