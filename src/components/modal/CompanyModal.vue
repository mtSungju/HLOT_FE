<template>
  <ModalLayout>
    <div class="modal-title">
      업체관리 {{ mode === Config.MODAL_MODE.DETAIL ? '상세'
                : mode === Config.MODAL_MODE.REG ? '등록' : '수정' }}
    </div>

    <div class="modal-content">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="company.companyName"
              label="업체명"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="company.businessRegistNumb"
              label="사업자번호"
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="company.companyTel"
              label="전화번호"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              filled
              label="비고"
              v-model="company.remark"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <hr><br>
          </v-col>
        </v-row>
        <v-row style="margin-bottom: 10px">
          <v-col style="font-size: 20px;">
            업체담당자
          </v-col>
          <v-col style="text-align: right">
            <v-btn size="small" @click="addManager()" color="green">담당자 추가</v-btn>
            　
            <v-btn size="small" color="red">담당자 삭제</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              variant="outlined"
              v-model="companyManagerTemp.companyManagerName"
              label="담당자 명"
              density="compact"
            />
          </v-col>
          <v-col>
            <v-text-field
              variant="outlined"
              v-model="companyManagerTemp.companyManagerTel"
              label="담당자 번호"
              density="compact"
            />
          </v-col>
          <v-col>
            <v-text-field
              variant="outlined"
              v-model="companyManagerTemp.remark"
              label="비고"
              density="compact"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-data-table
              style="height: 200px"
              :headers="headers"
              :items="companyManagers"
              :items-per-page-options="itemsPerPageOptions"
              class="elevation-1"
            ></v-data-table>
          </v-col>
        </v-row>
        <v-row>
          <div class="modal-btn-list">
            <v-btn
              color="blue"
            >수정</v-btn>
            　
            <v-btn
              color="green"
              @click="newCompany"
            >저장</v-btn>
            　
            <v-btn
              color="red"
            >삭제</v-btn>
          </div>
        </v-row>
      </v-container>
    </div>
  </ModalLayout>
</template>

<script setup>
import ModalLayout from "@/layouts/ModalLayout.vue";
const headers = [
  { title: '담당자명', key:'companyManagerName' },
  { title: '전화번호', key:'companyManagerTel'},
  { title: '비고', key:'remark'},
];
</script>

<script>
import companyApi from '@/api/company.js'
import Config from "@/util/config";
import store from "@/store/store";
export default {
  name: "CompanyModal",
  created() {
  },
  mounted() {
    console.log(store.getters.getParams.mode + ' : ' + store.getters.getParams.key);
  },
  data() {
    return {
      itemsPerPageOptions: Config.ITEMS_PER_PAGE_OPTIONS,

      mode: store.getters.getParams.mode,
      key:store.getters.getParams.key,

      company: {  // 업체
        companyName: '',        // 업체명
        businessRegistNumb: '', // 사업자번호
        companyTel: '',         // 업체번호
        remark: '',             // 비고
        registUserName: '관리자' // 등록자
      },

      companyManagers: [],

      companyManagerTemp: {   // 업체담당자
        companyManagerName: '', // 업체담당자명
        companyManagerTel: '',  // 업체담당자번호
        remark: ''              // 비고
      }
    }
  },
  methods : {
    newCompany: function() {
      companyApi.newCompany(this.company);
    },
    addManager: function() {
      console.log(this.companyManagerTemp);
    },
    deleteManager: function() {
    }
  }
}
</script>

<style>
  @import "@/assets/styles/modal.css";
</style>
