<template>
  <title>MT Data</title>
  <v-app id="inspire">
    <Header class="header-container_mt"/>
    <div class="main-container_mt">
      <RouterView />
    </div>
  </v-app>

</template>

<script>
import Header from '@/components/common/Header.vue';
import Popup from '@/components/common/Popup.vue'
import store from "@/store/store";
  export default {
    computed: {
      store() {
        return store
      }
    },
    components: {Popup, Header},
  }
</script>

<style>
  @import "@/assets/styles/common.css";
</style>
