<template>
  
  <div>
    <a v-for="a in 메뉴들" :key="a">{{a}}</a>
  </div>
  
  <div>
   <h1 @click="click" ref="msg">{{message}}</h1>
   <input type="text" :value="message" >
  </div>
  
  <div class="black-bg" v-if="status == ture">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세 페이지 내용임</p>
      <button @click="status=false">닫기</button>
    </div>
  </div>
  
 <div id="example">
  <p>원본 메시지: {{ message }}</p>
  <p>역순으로 표시한 메시지: {{ reversedMessage }}</p>
</div>

  <div>
    <img src="./assets/room1.png">
    <h4 @click="this.status = ture">{{product[0].content}}</h4>
    <p>{{product[0].price}}</p>
    <button @click="clickButton1()">허위매물신고</button> <span>신고수 : {{신고수[0]}}</span>
  </div>
  <br>
  <div>
    <img src="./assets/room2.png">
    <h4>{{product[1].content}}</h4>
    <p>{{product[1].price}}</p>
    <button>허위매물신고</button> <span>신고수 : {{신고수[1]}}</span>
  </div>
  <br>
  <div>
    <img src="./assets/room3.png">
    <h4>{{product[2].content}}</h4>
    <p>{{product[2].price}}</p>
    <button @click="clickButton2()" ref="click_btn">허위매물신고</button> <span>신고수 : {{신고수[2]}}</span>
  </div>


  <div v-for="(item,i) in product" :key="i">
    <img :src="item.image">
    <h4>{{item.content}}</h4>
    <p>{{item.price}}</p>
  </div> 

  <!-- <div>
    <h4 v-for=" (item ,i) in product" :key="i">{{item}}</h4>
  </div> -->
</template>

<script>


import product from './oneroom';

export default {
  name: 'App',

  data(){
    return{
      메뉴들 : ['home', 'shop', 'about'],
      product : product,
      신고수 : [0,0,0],
      status : false,
      message : '안녕하세요',
      
    }

  },

   computed : {
    reversedMessage(){
      return this.message.split('').reverse().join('');
    },
    
  },

  

  methods : {
    clickButton1: function(){
      this.신고수[0]++

      
      console.log("!!!!!!!");
    },
    clickButton2 : function(){
      
      this.신고수[2]++
      console.log("!!!!!!!"); 
    },

    click(){
      this.message  = "바뀜";

    }

  }
}

</script>

<style>
  body {
    margin: 0
  }

  div{
    box-sizing: border-box;
  }

  .black-bg{
    widows: 100%; 
    background: black;
    position: fixed; padding: 20px;
  }

  
  .white-bg{
    widows: 100%; background: white;
    border-radius: 8px;
    padding: 20px;
  }
</style>
