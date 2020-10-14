<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card-title class="success dark">
              <span class="headline white--text">Contract</span>
            </v-card-title>
            <v-card-text>
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
              <v-text-field
                v-model="contract.trialPeriod"
                label="Trial period (in months)"
                type="number"
              ></v-text-field>
              <v-text-field v-model="contract.type" label="Type"></v-text-field>
              <v-menu
                v-if="contract.type==='CDD'"
                v-model="menu3"
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
                <v-date-picker v-model="contract.endOfCdd" @input="menu3 = false"></v-date-picker>
              </v-menu>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-title class="success dark">
              <span class="headline white--text">Employer</span>
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="employer.name" label="Employer name"></v-text-field>
              <v-text-field v-model="employer.altName" label="Alternative name"></v-text-field>
              <v-text-field v-model="employer.address" label="Address"></v-text-field>
              <v-text-field v-model="employer.address2" label="Address 2"></v-text-field>
              <v-text-field v-model="employer.postCode" label="Employer postcode"></v-text-field>
              <v-text-field v-model="employer.city" label="Employer city"></v-text-field>
              <v-text-field v-model="employer.phone" label="Employer phone"></v-text-field>
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
          <v-text-field v-model="employee.gender" label="Gender"></v-text-field>
          <v-text-field v-model="employee.birthDate" label="Birth date"></v-text-field>
          <v-text-field v-model="employee.birthPlace" label="Birth place"></v-text-field>
          <v-text-field v-model="employee.birthDepartment" label="Birth department"></v-text-field>
          <v-text-field v-model="employee.socialSecurityNumber" label="Social security number"></v-text-field>
          <v-checkbox v-model="isTest" persistent-hint hint="TestFile ?" />
        </v-card-text>
      </v-card>

      <v-btn
        v-if="!fileAlert"
        @click="downloadXML()"
        color="primary"
        absolute
        right
        class="my-6"
      >Generate file</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "InputForm",
  data: () => ({
    isTest: false,
    siretNumber: "",
    urssafCode: "",
    nafCode: "",
    employer: {
      name: "",
      altName: "",
      address: "",
      address2: "",
      postCode: "",
      city: "",
      phone: "",
    },
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

    comment: "",
  }),
  props: {},
  methods: {
    seedData() {
      this.
    },
    downloadXML() {
      const serializer = new XMLSerializer();
      const xmlStr = serializer.serializeToString(this.createXML());
      console.log(xmlStr);
      let encodedXml =
        "data:text/xml;charset=utf-8," + encodeURIComponent(xmlStr);
      let link = document.createElement("a");
      link.setAttribute("href", encodedXml);
      link.setAttribute("download", "dpae.xml");
      document.body.appendChild(link);
      link.click();
    },
    createXML() {
      let xmlDoc = document.implementation.createDocument("", "", null);
      let upload = xmlDoc.createElement("FR_DUE_Upload");
      upload.setAttribute(
        "xmlns:cct",
        "urn:oasis:names:tc:ubl:CoreComponentTypes:1.0:0.70"
      );

      upload.setAttribute("xmlns:rxdt", "http://www.repxml.org/DataTypes");
      upload.setAttribute("xmlns:rxorg", "http://www.repxml.org/Organization");
      upload.setAttribute(
        "xmlns:rxpadr",
        "http://www.repxml.org/PostalAddress"
      );
      upload.setAttribute(
        "xmlns:rxpers",
        "http://www.repxml.org/Person_Identity"
      );
      upload.setAttribute(
        "xmlns:rxphadr",
        "http://www.repxml.org/PhoneAddress"
      );
      upload.setAttribute(
        "xmlns:xsi",
        "http://www.w3.org/2001/XMLSchema-instance"
      );

      let testIndicator = xmlDoc.createElement("FR_DUE_Upload.Test.Indicator");
      testIndicator.innerHTML = this.isTest;
      let groupDpae = xmlDoc.createElement("FR_DuesGroup");
      let employerCategory = xmlDoc.createElement("FR_Employer");
      let employerIdentity = xmlDoc.createElement("FR_EmployerIdentity");
      let siret = xmlDoc.createElement(
        "rxorg:FR_Organization.SIRET.Identifier"
      );
      siret.innerHTML = this.siretNumber;

      let orgName = xmlDoc.createElement(
        "rxorg:FR_Organization.Designation.Text"
      );
      orgName.innerHTML = this.employer.name;

      let orgNameBis = xmlDoc.createElement(
        "rxorg:FR_Organization.SupplementaryDesignation.Text"
      );
      orgNameBis.innerHTML = this.employer.altName;

      let nafCode = xmlDoc.createElement("rxorg:FR_Organization.APE.Code");
      nafCode.innerHTML = this.nafCode;

      let urssafCode = xmlDoc.createElement("FR_Employer.URSSAF.Code");
      urssafCode.innerHTML = this.urssafCode;

      let employerLocation = xmlDoc.createElement("FR_EmployerAddress");

      let employerAddress = xmlDoc.createElement(
        "rxpadr:FR_PostalAddress.StreetDesignation.Text"
      );
      employerAddress.innerHTML = this.employer.address;

      let employerAddress2 = xmlDoc.createElement(
        "rxpadr:FR_PostalAddress.Additional.Text"
      );
      employerAddress2.innerHTML = this.employer.address2;

      let employerCity = xmlDoc.createElement(
        "rxpadr:FR_PostalAddress.Town.Text"
      );
      employerCity.innerHTML = this.employer.city;

      let employerPostcode = xmlDoc.createElement(
        "rxpadr:FR_PostalAddress.Postal.Code"
      );
      employerPostcode.innerHTML = this.employer.postCode;

      let employerContact = xmlDoc.createElement("FR_EmployerContact");
      let employerPhone = xmlDoc.createElement("FR_PhoneNumber");
      let employerPhoneNumber = xmlDoc.createElement(
        "rxphadr:FR_PhoneAddress.PhoneNumber.Text"
      );
      employerPhoneNumber.innerHTML = this.employer.phone;

      let employeeGroup = xmlDoc.createElement("FR_EmployeeGroup");
      let employee = xmlDoc.createElement("FR_Employee");
      let employeeIdentity = xmlDoc.createElement("FR_EmployeeIdentity");

      let surname = xmlDoc.createElement(
        "rxpers:FR_PersonIdentity.Surname.Text"
      );
      surname.innerHTML = this.employee.lastName;

      let usualName = xmlDoc.createElement(
        "rxpers:FR_PersonIdentity.UsualName.Text"
      );
      usualName.innerHTML = this.employee.lastName;

      let firstName = xmlDoc.createElement(
        "rxpers:FR_PersonIdentity.ChristianName.Text"
      );
      firstName.innerHTML = this.employee.firstName;

      let gender = xmlDoc.createElement("rxpers:FR_PersonIdentity.Sex.Code");
      gender.innerHTML = this.employee.gender;

      let nni = xmlDoc.createElement("rxpers:FR_NNI");
      let nniNumber = xmlDoc.createElement("rxpers:FR_NNI.NIR.Identifier");
      nniNumber.innerHTML = this.employee.socialSecurityNumber;
      let nniKey = xmlDoc.createElement("rxpers:FR_NNI.NIRKey.Text");
      nniKey.innerHTML = "TO BE CALCULATED";

      let birth = xmlDoc.createElement("rxpers:FR_Birth");

      let birthDate = xmlDoc.createElement("rxpers:FR_Birth.Date");
      birthDate.innerHTML = this.employee.birthDate;

      let birthTown = xmlDoc.createElement("rxpers:FR_Birth.Town.Text");
      birthTown.innerHTML = this.employee.birthPlace;

      let complement = xmlDoc.createElement("FR_EmployeeComplement");

      let birthDepartment = xmlDoc.createElement(
        "FR_EmployeeComplement.Birth_Department.Code"
      );
      birthDepartment.innerHTML = this.employee.birthDepartment;

      let contract = xmlDoc.createElement("FR_Contract");
      let contractStartDate = xmlDoc.createElement(
        "FR_Contract.StartContract.Date"
      );
      contractStartDate.innerHTML = this.contract.hiringDate;

      let contractStartTime = xmlDoc.createElement(
        "FR_Contract.StartContract.Time"
      );
      contractStartTime.innerHTML = "00:00:00";

      let contractEndDate = xmlDoc.createElement(
        "FR_Contract.EndContract.Date"
      );
      contractEndDate.innerHTML = this.contract.endOfCdd;

      let contractCode = xmlDoc.createElement("FR_Contract.Nature.Code");
      contractCode.innerHTML = this.contract.type;

      let contractHealthService = xmlDoc.createElement(
        "FR_Contract.HealthService.Text"
      );
      contractHealthService.innerHTML = this.contract.healthService;

      let trialTime = xmlDoc.createElement("FR_Contract.TrialTime.Text");
      trialTime.innerHTML = this.contract.trialPeriod;

      let comment = xmlDoc.createElement("FR_EmployeeGroup.Comment.Text");
      comment.innerHTML = this.comment;
      employerPhone.appendChild(employerPhoneNumber);

      employerLocation.appendChild(employerAddress);
      employerLocation.appendChild(employerAddress2);
      employerLocation.appendChild(employerCity);
      employerLocation.appendChild(employerPostcode);

      employerIdentity.appendChild(siret);
      employerIdentity.appendChild(orgName);
      employerIdentity.appendChild(orgNameBis);
      employerIdentity.appendChild(nafCode);

      employerCategory.appendChild(employerIdentity);
      employerCategory.appendChild(urssafCode);
      employerCategory.appendChild(employerLocation);
      employerCategory.appendChild(employerContact);

      employeeIdentity.appendChild(surname);
      employeeIdentity.appendChild(usualName);
      employeeIdentity.appendChild(firstName);
      employeeIdentity.appendChild(gender);

      nni.appendChild(nniNumber);
      nni.appendChild(nniKey);

      birth.appendChild(birthDate);
      birth.appendChild(birthTown);

      complement.appendChild(birthDepartment);

      contract.appendChild(contractStartDate);
      contract.appendChild(contractStartTime);
      contract.appendChild(contractEndDate);
      contract.appendChild(contractCode);
      contract.appendChild(contractHealthService);
      contract.appendChild(trialTime);

      employee.appendChild(employeeIdentity);
      employee.appendChild(nni);
      employee.appendChild(birth);
      employee.appendChild(complement);
      employeeGroup.appendChild(employee);
      employeeGroup.appendChild(contract);

      groupDpae.appendChild(employerCategory);
      groupDpae.appendChild(employeeGroup);

      upload.appendChild(testIndicator);
      upload.appendChild(groupDpae);

      xmlDoc.appendChild(upload);
      console.log(xmlDoc);

      return xmlDoc;
    },
  },
};
</script>


