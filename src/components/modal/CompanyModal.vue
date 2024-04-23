<template>
  <ModalLayout>
    <div class="modal-title">
      업체관리 {{ mode === MODAL_MODE.DETAIL ? '상세'
                : mode === MODAL_MODE.REG ? '등록' : '수정' }}
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
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              variant="outlined"
              v-model="companyManager.companyManagerName"
              label="담당자 명"
              density="compact"
            />
          </v-col>
          <v-col>
            <v-text-field
              variant="outlined"
              v-model="companyManager.companyManagerTel"
              label="담당자 번호"
              density="compact"
            />
          </v-col>
          <v-col>
            <v-text-field
              variant="outlined"
              v-model="companyManager.remark"
              label="비고"
              density="compact"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <table class="custom-table_mt">
              <thead>
                <tr>
                  <th>담당자명</th>
                  <th>전화번호</th>
                  <th>비　　고</th>
                  <th>등록일자</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="manager in company.companyManagers">
                    <td>{{ manager.companyManagerName }}</td>
                    <td>{{ manager.companyManagerTel }}</td>
                    <td>{{ manager.remark }}</td>
                    <td>{{ manager.registDate }}</td>
                    <td style="text-align: center">
                      <img src="../../assets/icon/icon-edit.png" @click="editManager()" height="20" width="20" alt=""/>
                    </td>
                    <td style="text-align: center">
                      <img src="../../assets/icon/icon-delete.png" @click="deleteManager()" height="20" width="20" alt=""/>
                    </td>
                  </tr>
              </tbody>
            </table>
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
import {ITEMS_PER_PAGE_OPTIONS, MODAL_MODE} from "@/util/config";
const headers = [
  { title: '담당자명', key:'companyManagerName' },
  { title: '전화번호', key:'companyManagerTel'},
  { title: '비고', key:'remark'},
];
</script>

<script>
import companyApi from '@/api/company.js'
import store from "@/store/store";
import validUtil from "@/util/validUtil";
export default {
  name: "CompanyModal",
  beforeMount() {
    if(!validUtil.isNull(this.key)) this.getCompany();
  },
  data() {
    return {
      mode: store.getters.getParams.mode,
      key:store.getters.getParams.key,

      company: {  // 업체
        companyId: '',          // 업체ID
        companyName: '',        // 업체명
        businessRegistNumb: '', // 사업자번호
        companyTel: '',         // 업체번호
        remark: '',             // 비고
        registUserName: '관리자',// 등록자

        companyManagers: [] // 업체담당자
      },

      companyManager: {   // 업체담당자
        companyManagerName: '', // 업체담당자명
        companyManagerTel: '',  // 업체담당자번호
        remark: '',             // 비고
        registDate : ''         // 등록일자
      }
    }
  },
  methods : {
    /* company 상세조회 */
    async getCompany(){
      await companyApi.company(this.key).then(res => {
        this.company = res.data;
      });
    },
    /* company 등록 */
    async newCompany() {
      await companyApi.newCompany(this.company);
    },
    /* company_manager 추가 */
    async addManager() {
      this.companyManager.companyId = this.company.companyId;
      await companyApi.newCompanyManager(this.companyManager).then(res => {
        this.companyManager = {};

        this.getCompany();
      });
    },
    /* company_manager 삭제 */
    async deleteManager() {
    },
    /* company_manager 수정 */
    async editManager() {

    }
  }
}
</script>

<style>
  @import "@/assets/styles/modal.css";
  @import "@/assets/styles/customTable.css";
</style>
