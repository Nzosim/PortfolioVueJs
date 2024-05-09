<template>
  <div class="home">
    <div class="home_left">
      <p class="text-white text-h3">SIMONIN Enzo</p>
      <p class="text-red-lighten-2 text-h5">> Apprentice Fullstack Developper</p>
    </div>
    <img class="home_right" src="../assets/Homepage.png" />
  </div>
</template>

<style scoped>
p {
  font-family: 'Fira Code', monospace;
}

.home {
  display: flex;
}

.home_left {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translateY(-50%);
}

.home_right {
  height: 500px;
  width: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
}
</style>
