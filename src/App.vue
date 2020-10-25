<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">DPAE</v-list-item-title>
          <v-list-item-subtitle>Sender</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>List of employees</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/employee">
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Add employee</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/employer">
          <v-list-item-icon>
            <v-icon>mdi-wrench</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Configure employer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/preview">
          <v-list-item-icon>
            <v-icon>mdi-cloud-upload</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Preview XML</v-list-item-title>
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

        <v-list-item to="/about">
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


