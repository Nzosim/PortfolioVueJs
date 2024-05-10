<template>
  <div class="footer">
    <div class="footer_link">
      <a href="https://github.com/Nzosim"><v-icon>mdi-github</v-icon></a>
      <a href="https://www.linkedin.com/in/enzo-simonin-7b2241258/"
        ><v-icon>mdi-linkedin</v-icon></a
      >
    </div>
    <div class="time">{{ time }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const time = ref()
setInterval(() => {
  time.value = new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString()
}, 1000)
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

a,
.time {
  color: rgba(255, 255, 255, 0.4);
}

a {
  padding: 8px;
}

.time {
  padding: 2px;
}

.footer {
  position: fixed;
  bottom: 40px;
  width: calc(100vw - 100px);
  border-top: 2px solid rgba(255, 255, 255, 0.2);
}

@media screen and (max-width: 930px) {
  .footer {
    position: absolute;
    bottom: 0;
    width: 100vw;
  }
}
</style>
