<template>
  <v-container>
    <v-card>
      <v-card-title class="success dark">
        <span class="headline white--text">Employer</span>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="employer.siretNumber" label="SIRET Number"></v-text-field>
        <v-text-field v-model="employer.urssafCode" label="URSSAF Code"></v-text-field>
        <v-text-field v-model="employer.nafCode" label="NAF Code"></v-text-field>
        <v-text-field v-model="employer.healthService" label="Health service number"></v-text-field>
        <v-text-field v-model="employer.name" label="Employer name"></v-text-field>
        <v-text-field v-model="employer.altName" label="Alternative name"></v-text-field>
        <v-text-field v-model="employer.address" label="Address"></v-text-field>
        <v-text-field v-model="employer.address2" label="Address 2"></v-text-field>
        <v-text-field v-model="employer.postCode" label="Employer postcode"></v-text-field>
        <v-text-field v-model="employer.city" label="Employer city"></v-text-field>
        <v-text-field v-model="employer.phone" label="Employer phone"></v-text-field>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "EmployerForm",
  data: () => ({
    employer: {
      healthService: "",
      siretNumber: "",
      urssafCode: "",
      nafCode: "",
      name: "",
      altName: "",
      address: "",
      address2: "",
      postCode: "",
      city: "",
      phone: "",
    },
  }),
};
</script>

<style>
</style>