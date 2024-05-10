<template>
  <div class="home">
    <div class="home_left">
      <p class="name text-white text-h3">SIMONIN Enzo</p>
      <p class="job text-red-lighten-2 text-h5">> Apprentice Fullstack Developper</p>
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

@media screen and (max-width: 1600px) {
  .home_left {
    left: 10%;
  }
  .home_right {
    height: 400px;
  }
}

@media screen and (max-width: 1200px) {
  .home_left {
    left: 5%;
  }
  .name {
    font-size: 2.5rem;
  }
  .job {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 930px) {
  .home_left {
    top: 20%;
    left: 20%;
    width: 60%;
  }

  .home_right {
    top: 65%;
    left: 20%;
    width: 60%;
    height: auto;
  }
}
</style>
