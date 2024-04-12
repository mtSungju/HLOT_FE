<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-avatar
        class="me-4 "
        color="grey-darken-1"
        size="32"
      ></v-avatar>

      <v-btn
        v-for="link in links"
        :key="link.path"
        :text="link.name"
        variant="text"
        @click="this.$router.push(link.path)"
      ></v-btn>

      <v-spacer></v-spacer>
      <v-responsive max-width="130">
        <v-btn variant="outlined"
               color="blue"
               class="mx-2"
               @click="search"
        >로그인</v-btn>
      </v-responsive>

      <v-responsive max-width="130">
        <v-btn variant="outlined"
               color="blue"
               class="mx-2"
               @click="search"
        >로그아웃</v-btn>
      </v-responsive>

    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      links: [
        { name: 'HOME',      path: '/' },
        { name: '업체관리',    path: '/company/companyList' },
        { name: '견적서관리',   path: '/estimate/estimateList' },
        { name: '프로젝트관리',  path: '/project/projectList' },
        { name: '샘플',         path: '/sample/sampleList' }, 
        { name: '샘플2',         path: '/sample/sampleList2' }, 
      ]

    }
  },
}
</script>
