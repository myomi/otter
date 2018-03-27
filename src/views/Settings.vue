<template>
    <div>
        <h1>Settings</h1>
        <form>
            <div class="form-group">
                <label for="version">Version:</label>
                <input type="text" id="version" :value="version" @input="updateVersion">
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
export default Vue.extend({
  computed: {
    ...mapState(['version'])
  },
  methods: {
    updateVersion(e: TextEvent) {
      const target = e.target as HTMLInputElement;
      this.$store.commit('updateVersion', target.value);
    }
  }
});
</script>
