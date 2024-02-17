<template>
  <form @submit.prevent="handelSubmit" > 
    <label >Email :</label>
    <input type="email" required v-model="email"> 
    <br/>
    <label >Password :</label>
    <input type="password" required v-model="pwd">
    <p v-if="pwdError">{{ pwdError }}</p>
    <br/>
    <label >Role :</label>
    <select v-model="role">
    <option value="developer"> Web developer</option>
    <option value="designer"> Web Designer</option>
    </select> 
    <br/>
    <label > Skills : </label>
    <input type="text" v-model="tempSkill" @keyup="addSkill">

    <div class="terms" >
        <input type="checkbox" required v-model="therms">
        <label>Accept Conditions and Policy</label>
    </div>
    <input type="checkbox"  value="didi" v-model="names">
        <label>didi</label>
        <br/>
        <input type="checkbox"  value="abdellah" v-model="names">
        <label>abdellah</label>
        <br/>
        <input type="checkbox"  value="ana" v-model="names">
        <label>ana</label>

        <div class="submit">
            <button>Create an account </button>
        </div>
  </form>
 
  <p>Email: {{ email }}</p>
  <p>Password: {{ pwd }}</p>
    <p>Role : {{ role }}</p>
    <p v-if="therms">Therms are accepted</p>
    <p v-else>Therms are not  accepted</p>
    <label > Names : </label>
            <div v-for="name in names " :key="name"> 
        <p>{{ name }}</p>
            </div>
            <div v-for="skill in skills " :key="skill"> 
        <p @click="deleteSkill(skill)">{{ skill }}</p>
            </div>

      
</template>

<script>
export default {
data()
{
return{
    email:'' , 
pwd:'',
role:'developer'
, therms: true ,
names:[],
tempSkill:'',
skills:[],
pwdError:''
}
},
methods:
{
    addSkill(e){
       if(e.key===',' ) {
        if(!this.skills.includes(this.tempSkill))  {
        this.skills.push(this.tempSkill)
        this.tempSkill=''
    }
       }
    },
    deleteSkill(skill){  
        this.skills = this.skills.filter((itemSkill)=>{
            return itemSkill !== skill
        })
    },
    handelSubmit(){
        //validate pwd
       this.pwdError=this.pwd.length > 5 
        ?  '' : 'password must be 5 letters at least'
    }
}
}
</script>

<style>

</style>