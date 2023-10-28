<script>
import axios from "axios";

export default {
  props: ['id'],
  data() {
    return {
      employees: []
    };
  },

  created() {
  },
  async mounted() {
    console.log(this.id)
    await axios
        .get(`${import.meta.env.VITE_BASE_URL}/employee-get/${this.id ?? 0}` )
        .then(response => {
          this.employees = response.data.data
        });
  }
}
</script>

<template>
  <div class="greetings" >
    <h2 style="text-align: center">Employees</h2>
    <ul>
      <li class="company-box" v-for="employee in employees" :key="employee.id">
        <span class="company-text">{{ employee.first_name }} {{ employee.last_name }}</span>
      </li>
    </ul>
  </div>
</template>
