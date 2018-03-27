<template>
  <div>
  <h1>Home</h1>
  <ul>
    <li>
      env: {{env}}
    </li>
    <li>
      version: {{version}}
    </li>
    <li>
      hoge: {{hoge}}
    </li>
  </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
//import config from

export default Vue.extend({
  data: function() {
    return {
      env: process.env.NODE_ENV
    };
  },
  computed: {
    hoge(): string {
      return this.$store.state.version;
    },
    ...mapState(['version'])
  }
});
</script>
