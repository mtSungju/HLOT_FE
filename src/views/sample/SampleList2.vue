<template>
  <v-main class="bg-grey-lighten-2">
    <h1>{{date}}</h1>
    <v-container>
      <v-row style="margin-top: 50px;">
        <v-col>
          <div class="d-flex flex-row-reverse mb-6">
            <v-btn class="ma-2" color="red" variant="tonal">
              삭 제
            </v-btn>
            <v-btn class="ma-2" color="blue" variant="tonal">
              수 정
            </v-btn>
            <v-btn class="ma-2" color="green" variant="tonal" @click="popUp()">
              등 록
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

      

  </v-main>

  <v-dialog v-model="popUpValue" max-width="500px" style="col">
    <PopupSample v-if="this.popUpValue" ></PopupSample>
  </v-dialog>

</template>

<script>
import PopupSample from '@/components/common/PopupSample.vue'

export default {
  name: "SampleList2",
   components: {PopupSample},
  data() {
    return {
      "date" : new Date().getFullYear(),
      "popUpValue" : false,
    }
  },  
  methods : {
    popUp(){
      alert("popup is available");
      this.popUpValue = true;
    }
  },
}
</script>
