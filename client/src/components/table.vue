<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-4"> it</h1>
      <p class="lead">Do your  ere</p>
      <hr class="my-4">
      <p>All in one place </p>
    </div>
    <div class="row"></div>
    <div class="row">
    <div class="col-sm">   
    </div>
    <div class="col-lg">
      <label>Filters</label>
      <input v-model="filters.name.value"/>

      <v-table :data="users"
              :filters="filters">
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
    </div>
    <div class="col-sm">
    </div>
  </div>
  </div>
</template>


<script>
import users from './users.json'

export default {
  name: 'TableView',
  data: () => ({
    users,
    filters: {
      name: { value: '', keys: ['Email'] }
    }
  })
}
</script>


