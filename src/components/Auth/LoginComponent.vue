<template>
  <section class="d-flex">
    <div class="container d-flex flex-column align-items-center justify-content-center">
      <form class="d-flex flex-column">
          <label for="username"> Username </label>
          <input type="text" id="username" name="username" v-model="username" />

          <label for="password"> Password </label>
          <input type="password" id="password" name="password" v-model="password"/>

          <button class="btn btn-primary my-2" v-on:click.prevent="login"> Submit </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      username: '',
      password: ''
    }
  },
  methods:{
    login(){
      const data = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch("login", data)
        .then(()=>{
          this.$router.push('/')
          // console.log(res);
        })
    }
  }
}
</script>

<style scoped>
section{
  height: 85.4vh;
}
form{
  width: 60vw;
}

</style>