<script>
import axios from "axios";

export default {
  data() {
    return {
      companies: []
    };
  },

  created() {
  },
  async mounted() {
    await axios
        .get(`${import.meta.env.VITE_BASE_URL}/companies-get`)
        .then(response => {
          this.companies = response.data.data
        });
  }
}

</script>

<template>
  <div class="greetings" >
    <h2 style="text-align: center">Companies</h2>
    <div class="company-box" v-for="company in companies" :key="company.id">
      <router-link
          :to="`employee/${company.id}`">
        <span class="company-text">{{ company.name }}</span>
        <img class="company-image" :src="company.logoPath" alt="Company" style="width:150px">
    </router-link>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
