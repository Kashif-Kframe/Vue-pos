<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
      <router-link to="/">Home</router-link>
      <router-link to="/company">Companies</router-link>
      <router-link to="/employee">Employees</router-link><br>
    </div>
  </nav>
</template>

<script>
export default {
  name: "menu"
}
</script>
