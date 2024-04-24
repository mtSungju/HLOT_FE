<template>
  <ProjectModal v-if="store.getters.isOpenModal" />

  <v-card class="table-container_mt">
    <div class="table-title_mt">
      프로젝트 관리
    </div>

    <v-card-title>
      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="검색"
      ></v-text-field>
    </v-card-title>

    <div class="table-btn-list">
      <v-btn color="#5865f2" @click="pushRegPop">등록</v-btn>
    </div>

    <v-data-table
      :headers="headers"
      :items="projects"
      item-value="projectId"
      v-model="selected"
      :search="search"
      select-strategy="page"
      :items-per-page-options="ITEMS_PER_PAGE_OPTIONS"
      class="elevation-1 table-list_mt"
      show-select
      @click:row="popUpOpen"
    >
    </v-data-table>
    {{this.connectData}}
  </v-card>


</template>

<script setup>
  import cmm from '@/util/cmm.js'
  import ProjectModal from "@/components/modal/ProjectModal.vue";
  import {ITEMS_PER_PAGE_OPTIONS} from "@/util/config";


  const headers = [
    { title: '프로젝트명', key:'projectName' },
    { title: '프로젝트시작일자', key:'projectStDate'},
    { title: '프로젝트종료일자', key:'projectEndDate'},
    { title: '프로젝트상태', key:'projectStatus'},
    { title: '고객사',  key:'customer'},
    { title: '비고',  key:'remark'},

  ];
</script>

<script>


import store from "@/store/store";
import api from '@/util/apiUtil.js';
import axios from "axios";
import {MODAL_MODE} from "@/util/config";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BE_PORT = import.meta.env.VITE_BE_PORT;

export default {

  // 화면 로드되기전에 data 조회
  beforeMount(){
    console.log("beforeMount");
    this.selectProjectList(); // 프로젝트리스트 조회
  },

  mounted() {
    console.log("Mount");
  },
  computed: {
      store() {
        return store
      }
    },
  data() {
    return {
      search: '',
      projects: [],
      selected : [],
      popUpValue : false,
      connectData : '',
    };
  },
  methods: {
    saveItem() {
      // 등록 로직
    },
    popUpOpen(event,{item}){
      console.log(item.projectId);

      this.projects.projectId = item.projectId;
      // key : 프로젝트 id , mode : D
      this.$store.commit("toggleModal", {key: item.projectId, mode: MODAL_MODE.DETAIL});

    },

    pushRegPop: () => {
      // key : 프로젝트 id , mode : R
      store.commit("toggleModal",{key: '', mode: MODAL_MODE.REG});

    },

     selectProjectList(){ // 프로젝트 리스트 조회

       axios.get(BASE_URL + ':' + 8081 + '/'  + 'api/project').then((response)=>{
        this.projects = response.data;

      })

    },


  }
};
</script>
