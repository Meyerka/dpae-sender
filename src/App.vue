<template>
  <v-app>
    <v-app-bar app color="success" dark>
      <v-toolbar-title>DPAE Sender</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="grey darken-3" class="my-6">XML Preview</v-btn>
    </v-app-bar>
    <v-main>
      <InputForm />
    </v-main>
  </v-app>
</template>

<script>
import InputForm from "./components/InputForm";

export default {
  name: "App",

  components: {
    InputForm,
  },

  data: () => ({
    //
  }),
};
</script>
