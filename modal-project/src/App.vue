<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1>{{tite}}</h1>
  <input type="text" ref="name">
  <button @click="handelClick"> click me </button>

 <div v-if="showModale">
  <Modal   theme="sale" @close="changeModal" >   
            <h1> hello </h1>
            <h2>sign up for the giveaway</h2>
            <p>modal content </p>
            <template v-slot:links >
              <a href="#">signup now</a>
              <a href="#">more info</a>
            </template>
            </Modal>
 </div>
 <button @click="changeModal">open modal</button>
</template>

<script> 

import Modal from './components/Modal.vue'

export default {
  name: 'App' ,
  components:{Modal},
  data(){
    return{
      tite: 'my first vue app',
       
       showModale: false 
    }
  }, methods : { 
    handelClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    changeModal(){
      this.showModale= !this.showModale
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom:  1px solid  #ddd;
   display: inline-block ;
   padding-bottom: 10px; 

}
</style>
