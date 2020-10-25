<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in $store.state.employees" :key="employee.name">
            <td>{{ employee.lastName }} {{employee.firstName}}</td>
            <td>{{ employee.gender }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>