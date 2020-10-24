<template>
  <v-app>
    <v-app-bar app color="success" dark>
      <v-toolbar-title>DPAE Sender</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn color="grey darken-3" class="my-6">Home</v-btn>
      </router-link>
      <router-link to="/preview">
        <v-btn color="grey darken-3" class="my-6">Preview</v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn color="grey darken-3" class="my-6">About</v-btn>
      </router-link>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

