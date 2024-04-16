<template>
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

    <v-data-table
      :headers="headers"
      :items="companySampleData"
      item-value="companyId"
      v-model="selected"
      :search="search"
      :items-per-page-options="itemsPerPageOptions"
      class="elevation-1 table-list_mt"
      show-select
    >

    </v-data-table>
  </v-card>

</template>

<script setup>
const itemsPerPageOptions = [
                              {value: 10, title: '10'},
                              {value: 25, title: '25'},
                              {value: 50, title: '50'},
                              {value: 100, title: '100'},
                            ];

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
import api from '@/util/api.js'

export default {
  created() {
  },
  mounted() {

    /* 업체명, 사업자번호, 전화번호, 비고, 등록일자, 등록자 */
    this.companySampleData = api.companySampleData();
  },
  data() {
    return {
      search: '',
      companySampleData: [],
      selected : [],
    };
  },
  methods: {
  }
};
</script>
