<template>
  <v-table :data="users">
    <thead slot="head">
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Address</th>
    </thead>
    <tbody slot="body" slot-scope="{displayData}">
        <tr v-for="row in displayData" :key="row.id">
          <td>{{ row.Name }}</td>
          <td>{{ row.Age }}</td>
          <td>{{ row.Email }}</td>
          <td>
              {{ row.Address}}
          </td>
        </tr>
    </tbody>
  </v-table>
</template>


<script>
import users from './users.json'

export default {
  name: 'TableView',
  data: () => ({
    users
  })
}
</script>


