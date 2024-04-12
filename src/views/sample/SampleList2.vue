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
            <v-btn class="ma-2" color="green" variant="tonal" @click="modalOpen()">
              등 록
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

      

  </v-main>

  <!-- <v-dialog v-model="modalCheck" max-width="500px" style="col"> -->
    <PopupSample v-if="modalCheck" @close="modalOpen()" userName='최성주'></PopupSample>
  <!-- </v-dialog> -->

</template>

<script>
import PopupSample from '@/components/common/PopupSample.vue'

export default {
  name: "SampleList2",

  components: {
    PopupSample
  },


  data() {
    return {
      "date" : new Date().getFullYear(),
       modalCheck: false,
    }
  },  
  methods : {
  
    modalOpen() {
      console.log("부모");
      this.modalCheck = !this.modalCheck
  }
  },
}
</script>
