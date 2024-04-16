<template>
  <v-card class="data-table">
    <v-card-title>
      견적서 목록
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="검색"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="estimates"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn icon @click="viewItem(item)">
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        <v-btn icon @click="editItem(item)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="deleteItem(item)">
          <v-icon color="red">mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  mounted() {
    for(let i=0; i<5000; i++){
      this.estimates.push(this.estimates[0]);
    }

  },
  data() {
    return {
      search: '',
      headers: [
        { text: '견적 번호', value: 'estimateNumber' },
        { text: '고객명', value: 'customerName' },
        { text: '생성 날짜', value: 'dateCreated', sortable: false },
        { text: '총액', value: 'totalAmount', sortable: false },
        { text: '동작', value: 'actions', sortable: false }
      ],
      estimates: [
        // 샘플 데이터
        { estimateNumber: '001', customerName: '홍길동', dateCreated: '2024-04-01', totalAmount: '₩1,000,000' },
        { estimateNumber: '002', customerName: '김철수', dateCreated: '2024-04-02', totalAmount: '₩1,500,000' },
      ],
    };
  },
  methods: {
    viewItem(item) {
      // 상세보기 로직
    },
    editItem(item) {
      // 편집 로직
    },
    deleteItem(item) {
      // 삭제 로직
    }
  }
};
</script>

<style>
/* 필요에 따라 추가 스타일 */
</style>
