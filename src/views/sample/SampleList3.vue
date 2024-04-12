<template>
  <v-main class="bg-grey-lighten-2">
    <v-container>
      <v-btn
        @click="getSamples">
        TEST
      </v-btn>
    </v-container>
  </v-main>
</template>

<script>
import api from '@/util/api.js';
export default {
  name: "SampleList3",
  data() {
    return {
      responseData: {}
    }
  },
  methods : {
    async getSamples(){
      await api.getSampleData().then( res => {
          this.responseData = res.responseData;
        }).catch( e => {
          console.log(e);
        });

      console.log(this.responseData);
    }
  },
}
</script>
