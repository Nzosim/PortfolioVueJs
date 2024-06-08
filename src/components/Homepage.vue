<template>
  <div class="home">
    <div class="home_left">
      <p class="name text-white text-h3">SIMONIN Enzo</p>
      <p class="job text-red-lighten-2 text-h5">> Apprentice Fullstack Developper</p>
    </div>
    <img class="home_right" src="../assets/mainpage.png" />
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
  height: 60%;
  width: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
}

@media screen and (max-width: 1600px) {
  .home_left {
    left: 10%;
    width: 30%;
  }
}

@media screen and (max-width: 1200px) {
  .home_left {
    left: 15%;
    width: 40%;
  }
  .home_right {
    height: 40%;
  }
  .name {
    font-size: 2.5rem;
  }
  .job {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 930px) {
  .home {
    padding-top: 100px;
    padding-bottom: 20px;
    flex-direction: column;
    align-items: center;
  }

  .home_left,
  .home_right {
    position: static;
    transform: none;
    width: 80%;
    margin: 10px 0;
  }

  .home_right {
    height: auto;
    width: 80%;
  }
}
</style>
