<template>
    <div class="not-found">
      <div class="not-found-content">
        <h2>Project details comming soon !</h2>
        <router-link to="/" class="home-link">Go back to Home</router-link>
      </div>
    </div>
  </template>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  color: white;
  text-align: center;
}

h1 {
  font-size: 10rem;
  margin: 0;
}

p {
  font-size: 1.5rem;
  margin: 20px 0;
}

.home-link {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 1rem;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

</style>
  