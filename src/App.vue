<template>
  <div id="app">
    <div  v-if="loggedIn" >
      <TheNavBar />
      <TheBreadCrumb />
    </div>
    <router-view/>
</div>
</template>
<script>
export default {
  components:{
  TheNavBar:() => import('@/components/TheNavBar.vue'),
  TheBreadCrumb:() => import('@/components/TheBreadCrumb.vue'),
  },
  computed:{
      loggedIn(){
        return this.$store.getters.get_loggedIn;
      }
    },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
