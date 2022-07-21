<template>
<div>
    <nav class="d-md-none navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li
                v-for="(item , index) in links"
                :key="index"
                class="nav-item text-decoration-none">
                <router-link 
                class="text-decoration-none links"
                :to="item.to">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
        <hr>
        <div class="dropdown pb-4">
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
<style lang="scss">
.links{
    color: white;
    padding: 4px 20px 4px 20px ;
    // border: 1px solid white;
    height: 20px;
    text-transform: capitalize;
    font-size: 25px;
    &:hover{
        background: white;
        color: #000
    };
}
</style>