<template>
  <v-app>
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
