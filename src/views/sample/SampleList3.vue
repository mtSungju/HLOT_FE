<template>
  <v-main class="bg-grey-lighten-2">
    <v-container>
      <v-btn
        color="blue"
        @click="getSamples">
        get Samples()
      </v-btn>
      <v-row justify="space-around">
        <v-col cols="12" md="6">

          <v-dialog width="500px">

            <template v-slot:activator="{ props: activatorProps }">
              <v-btn
                v-bind="activatorProps"
                text="등 록"
                color="green"
              ></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar title="Opening from the Bottom"></v-toolbar>

                <v-card-text class="text-h2 pa-12"> Hello world! </v-card-text>

                <v-card-actions class="justify-end">
                  <v-btn text="Close" @click="isActive.value = false"></v-btn>
                </v-card-actions>
              </v-card>
            </template>

          </v-dialog>

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import api from '@/util/api.js';
export default {
  name: "SampleList3",
  data() {
    return {
      responseData: {},
      activatorProps:{
        isActive: true
      }
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
