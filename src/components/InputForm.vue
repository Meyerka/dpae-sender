<template>
  <div>
    <v-container>
      <h1>DPAE Sender</h1>

      <h2>Contract</h2>
      <v-text-field v-model="siretNumber" label="SIRET Number"></v-text-field>
      <v-text-field v-model="urssafCode" label="URSSAF Code"></v-text-field>
      <v-text-field v-model="nafCode" label="NAF Code"></v-text-field>

      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="contract.hiringDate"
            label="Hiring date"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="contract.hiringDate" @input="menu2 = false"></v-date-picker>
      </v-menu>

      <v-text-field v-model="contract.healthService" label="Health service number"></v-text-field>
      <v-text-field v-model="contract.trialPeriod" label="Trial period (in months)" type="number"></v-text-field>
      <v-text-field v-model="contract.type" label="Type"></v-text-field>
      <v-menu
        v-if="contract.type==='CDD'"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="contract.endOfCdd"
            label="End of CDD"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="contract.endOfCdd" @input="menu2 = false"></v-date-picker>
      </v-menu>

      <h2>Employer 1</h2>
      <v-text-field v-model="employer[0].name" label="Employer name"></v-text-field>
      <v-text-field v-model="employer[0].postCode" label="Employer postcode"></v-text-field>
      <v-text-field v-model="employer[0].city" label="Employer city"></v-text-field>
      <v-text-field v-model="employer[0].phone" label="Employer phone"></v-text-field>

      <h2>Employer 2</h2>
      <v-text-field v-model="employer[1].name" label="Employer name"></v-text-field>
      <v-text-field v-model="employer[1].postCode" label="Employer postcode"></v-text-field>
      <v-text-field v-model="employer[1].city" label="Employer city"></v-text-field>
      <v-text-field v-model="employer[1].phone" label="Employer phone"></v-text-field>

      <h2>Employee</h2>
      <v-text-field v-model="employee.lastName" label="Last name"></v-text-field>
      <v-text-field v-model="employee.firstName" label="First name"></v-text-field>
      <v-text-field v-model="employee.gender" label="Gender"></v-text-field>
      <v-text-field v-model="employee.birthDate" label="Birth date"></v-text-field>
      <v-text-field v-model="employee.birthPlace" label="Birth place"></v-text-field>
      <v-text-field v-model="employee.birthDepartment" label="Birth department"></v-text-field>
      <v-text-field v-model="employee.socialSecurityNumber" label="Social security number"></v-text-field>

      <h1>{{employer[1].postCode}}</h1>

      <v-btn @click="generateXml()" color="primary" absolute right class="my-6">Generate file</v-btn>
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
        phone: "",
      },
      {
        name: "",
        postCode: "",
        city: "",
        phone: "",
      },
    ],
    employee: {
      lastName: "",
      firstName: "",
      gender: "",
      birthDate: "",
      birthPlace: "",
      birthDepartment: "",
      socialSecurityNumber: "",
    },

    contract: {
      hiringDate: "",
      healthService: "",
      trialPeriod: "",
      type: "",
      endOfCdd: "",
    },
  }),
  props: {},
  methods: {
    generateXml() {
      let xmlDoc = document.implementation.createDocument("", "", null);
      //let upload =
      var upload = xmlDoc.createElement("FR_DUE_Upload");
      upload.setAttribute("gri", "huighr");
      console.log(xmlDoc);

      xmlDoc.appendChild(upload);
      return xmlDoc;
    },
  },
};
</script>


