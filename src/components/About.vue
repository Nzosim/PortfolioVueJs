<template>
  <div class="about">
    <div class="menu">
      <div class="d-flex menu-all">
        <v-icon>mdi-arrow-down-drop-circle</v-icon>
        <p>personal-info</p>
      </div>
      <div class="personal">
        <div class="d-flex">
          <v-icon>mdi-folder-open-outline</v-icon>
          <p>bio</p>
        </div>
        <div class="d-flex">
          <v-icon>mdi-information</v-icon>
          <p>about-me</p>
        </div>
        <div class="d-flex">
          <v-icon>mdi-folder</v-icon>
          <p>experiences</p>
        </div>
        <div class="d-flex">
          <v-icon>mdi-information</v-icon>
          <p>education</p>
        </div>
        <div class="d-flex">
          <v-icon>mdi-information</v-icon>
          <p>internship</p>
        </div>
        <div class="d-flex">
          <v-icon>mdi-information</v-icon>
          <p>apprentice</p>
        </div>
      </div>
      <div class="contact">
        <div class="d-flex menu-all">
          <v-icon>mdi-arrow-down-drop-circle</v-icon>
          <p>contact</p>
        </div>
        <div class="d-flex">
          <v-icon>mdi-information</v-icon>
          <p>contact</p>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="text">
        <p># SIMONIN Enzo</p>
        <p>
          Je suis `actuellement` en troisième année de **BUT Informatique** en `alternance` chez
          **Dassault Systèmes** à Nancy.
        </p>
        <p>
          Futur étudiant de **Polytech Nancy** en cycle ingénieur Informatique Automatisme Robotique
          et Réseaux `(IA2R)`, je suis à la recherche d'une alternance pour les `3` années à venir.
        </p>
        <p>Mon objectif est d'appronfindir mes connaissances grâce à la pratique en entreprise.</p>
      </div>
    </div>
    <div class="preview">
      <h1>SIMONIN Enzo</h1>
      <p>
        Je suis <span class="text-yellow">actuellement</span> en troisième année de
        <b>BUT Informatique</b> en <span class="text-yellow">alternance</span> chez
        <b>Dassault Systèmes</b> à Nancy.
      </p>
      <p>
        Futur étudiant de <b>Polytech Nancy</b> en cycle ingénieur Informatique Automatisme
        Robotique et Réseaux <span class="text-yellow">(IA2R)</span>, je suis à la recherche d'une
        alternance pour les <span class="text-yellow">3</span> années à venir.
      </p>
      <p>Mon objectif est d'appronfindir mes connaissances grâce à la pratique en entreprise.</p>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  color: rgba(255, 255, 255, 0.4);
}

.menu {
  width: 10%;
  height: calc(75vh);
}

.menu div {
  padding: 2px;
}

.menu div p {
  padding-left: 10px;
}

.menu-all {
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.page,
.preview {
  width: 40%;
  padding: 40px;
}

.page {
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  border-right: 2px solid rgba(255, 255, 255, 0.2);
}

.page p {
  padding-bottom: 15px;
}

h1 {
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.preview p {
  padding-top: 15px;
}

.preview {
  width: 45%;
  color: hsla(0, 0%, 100%, 0.8);
}

.personal {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
</style>
