<template>
  <section class="d-flex">
    <div class="container d-flex align-items-center justify-content-center">
      <form class="d-flex flex-column p-5">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" v-model="username">
      
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="email">

        <label for="password">Password</label>
        <input type="password" id="password" name="password" v-model="password">
      
        <button class="btn btn-primary my-2" v-on:click.prevent="register"> Register </button>
      </form>
    </div>
  </section>
</template>

<script>
import httpClient from '@/API/httpClient';
export default {
  data(){
    return{
      username: '',
      email: '',
      password: ''
    }
  },
  methods:{
    register(){
      const data = {
        username: this.username,
        password: this.password,
        email: this.email
      }
      httpClient.POST('/auth/register', data)
        .then(res=>{
          console.log('response is >>',res);

        })
        .catch(err =>{
          console.log('errror is >>', err);
        })
      console.log('clicked');
    }
  },  
}
</script>

<style scoped>
section{
  height: 85.5vh;
}
input{
  width: 60vw;
}

</style>