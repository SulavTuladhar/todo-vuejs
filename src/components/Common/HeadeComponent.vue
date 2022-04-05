<template>
  <nav>
    <div class="container my-2 d-flex align-items-center justify-content-between">
      <h3> To-Do </h3>
      <div v-if='!this.loggedIn || this.$route.path == "/login"' class="d-flex">
        <h6 class="">login</h6>
        <h6 class="px-2">Register</h6>
      </div>
      <div v-if="this.loggedIn || !this.$route.path == '/login'" class="d-flex align-items-center">
        <h6 class="mt-2 mx-2"> Hello, {{this.username}} </h6>
        <button class="btn btn-primary" v-on:click="logout"> Logout </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      loggedIn: '',
      username: ''
    }
  },
  created(){
    if(localStorage == null){
      this.loggedIn = '',
      this.username = ''
      console.log('yeta');
    }
    this.loggedIn = localStorage.getItem('token')
    this.username = localStorage.getItem('user')
    console.log('yeta ', this.loggedIn);
    console.log('yeata ', this.username);
  },
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push('/login')
       console.log('in logout>> ',this.loggedIn);
    console.log('in logout>> ',this.username);
    }
  }
}
</script>

<style>

</style>