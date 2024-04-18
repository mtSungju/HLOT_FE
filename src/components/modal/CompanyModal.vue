<template>
  <ModalLayout>
    <div class="modal-title">
      업체관리 등록
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
        <v-row style="margin-bottom: 30px">
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
            />
          </v-col>
          <v-col>
            <v-text-field
              variant="outlined"
              v-model="companyManagerTemp.companyManagerTel"
              label="담당자 번호"
            />
          </v-col>
          <v-col>
            <v-text-field
              variant="outlined"
              v-model="companyManagerTemp.remark"
              label="비고"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-data-table
              style="height: 170px"
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
              color="green"
            >등록</v-btn>

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
import cmm from "@/util/cmm";

const itemsPerPageOptions = cmm.cmmConfig.itemsPerPageOptions;
const headers = [
  { title: '담당자명', key:'companyManagerName' },
  { title: '전화번호', key:'companyManagerTel'},
  { title: '비고', key:'remark'},
];

</script>

<script>
export default {
  name: "CompanyModal",
  mounted() {
  },
  data() {
    return {

      company: {  // 업체
        companyName: '',        // 업체명
        businessRegistNumb: '', // 사업자번호
        companyTel: '',         // 업체번호
        remark: '',             // 비고
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
