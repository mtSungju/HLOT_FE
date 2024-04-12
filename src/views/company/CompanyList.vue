<template>
  <v-main class="bg-grey-lighten-2">
    <v-container>
    
   <div>
    <v-table>
      <tr>
        <th>No</th>
        <th>회사명</th>
        <th>사업자번호</th>
        <th>전화번호</th>
        <th style="width:100px">회사주소</th>
        <th>비고</th>
      </tr>
      <tr v-for="(item, index) in items" :key="item.title">
        <td><span>{{index + 1}}</span></td>
        <td><a>{{item.companyName}}</a></td>
        <td>{{item.businessNo}}</td>
        <td><span>{{item.telNo}}</span></td>
        <td style="width:300px"><span>{{item.companyAddress}}</span></td>
        <td><span>{{item.note}}</span></td>
      </tr>
    </v-table>
  </div>
      

    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "CompanyList",
  data() {
    return {
      "name" : "sample",
       items: [
          {
            "companyName": "엠티데이타",
            "businessNo": "123-45-67890",
            "telNo": "031-438-1111",
            "companyAddress": "경기도 성남시 분당구 삼평동 618",
            "note": "비고",
          },
          {
            
            "companyName": "카카오클라우드",
            "businessNo": "123-45-67890",
            "telNo": "031-438-1111",
            "companyAddress": "경기도 성남시 분당구 삼평동 618",
            "note": "비고",
          },
          {
            
            "companyName": "NHN",
            "businessNo": "123-45-67890",
            "telNo": "031-438-1111",
            "companyAddress": "경기도 성남시 분당구 삼평동 618",
            "note": "비고",
          },
          {
            
            "companyName": "ATSYS",
            "businessNo": "123-45-67890",
            "telNo": "031-438-1111",
            "companyAddress": "경기도 성남시 분당구 삼평동 618",
            "note": "비고",          
          }
        ]
    }
  },
}
</script>
<style>
td, th {
  padding: 10px;
  border: 1px solid #ccc;
}
body {
  padding: 1rem;
}
tr{
  text-align: center;
}
</style>
