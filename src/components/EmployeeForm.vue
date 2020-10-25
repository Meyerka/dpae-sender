<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="success dark">
            <span class="headline white--text">Contract</span>
          </v-card-title>
          <v-card-text>
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
                  v-model="employee.contract.hiringDate"
                  label="Hiring date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="employee.contract.hiringDate" @input="menu2 = false"></v-date-picker>
            </v-menu>

            <v-text-field
              v-model="employee.contract.trialPeriod"
              label="Trial period (in days)"
              type="number"
            ></v-text-field>
            <v-select :items="contractSelect" v-model="employee.contract.type" label="Type"></v-select>

            <v-menu
              v-if="employee.contract.type==='CDD'"
              v-model="menu3"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="employee.contract.endOfCdd"
                  label="End of CDD"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="employee.contract.endOfCdd" @input="menu3 = false"></v-date-picker>
            </v-menu>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-card>
      <v-card-title class="success dark">
        <span class="headline white--text">Employee</span>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="employee.lastName" label="Last name"></v-text-field>
        <v-text-field v-model="employee.firstName" label="First name"></v-text-field>
        <v-select :items="genderSelect" v-model="employee.gender" label="Gender"></v-select>
        <v-text-field v-model="employee.birthDate" label="Birth date"></v-text-field>
        <v-text-field v-model="employee.birthPlace" label="Birth place"></v-text-field>
        <v-text-field v-model="employee.birthDepartment" label="Birth department"></v-text-field>
        <v-text-field v-model="employee.socialSecurityNumber" label="Social security number"></v-text-field>
        <v-text-field v-model="nirKey" label="Social security key" disabled></v-text-field>
        <v-checkbox
          v-model="isTest"
          persistent-hint
          hint="TestFile ?"
          true-value="1"
          false-value="0"
        />
      </v-card-text>
    </v-card>
    <v-row>
      <v-col>
        <v-btn @click="postDpae()" color="success" class="my-6">Test api</v-btn>
      </v-col>

      <v-col>
        <v-btn @click="commitEmployee()" color="success" class="my-6">Add employee</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "InputForm",
  data: () => ({
    menu2: "",
    menu3: "",
    authstring: "",
    xmlResult: "",
    isTest: "1",

    employee: {
      lastName: "",
      firstName: "",
      gender: "",
      birthDate: "",
      birthPlace: "",
      birthDepartment: "",
      socialSecurityNumber: "",
      socialSecurityKey: "",
      contract: {
        hiringDate: "",
        trialPeriod: "",
        type: "",
        endOfCdd: "",
      },
      comment: "",
    },

    genderSelect: [
      { text: "Female", value: "2" },
      { text: "Male", value: "1" },
    ],
    contractSelect: [
      { text: "CDD", value: "CDD" },
      { text: "CDI", value: "CDI" },
    ],
  }),
  computed: {
    nirKey: function () {
      return 97 - (this.employee.socialSecurityNumber % 97);
    },
  },
  mounted() {
    const body = process.env.VUE_APP_ENV_BODY;
    const config = {
      headers: { "Content-Type": "text/xml" },
    };

    axios
      .post(
        "https://services.net-entreprises.fr/authentifier/1.0/",
        body,
        config
      )
      .then((response) => {
        console.log(response);
        this.authstring = response.data;
      });
  },
  props: {},
  methods: {
    commitEmployee() {
      console.log(this.employee);
      this.$store.commit("addEmployee", this.employee);
    },
    postDpae() {
      const body = this.xmlResult;
      const config = {
        headers: {
          "Content-Type": "application/xml",
          Accept: "application/xml",
          Authorization: this.authstring,
        },
      };
      console.log(body);
      console.log(config);
      axios
        .post(
          "https://depot.dpae-edi.urssaf.fr:8443/deposer-dsn/1.0/",
          body,
          config
        )
        .then((response) => {
          console.log(response);
        });
    },

    downloadXML() {
      const serializer = new XMLSerializer();
      let xmlStr = serializer.serializeToString(this.createXML());
      xmlStr = '<?xml version="1.0" encoding="ISO-8859-1" ?>' + xmlStr;
      this.xmlResult = xmlStr;
      let encodedXml =
        "data:text/xml;charset=utf-8," + encodeURIComponent(xmlStr);
      let link = document.createElement("a");
      link.setAttribute("href", encodedXml);
      link.setAttribute("download", "dpae.xml");
      document.body.appendChild(link);
      link.click();
    },
  },
};
</script>


