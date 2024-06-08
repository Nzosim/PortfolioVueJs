<template>
  <div class="page">
    <div class="close">
      <p>contact.md</p>
      <v-icon>mdi-close</v-icon>
    </div>
    <div class="text">
      <p># Contacts</p>

      <div>Mail:</div>
      <div>> simonin.enzo.contact@gmail.com</div>

      <p class="mt-5">[Link to my Github](https://github.com/Nzosim)</p>

      <p>[Link to my Linkedin](https://www.linkedin.com/in/enzo-simonin-7b2241258/)</p>
    </div>
  </div>
  <div class="preview">
    <div class="close">
      <div class="d-flex">
        <v-icon class="mr-3">mdi-file-find</v-icon>
        <p>preview</p>
      </div>
      <v-icon>mdi-close</v-icon>
    </div>
    <div class="text">
      <h1>Contacts</h1>

      <div class="mt-5">Mail:</div>
      <div class="pl-3 bg-grey-darken-3 border-s-lg">simonin.enzo.contact@gmail.com</div>

      <div class="btn_link">
        <v-btn class="mt-5" color="primary" target="_blank" href="https://github.com/Nzosim"
          >Link to my Github</v-btn
        >
        <v-btn
          class="mt-5"
          color="primary"
          target="_blank"
          href="https://www.linkedin.com/in/enzo-simonin-7b2241258/"
          >Link to my Linkedin</v-btn
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn_link {
  display: flex;
  flex-direction: column;
}
</style>
