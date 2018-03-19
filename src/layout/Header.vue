<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <span class="navbar-text">Sample Application</span>
    <div class="collapse navbar-collapse" id="navbarText">
    </div>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link">Home</router-link> |
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AppHeader'
});
</script>


<style lang="scss" scoped>

</style>
