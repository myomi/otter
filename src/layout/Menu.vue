<template>
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
    </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AppMenu'
});
</script>

