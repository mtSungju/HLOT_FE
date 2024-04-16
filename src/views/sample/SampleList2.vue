<template>
  <v-card class="table-container_mt">
    <div class="table-title_mt">
      견적서 목록
    </div>

    <div style="text-align : right; margin-right : 20px;">
      <v-btn color="#5865f2" @click="saveItem()">등록</v-btn>
    </div>

    <v-card-title>
      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="검색"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="estimates"
      item-value="estimateNumber"
      v-model="selected"
      :search="search"
      :loading="loading"
      select-strategy="page"
      :items-per-page-options="[
                                  {value: 10, title: '10'},
                                  {value: 25, title: '25'},
                                  {value: 50, title: '50'},
                                  {value: 100, title: '100'},
                                ]"
      class="elevation-1 table-list_mt"
      show-select
      @click:row="popUpOpen"
    >


    </v-data-table>
  </v-card>
  {{this.selected}}
</template>

<script>
export default {
  mounted() {
    

  },
  data() {
    return {
      search: '',
      headers: [
        { title: '견적 번호', key:'estimateNumber' },
        { title: '고객명', key:'customerName'},
        { title: '생성 날짜', key:'dateCreated'},
        { title: '총액',  key:'totalAmount'},
        
      ],
      estimates: [
        // 샘플 데이터
        { estimateNumber: '001', customerName: '홍길동', dateCreated: '2024-04-01', totalAmount: '₩1,000,000' },
        { estimateNumber: '002', customerName: '김철수', dateCreated: '2024-04-02', totalAmount: '₩1,500,000' },
      ],
      selected : [],
    };
  },
  methods: {
    saveItem() {
      // 등록 로직
    },
    popUpOpen(event,{item}){
      console.log("popUpOpen");
      console.log(item.estimateNumber);
      
    },
  }
};
</script>

<style>
/* 필요에 따라 추가 스타일 */
</style>
