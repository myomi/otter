<template>
  <div>
  <h1>Home</h1>
  <ul>
    <li>
      env: {{env}}
    </li>
  </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
//import config from

export default Vue.extend({
  data: function() {
    return {
      env: process.env.NODE_ENV
    };
  }
});
</script>
