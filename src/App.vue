<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="container-fruid">
      <div class="row my-4">
        <div class="d-none d-md-block col-md-2">
          <AppMenu></AppMenu>
        </div>
        <div class="col-12 col-md-10">
          <router-view/>
        </div>
      </div>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeader from '@/layout/Header.vue';
import AppFooter from '@/layout/Footer.vue';
import AppMenu from '@/layout/Menu.vue';

export default Vue.extend({
  components: { AppHeader, AppFooter, AppMenu }
});
</script>

<style lang="scss" src="./app.scss"></style>
