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
      </v-container>
    </div>
  </ModalLayout>
</template>

<script setup>
import ModalLayout from "@/layouts/ModalLayout.vue";
</script>

<script>
export default {
  name: "CompanyModal",
  data(){
    return {
      company: {
        companyName: '',        // 업체명
        businessRegistNumb: '', // 사업자번호
        companyTel: '',         // 업체번호
        remark: '',             // 비고
      }
    }
  }
}
</script>

<style>
  @import "@/assets/styles/modal.css";
</style>
