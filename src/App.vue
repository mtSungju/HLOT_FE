<template>
  <title>MT Data</title>
  <v-app id="inspire">
    <Header />
    <RouterView />


  </v-app>

</template>

<script>
import Header from '@/components/common/Header.vue';
import Popup from '@/components/common/Popup.vue'
  export default {
    components: {Popup, Header},
    data(){
     return{
       popupConf:{
         isActive: false,
         maxWidth: 500,
         dialog: true,
       }
     }
    },
  }
</script>
