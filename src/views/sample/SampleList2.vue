<template>
  <v-card class="table-container_mt">
    <div class="table-title_mt">
      견적서 목록
    </div>

    <v-card-title>
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

    >
    <!--actions="{ item }"-->
       <template v-slot:item.actions="{ item }">
        <v-btn  @click="viewItem(item)" style="background-color : gray; margin-right:10px;">
          수정
        </v-btn>

        <v-btn @click="deleteItem(item)" style="background-color : red;">
          삭제
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
