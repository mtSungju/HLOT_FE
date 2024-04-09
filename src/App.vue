<template>
  <title>MT Data</title>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
          class="me-4 "
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
        ></v-btn>

        <v-spacer></v-spacer>

 
        <v-responsive max-width="130">
            <v-btn variant="outlined"
            color="blue"
            class="mx-2"
            @click="search"
          >로그인</v-btn>
        </v-responsive>

         <v-responsive max-width="130">
            <v-btn variant="outlined"
            color="blue"
            class="mx-2"
            @click="search"
          >로그아웃</v-btn>
        </v-responsive>

      </v-container>
    </v-app-bar>

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
              </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>




<script>
  export default {
    data(){
     return{
        links: [
        'HOME',
        '업체관리',
        '견적서관리',
        '프로젝트관리',
      ],
      datePicker: new Date(),
 
     } 
    },
  }
</script>