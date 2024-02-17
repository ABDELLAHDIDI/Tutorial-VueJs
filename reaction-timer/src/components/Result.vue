<template>
  <div class="result" >
    <h2>reaction time {{ score }} ms  </h2>
    <h3>Rank : {{ rank }}</h3> 
  </div>
</template>

<script>
export default {
props:['score' ] , 

data(){
    return{
        rank : null 
    }
},
mounted(){
    if(this.score<100) this.rank="Speed of light "
    else if(this.score<150) this.rank="Speed of sound "
    else if(this.score<200) this.rank="Speed of horse "
    else this.rank="Speed of human "
}
 
}
</script>

<style>
 
</style>