<template>
  <CompanyModal
    v-if="store.getters.isOpenModal"
  />

  <v-card class="table-container_mt">
    <div class="table-title_mt">
      업체 관리
    </div>

    <v-card-title>
      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="검색"
      ></v-text-field>
    </v-card-title>

    <div class="table-btn-list">
      <v-btn color="#5865f2" @click="openReg">등록</v-btn>
    </div>

    <v-data-table
      @click:row="openDetail"
      :headers="headers"
      :items="companys"
      :search="search"
      :items-per-page-options="itemsPerPageOptions"
      class="elevation-1 table-list_mt"
    >

    </v-data-table>
  </v-card>

</template>

<script setup>
import Config from "@/util/config"
import CompanyModal from "@/components/modal/CompanyModal.vue";
import store from "@/store/store";

const itemsPerPageOptions = Config.ITEMS_PER_PAGE_OPTIONS;

const headers = [
  { title: '업체명', key:'companyName' },
  { title: '사업자번호', key:'businessRegistNumb'},
  { title: '전화번호', key:'companyTel'},
  { title: '비고',  key:'remark'},
  { title: '등록일자',  key:'registDate'},
  { title: '등록자',  key:'registUserName'},
];

</script>

<script>
import companyApi from '@/api/company.js'
import store from "@/store/store";
import Config from "@/util/config";

export default {
  created() {
  },
  mounted() {
    this.getCompanys();

  },
  data() {
    return {
      search: '',     // 검색텍스트
      companys: [],   // 업체 Array
    };
  },
  methods: {
    /* company 목록 조회 */
    async getCompanys(){
      await companyApi.companys().then(res => {
        this.companys = res.data;
      });
    },

    /* 등록화면 */
    openReg(){
      this.modalMode = Config.MODAL_MODE.REG;
      store.commit('toggleModal', {key: '', mode: Config.MODAL_MODE.REG});
    },

    /* 상세조회화면 */
    openDetail(item, row) {
      store.commit('toggleModal', {key: row.item.companyId, mode: Config.MODAL_MODE.DETAIL});
    }
  }
};
</script>
