<template>
  <div>
    <h1>DPAE Sender</h1>
    <input type="text" v-model="siretNumber" />
    <input type="text" v-model="urssafCode" />
    <input type="text" v-model="nafCode" />
    <input type="text" v-model="employerName" />
  </div>
</template>

<script>
export default {
  name: "InputForm",
  data: () => ({
    siretNumber: "",
    urssafCode: "",
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
