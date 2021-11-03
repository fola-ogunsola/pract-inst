<template>
  <div>
    <page-header @open="showModal = true"></page-header>
    <companies></companies>
    <features></features>
    <demo></demo>
    <control></control>
    <scale></scale>
    <media  @open="showModal = true"></media>
    <website-modal v-show="showModal"  @close="showModal = false"></website-modal>
  </div>
</template>

<script src="./Home.js"></script>
<style lang="scss" scoped src="./Home.scss"></style>
