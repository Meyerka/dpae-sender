<template>
  <v-container>
    <code>{{xmlDoc}}</code>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    xmlDoc: "",
  }),
  created() {
    let xmlDoc = document.implementation.createDocument("", "", null);
    let upload = xmlDoc.createElement("FR_DUE_Upload");
    upload.setAttribute(
      "xmlns:cct",
      "urn:oasis:names:tc:ubl:CoreComponentTypes:1.0:0.70"
    );

    upload.setAttribute("xmlns:rxdt", "http://www.repxml.org/DataTypes");
    upload.setAttribute("xmlns:rxorg", "http://www.repxml.org/Organization");
    upload.setAttribute("xmlns:rxpadr", "http://www.repxml.org/PostalAddress");
    upload.setAttribute(
      "xmlns:rxpers",
      "http://www.repxml.org/Person_Identity"
    );
    upload.setAttribute("xmlns:rxphadr", "http://www.repxml.org/PhoneAddress");
    upload.setAttribute(
      "xmlns:xsi",
      "http://www.w3.org/2001/XMLSchema-instance"
    );

    let testIndicator = xmlDoc.createElement("FR_DUE_Upload.Test.Indicator");
    testIndicator.innerHTML = "1";
    let groupDpae = xmlDoc.createElement("FR_DuesGroup");
    let employerCategory = xmlDoc.createElement("FR_Employer");
    let employerIdentity = xmlDoc.createElement("FR_EmployerIdentity");
    let siret = xmlDoc.createElement("rxorg:FR_Organization.SIRET.Identifier");
    siret.innerHTML = this.$store.state.employer.siretNumber;

    let orgName = xmlDoc.createElement(
      "rxorg:FR_Organization.Designation.Text"
    );
    orgName.innerHTML = this.$store.state.employer.name;

    let orgNameBis = xmlDoc.createElement(
      "rxorg:FR_Organization.SupplementaryDesignation.Text"
    );
    orgNameBis.innerHTML = this.$store.state.employer.altName;

    let nafCode = xmlDoc.createElement("rxorg:FR_Organization.APE.Code");
    nafCode.innerHTML = this.$store.state.employer.nafCode;

    let urssafCode = xmlDoc.createElement("FR_Employer.URSSAF.Code");
    urssafCode.innerHTML = this.$store.state.employer.urssafCode;

    let employerLocation = xmlDoc.createElement("FR_EmployerAddress");

    let employerAddress = xmlDoc.createElement(
      "rxpadr:FR_PostalAddress.StreetDesignation.Text"
    );
    employerAddress.innerHTML = this.$store.state.employer.address;

    let employerAddress2 = xmlDoc.createElement(
      "rxpadr:FR_PostalAddress.Additional.Text"
    );
    employerAddress2.innerHTML = this.$store.state.employer.address2;

    let employerCity = xmlDoc.createElement(
      "rxpadr:FR_PostalAddress.Town.Text"
    );
    employerCity.innerHTML = this.$store.state.employer.city;

    let employerPostcode = xmlDoc.createElement(
      "rxpadr:FR_PostalAddress.Postal.Code"
    );
    employerPostcode.innerHTML = this.$store.state.employer.postCode;

    let employerContact = xmlDoc.createElement("FR_EmployerContact");
    let employerPhone = xmlDoc.createElement("FR_PhoneNumber");
    let employerPhoneNumber = xmlDoc.createElement(
      "rxphadr:FR_PhoneAddress.PhoneNumber.Text"
    );
    employerPhoneNumber.innerHTML = this.$store.state.employer.phone;

    employerPhone.appendChild(employerPhoneNumber);

    employerContact.appendChild(employerPhone);

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

    groupDpae.appendChild(employerCategory);

    for (let i = 0; i < this.$store.state.employees.length; i++) {
      let employeeGroup = xmlDoc.createElement("FR_EmployeeGroup");

      let employee = xmlDoc.createElement("FR_Employee");
      let employeeIdentity = xmlDoc.createElement("FR_EmployeeIdentity");

      let surname = xmlDoc.createElement(
        "rxpers:FR_PersonIdentity.Surname.Text"
      );
      surname.innerHTML = this.$store.state.employees[i].lastName;

      let usualName = xmlDoc.createElement(
        "rxpers:FR_PersonIdentity.UsualName.Text"
      );
      usualName.innerHTML = this.$store.state.employees[i].lastName;

      let firstName = xmlDoc.createElement(
        "rxpers:FR_PersonIdentity.ChristianName.Text"
      );
      firstName.innerHTML = this.$store.state.employees[i].firstName;

      let gender = xmlDoc.createElement("rxpers:FR_PersonIdentity.Sex.Code");
      gender.innerHTML = this.$store.state.employees[i].gender;

      let nni = xmlDoc.createElement("rxpers:FR_NNI");
      let nniNumber = xmlDoc.createElement("rxpers:FR_NNI.NIR.Identifier");
      nniNumber.innerHTML = this.$store.state.employees[i].socialSecurityNumber;
      let nniKey = xmlDoc.createElement("rxpers:FR_NNI.NIRKey.Text");
      nniKey.innerHTML = this.nirKey;

      let birth = xmlDoc.createElement("rxpers:FR_Birth");

      let birthDate = xmlDoc.createElement("rxpers:FR_Birth.Date");
      birthDate.innerHTML = this.$store.state.employees[i].birthDate;

      let birthTown = xmlDoc.createElement("rxpers:FR_Birth.Town.Text");
      birthTown.innerHTML = this.$store.state.employees[i].birthPlace;

      let complement = xmlDoc.createElement("FR_EmployeeComplement");

      let birthDepartment = xmlDoc.createElement(
        "FR_EmployeeComplement.Birth_Department.Code"
      );
      birthDepartment.innerHTML = this.$store.state.employees[
        i
      ].birthDepartment;

      let contract = xmlDoc.createElement("FR_Contract");
      let contractStartDate = xmlDoc.createElement(
        "FR_Contract.StartContract.Date"
      );
      contractStartDate.innerHTML = this.$store.state.employees[
        i
      ].contract.hiringDate;

      let contractStartTime = xmlDoc.createElement(
        "FR_Contract.StartContract.Time"
      );
      contractStartTime.innerHTML = "00:00:00";

      let contractEndDate = xmlDoc.createElement(
        "FR_Contract.EndContract.Date"
      );
      contractEndDate.innerHTML = this.$store.state.employees[
        i
      ].contract.endOfCdd;

      let contractCode = xmlDoc.createElement("FR_Contract.Nature.Code");
      contractCode.innerHTML = this.$store.state.employees[i].contract.type;

      let contractHealthService = xmlDoc.createElement(
        "FR_Contract.HealthService.Text"
      );
      contractHealthService.innerHTML = this.$store.state.employees[
        i
      ].contract.healthService;

      let trialTime = xmlDoc.createElement("FR_Contract.TrialTime.Text");
      trialTime.innerHTML = this.$store.state.employees[i].contract.trialPeriod;

      let comment = xmlDoc.createElement("FR_EmployeeGroup.Comment.Text");
      comment.innerHTML = this.$store.state.employees[i].comment;

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
      employeeGroup.appendChild(comment);

      groupDpae.appendChild(employeeGroup);
    }

    upload.appendChild(testIndicator);
    upload.appendChild(groupDpae);

    xmlDoc.appendChild(upload);
    const serializer = new XMLSerializer();
    let xmlStr = serializer.serializeToString(xmlDoc);
    this.xmlDoc = xmlStr;
  },
};
</script>

<style>
</style>