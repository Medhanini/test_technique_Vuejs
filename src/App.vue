<template>
  <div id="app"><div class="container-fluid">
    <div class="row flex-nowrap">
        <div v-if="loggedIn" class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <TheSideBar />
        </div>
        <div class="col ">
            
        <router-view/>
        </div>
    </div>
</div>
  </div>
</template>
<script>
export default {
  components:{
TheSideBar:() => import('@/components/TheSideBar.vue'),
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
