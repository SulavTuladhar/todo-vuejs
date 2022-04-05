<template>
  <section>
      <HeaderComponent />
      <router-view />
      <FooterComponent />
  </section>
</template>

<script>
    import HeaderComponent from './../components/Common/HeadeComponent.vue'
    import FooterComponent from './../components/Common/FooterComponent.vue'

export default {
    components:{
        HeaderComponent: HeaderComponent,
        FooterComponent: FooterComponent
    }
}
</script>

<style>

</style>