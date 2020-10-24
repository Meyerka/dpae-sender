<template>
  <v-app>
    <!-- <v-app-bar app color="success" dark>
      <v-toolbar-title>DPAE Sender</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn color="grey darken-3" class="my-6">Add employee</v-btn>
      </router-link>
      <router-link to="/employer">
        <v-btn color="grey darken-3" class="my-6">Employer</v-btn>
      </router-link>
      <router-link to="/preview">
        <v-btn color="grey darken-3" class="my-6">Preview</v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn color="grey darken-3" class="my-6">About</v-btn>
      </router-link>
    </v-app-bar>-->

    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">DPAE</v-list-item-title>
          <v-list-item-subtitle>Sender</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>List of employees</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cloud-upload</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Configure employer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-wrench</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Configure employer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cloud-upload</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Upload DPAE</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-help-box</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>


