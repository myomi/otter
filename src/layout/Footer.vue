<template>
  <div class="AppFooter">footer works.</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AppFooter'
});
</script>

<style lang="scss" scoped>
.AppFooter {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
}
</style>
