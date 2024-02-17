<template>
  <h1>
    Jobs : 
  </h1>
  <div v-for="job in jobs " :key="job.id">

    <router-link :to="{name : 'JobDetails' , params: {id: job.id} }">
      <h2>{{ job.title }}</h2>
      </router-link> 
     
   
  </div>
</template>

<script>
export default {
  name:'Jobs',
data(){
    return{
        jobs:[
            {title: 'didi java project' , id: 1 , detail: 'Lorem'},
            {title: 'didi c++ project' , id: 2 , detail: 'Lorem'},
            {title: 'didi vuejs project' , id: 3 , detail: 'Lorem'}

        ]
    }
} 
}
</script>

<style>

</style>