<template>
  <v-main class="bg-grey-lighten-2">
    <v-container>
      <v-row style="margin-top: 50px;">
        <v-col>
          <div class="d-flex flex-row-reverse mb-6">
            <v-btn class="ma-2" color="red" variant="tonal">
              삭 제
            </v-btn>
            <v-btn class="ma-2" color="blue" variant="tonal">
              수 정
            </v-btn>
            <v-btn class="ma-2" color="green" variant="tonal">
              등 록
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "SampleList"
}
</script>
