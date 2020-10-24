<template>
  <v-container>
    <v-card>
      <v-card-title class="success dark">
        <span class="headline white--text">Employer</span>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="siretNumber" label="SIRET Number"></v-text-field>
        <v-text-field v-model="urssafCode" label="URSSAF Code"></v-text-field>
        <v-text-field v-model="nafCode" label="NAF Code"></v-text-field>
        <v-text-field v-model="healthService" label="Health service number"></v-text-field>
        <v-text-field v-model="name" label="Employer name"></v-text-field>
        <v-text-field v-model="altName" label="Alternative name"></v-text-field>
        <v-text-field v-model="address" label="Address"></v-text-field>
        <v-text-field v-model="address2" label="Address 2"></v-text-field>
        <v-text-field v-model="postCode" label="Employer postcode"></v-text-field>
        <v-text-field v-model="city" label="Employer city"></v-text-field>
        <v-text-field v-model="phone" label="Employer phone"></v-text-field>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "EmployerForm",
  data: () => ({}),
  created: function () {
    this.$store.commit("setSiretNumber", process.env.VUE_APP_ENV_SIRET);
    this.siretNumber = process.env.VUE_APP_ENV_SIRET;
    this.urssafCode = process.env.VUE_APP_ENV_URSSAFCODE;
    this.nafCode = process.env.VUE_APP_ENV_NAFCODE;
    this.name = process.env.VUE_APP_ENV_ORGNAME;
    this.altName = process.env.VUE_APP_ENV_ORGNAMEBIS;
    this.address = process.env.VUE_APP_ENV_ORGADDRESS;
    this.address2 = process.env.VUE_APP_ENV_ORGADDRESS2;
    this.postCode = process.env.VUE_APP_ENV_ORGPOSTCODE;
    this.city = process.env.VUE_APP_ENV_ORGCITY;
    this.phone = process.env.VUE_APP_ENV_ORGPHONE;
  },
  computed: {
    siretNumber: {
      get() {
        return this.$store.state.employer.siretNumber;
      },
      set(value) {
        this.$store.commit("setSiretNumber", value);
      },
    },
    healthService: {
      get() {
        return this.$store.state.employer.healthService;
      },
      set(value) {
        this.$store.commit("setHealthService", value);
      },
    },
    urssafCode: {
      get() {
        return this.$store.state.employer.urssafCode;
      },
      set(value) {
        this.$store.commit("setUrssafCode", value);
      },
    },
    nafCode: {
      get() {
        return this.$store.state.employer.nafCode;
      },
      set(value) {
        this.$store.commit("setNafCode", value);
      },
    },
    name: {
      get() {
        return this.$store.state.employer.name;
      },
      set(value) {
        this.$store.commit("setName", value);
      },
    },
    altName: {
      get() {
        return this.$store.state.employer.altName;
      },
      set(value) {
        this.$store.commit("setAltName", value);
      },
    },
    address: {
      get() {
        return this.$store.state.employer.address;
      },
      set(value) {
        this.$store.commit("setAddress", value);
      },
    },
    address2: {
      get() {
        return this.$store.state.employer.address2;
      },
      set(value) {
        this.$store.commit("setAddress2", value);
      },
    },
    postCode: {
      get() {
        return this.$store.state.employer.postCode;
      },
      set(value) {
        this.$store.commit("setPostCode", value);
      },
    },
    city: {
      get() {
        return this.$store.state.employer.city;
      },
      set(value) {
        this.$store.commit("setCity", value);
      },
    },
    phone: {
      get() {
        return this.$store.state.employer.phone;
      },
      set(value) {
        this.$store.commit("setPhone", value);
      },
    },
  },
};
</script>

<style>
</style>