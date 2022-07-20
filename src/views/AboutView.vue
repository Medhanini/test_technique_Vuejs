<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="performLogout()" > logout </button>
  </div>
</template>
<script>
export default {
  methods: {
     performLogout(){
        this.$store.dispatch('performLogoutAction')
        .then(res=>{
        this.$router.push('/',res)
        })
        .catch(err=>{
          console.log(err)
        })
      }
  }
}
</script>