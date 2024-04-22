<template>
  <ModalLayout>
    <div class="modal-title">
      프로젝트 등록
    </div>

    <div class="modal-content">
      <v-container>
        
          <v-row>
            <v-col>
              <v-text-field
                v-model="project.projectName"
                label="프로젝트 이름"
              ></v-text-field>
            </v-col>
            <v-col>
              <label> 프로젝트 기간</label><br>
              <input type="date" id="strDate" v-model="project.projectStDate"/>  ~
              <input type="date" id="endDate" v-model="project.projectEndDate"/>  
            </v-col>
          </v-row>
          <v-row>
           <v-col>
             <v-select
            label="진행상태"
            :items="['진행', '완료', '연장']"
            v-model="project.projectStatus"
            
            >
            </v-select>
           </v-col>
          </v-row>
          <v-row >
            <v-col>
              
              <v-text-field
              label="고객사"
             
              v-model="project.customer">
              </v-text-field>
              
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea v-model="project.remark" label="비고" variant="outlined" rows="10"></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-btn id="regist" @click="registProject">등록</v-btn>
            <v-btn id="update" v-if="visible">수정</v-btn>
            <v-btn @click="close()">취소</v-btn>
            
          </v-row>
      </v-container>
    </div>
  </ModalLayout>
</template>

<script setup>
import ModalLayout from "@/layouts/ModalLayout.vue";
</script>

<script>
import store from "@/store/store";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BE_PORT = import.meta.env.VITE_BE_PORT;


export default {
  name: "CompanyModal",

  mounted(){
    console.log(this.projectId);

    //상세조회
    if(this.projectId !== null){
        /** 프로젝트 단건 조회*/
        this.selectProject();
    }



    if(this.project.projectName !== ''){
      this.visible = true;
    }
  },  

  props: {  
    projectId : ''
  },

  data() {
    return {
      visible : false,
      project : {
        projectName : '', // 프로젝트명
        projectStDate : '', // 프로젝트 시작일
        projectEndDate : '', // 프로젝트 종료일
        projectStatus : '', // 프로젝트 상태
        customer : '', // 고객사
        remark : '', // 비고
      }
    }
  },

  methods: {
      close:()=>{
        store.commit("toggleModal");
      },

      // 프로젝트 정보 등록
      registProject(){
        axios.post(BASE_URL + ':' + 8081 + '/'  + 'api/project',this.project).then((response)=>{
        console.log(response);
        console.log(response.status);
      })
      },

      // 프로젝트 단건조회
      selectProject(){ 
        
        axios.get(BASE_URL + ':' + 8081 + '/'  + 'api/project/' + this.projectId).then((response)=>{
          
          this.project = response.data;
          
        })

      }

    }
}
</script>

<style>
  @import "@/assets/styles/modal.css";
</style>
