<template>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li v-for="(item, index) in links" :key="index"  class="nav-item active">
                <router-link class="dropdown-item" :to="item.to">
                    {{ item.name }}
                </router-link>
                </li>
                </ul>
                <div class="form-inline my-2 my-lg-0">
                    <div class="dropdown">
                     <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                     <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li>
                        <router-link class="dropdown-item" to="/about">
                            Profile
                        </router-link></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#" @click="performLogout()" >Sign out</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            </nav>
</template>
<script>
export default {
    data() {
        return {
            links: [
                {
                    name:'dashboard', to:'/dashboard'
                },
                {
                    name:'profile', to:'/about'
                }
            ]
        }
    },
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

<style>

</style>