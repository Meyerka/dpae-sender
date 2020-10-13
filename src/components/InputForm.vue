<template>
  <div>
    <v-container>
      <h1>DPAE Sender</h1>

      <h2>Contract</h2>
      <v-text-field v-model="siretNumber" label="SIRET Number"></v-text-field>
      <v-text-field v-model="urssafCode" label="URSSAF Code"></v-text-field>
      <v-text-field v-model="nafCode" label="NAF Code"></v-text-field>

      <h2>Employer 1</h2>
      <v-text-field v-model="employer[0].name" label="Employer name"></v-text-field>
      <v-text-field v-model="employer[0].postCode" label="Employer postcode"></v-text-field>
      <v-text-field v-model="employer[0].city" label="Employer city"></v-text-field>

      <h2>Employer 2</h2>
      <v-text-field v-model="employer[1].name" label="Employer name"></v-text-field>
      <v-text-field v-model="employer[1].postCode" label="Employer postcode"></v-text-field>
      <v-text-field v-model="employer[1].city" label="Employer city"></v-text-field>

      <h1>{{employer[1].postCode}}</h1>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "InputForm",
  data: () => ({
    siretNumber: "",
    urssafCode: "",
    employer: [
      {
        name: "",
        postCode: "",
        city: "",
      },
      {
        name: "",
        postCode: "",
        city: "",
      },
    ],
  }),
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
