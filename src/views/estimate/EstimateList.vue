
<!-- 작성되어있던 기본 코드
<template>
  <v-main class="bg-grey-lighten-2">
    <v-container>
      EstimateList!!
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "EstimateList"
}
</script> -->

<template>
  <v-main class="bg-grey-lighten-2">
    <v-container class="elevation-1 white pa-5" fluid>
      <v-row>
        <v-col cols="12" class="d-flex justify-space-between align-center">
          <h1 class="display-1">건강보험심사평가원 망연계 시스템 유지보수건</h1>
          <v-btn color="blue darken-2" dark large @click="printEstimate">인쇄하기</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card outlined tile>
            <v-card-title class="blue-grey lighten-2 white--text">고객 정보</v-card-title>
            <v-card-text>
              <v-simple-table>
                <tbody>
                  <tr>
                    <td class="font-weight-bold">회사명</td>
                    <td>한싹</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">담당자</td>
                    <td>문호원 상무</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">연락처</td>
                    <td>010-8383-5984</td>
                  </tr>
                  <tr>
                    <td class="font-weight-bold">이메일</td>
                    <td>mhw@hanssak.co.kr</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title class="blue-grey lighten-2 white--text">견적 내역</v-card-title>
            <v-card-text>
              <v-simple-table dense>
                <thead class="blue-grey lighten-3">
                  <tr>
                    <th>품목</th>
                    <th>수량</th>
                    <th>단가</th>
                    <th>합계</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in items" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.total }}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "EstimateList",
  data() {
    return {
      items: [
        { name: "망연계시스템", quantity: 9, price: 20000, total: 200000 },
        { name: "통합관리", quantity: 2, price: 300000, total: 36000000 },
        { name: "상품 B", quantity: 3, price: 15000, total: 45000 }
      ]
    };
  },
  methods: {
    printEstimate() {
      window.print();
    }
  }
};
</script>

<style>
td, th {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center; /* 이 설정을 추가하여 가운데 정렬 */
}
body {
  padding: 1rem;
}
</style>
