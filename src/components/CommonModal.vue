<template>
  <div class="modal-overlay">

    <div class="modal">

      <div class="modal-header" style="text-align: right;">
        <div class="close" @click="store.commit('toggleModal')"/>
      </div>

      <div class="modal-title">
        HELLO
      </div>

      <div class="modal-content">
        asdf]asldfp<br>
        afkadsokfs
      </div>

    </div>

  </div>
</template>

<script>
import store from "@/store/store";

export default {
  name: "CommonModal",
  computed: {
    store() {
      return store
    }
  },
  props: ['data'],
  methods:{
  }
}
</script>

<style scoped>
  body {
    margin: 0
  }
  div {
    box-sizing: border-box;
  }
  .modal-overlay {
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    padding: 20px;
  }
  .modal {
    width: 70%; background: white;
    border-radius: 8px;
    padding: 20px;
    margin-top: 5%;
    margin-left: 14%;
  }

  .modal-title{
    text-align: center;
    font-size: 20px;
    background-color: black;
    color: white;
  }
  .modal-content{
    min-height: 500px;
  }
  .close {
    cursor: pointer;
    display:inline-block;
    *display:inline;
  }
  .close:after {
    display: inline-block;
    content: "\00d7";
    font-size: 20pt;
  }
</style>
