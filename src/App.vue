<template>
  <title>MT Data</title>
  <v-app id="inspire">
    <Header class="header-container_mt"/>
    <div class="main-container_mt">
      <RouterView @title="showEmit"/>
    </div>

    <CommonModal v-if="store.getters.isOpenModal" :title="title"/>
  </v-app>

</template>

<script>
import Header from '@/components/common/Header.vue';
import Popup from '@/components/common/Popup.vue'
import CommonModal from "@/components/CommonModal.vue";
import store from "@/store/store";
  export default {
    computed: {
      store() {
        return store
      }
    },
    components: {CommonModal, Popup, Header},
    data(){
     return{
        title : '',
     }
    },
    methods: {
      showEmit(param){
        this.title = param;
        console.log("emit value =>" + this.title);
      }
    }
  }
</script>

<style>
  @import "@/assets/styles/common.css";
</style>
