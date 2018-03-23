<template>
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/profile" class="nav-link">Profile</router-link>
      </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppMenu'
});
</script>

<style lang="scss" scoped>
.nav-link {
  font-weight: 500;
  color: #333;

  &.router-link-exact-active {
    color: #007bff;
    border-left: 0.5rem solid #007bff;
  }
}
</style>
