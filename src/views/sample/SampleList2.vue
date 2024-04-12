<template>
  <v-main class="bg-grey-lighten-2">
    <!-- <h1>{{date}}</h1> -->
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
</template>

<script>
export default {
  name: "SampleList2",
  data() {
    return {
      "date" : new Date(),
    }
  },  
  methods : {
    popUp(){
      alert("sss");
      this.$router.push("/common/Popup");
    }
  },
}
</script>
