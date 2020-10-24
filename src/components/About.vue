<template>
  <v-container>
    <h2>Created with Vue</h2>
    <h2>Designed wiith Vuetify</h2>
    <h2>Source code:</h2>
    {{this.$store.state.employer}}
    {{this.$store.state.employees}}
  </v-container>
</template>
