<template>
    <div id="modal-wrap" >
    <div id="modal-container" style="width:900px;">

    <!--  모달창 content  -->
    <!-- 동적 할당할 부분 -->
    <v-table>
      <tbody>
        <tr>
          <th>이름</th>
          <td><input type="text"  v-model="this.name" style="border : solid" placeholder="이름"/></td>

        </tr>
        <tr>
          <th>부서</th>
          <td><input type="text" v-model="this.department" style="border : solid" placeholder="부서"/></td>
        </tr>
        <tr>
          <th>직책</th>
          <td><input type="text" v-model="this.position" style="border : solid" placeholder="직책"/></td>
        </tr>
        <tr>
          <th>전화번호</th>
          <td><input type="tel" v-model="this.tel" style="border : solid" placeholder="전화번호"/></td>
        </tr>
      </tbody>
    </v-table>

    <hr>
    <div class="modal-btn" style="text-align:center; margin-top : 10px;">
      <v-btn @click="close()" style="margin-right : 10px">닫기</v-btn>
      <v-btn @click="save()">저장</v-btn>
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

  },
  data(){
    return{
        modalCheck: false,
        name : '',
        department : '',
        position : '',
        tel : '',
    }
  },
  methods:{
    close(){
        console.log("자식");
        this.$emit('close');
    },
    save(){

    },

      hypenTel(target){
      target.value = target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
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
/* modal or popup */
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
