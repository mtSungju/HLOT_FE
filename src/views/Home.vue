<template>
  <v-main class="bg-grey-lighten-2">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet
            min-height="90vh"
            rounded="lg"
          >
            <!-- 메인화면 가운데 -->
            <v-date-picker v-model="datePicker"></v-date-picker>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet>

          </v-sheet>
          <v-container>
            <v-textarea label="메모장" variant="outlined" rows="10"></v-textarea>
            <div id="map" style="width: 500px; height: 400px;"></div> 
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>

  
  
  



</template>
<script>
export default {
  name : 'home',
  data(){
    return{
      datePicker: new Date(),
    }
  },
  
  mounted() {
    
   const script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=2c59ccb1e34c6a67775ee5b48ed9042b";
   script.addEventListener('load',()=>{
    kakao.maps.load(()=>{
      this.initMap()
    })
   })
   document.head.appendChild(script);
  },

  methods :{
    initMap(){
      const container = document.getElementById('map');

      const options = {
        center: new kakao.maps.LatLng(37.403940, 127.099853),
        level: 3
      };
      
      this.map = new kakao.maps.Map(container,options)
    }
  }

}

</script>
