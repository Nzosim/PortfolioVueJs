<template>
  <div class="footer">
    <div class="footer_link">
      <a href="https://github.com/Nzosim">
        <img src="@/assets/github.png" alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/enzo-simonin-7b2241258/">
        <img src="@/assets/linkedin.png" alt="github" />
      </a>
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
  padding-top: 6px;
  background-color: #1e1e1e;
  position: fixed;
  bottom: 40px;
  width: calc(100vw - 81px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.time {
  color: rgba(255, 255, 255, 0.4);
  margin-right: 10px;
}

a {
  padding-left: 15px;
}

.time {
  padding: 2px;
}

img {
  width: 25px;
}

img:hover {
  opacity: 0.7;
}

@media screen and (min-width: 930px) {
  .footer {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}

@media screen and (max-width: 930px) {
  .footer {
    position: absolute;
    bottom: 0;
    width: 100vw;
  }
}
</style>
