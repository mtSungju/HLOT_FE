<template>
    <div id="modal-wrap">
    <div id="modal-container">

    <!--  모달창 content  -->
    <!-- 동적 할당할 부분 -->



    <div class="modal-btn">
      <v-btn @click="modalOpen()">닫기</v-btn>
      <v-btn @click="modalOpen()">저장</v-btn>
    </div>

  </div>
</div>
</template>

<script>


export default {
  name: "Popup",
  props: {
    userName : '',
  },
  mounted() {
    console.log(this.userName);
  },
  data(){
    return{
        modalCheck: false,
    }
  },
  methods:{
    modalOpen(){
        console.log("자식");
        this.$emit('close');

    }
  },
}
</script>

<style>
    /* dimmed */
#modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
/* store or popup */
#modal-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
