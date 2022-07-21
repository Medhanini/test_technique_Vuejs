<template>
  <div>
      <div class="p-t-10">
    <h2 class="title"> lOG-IN </h2>
      </div>
        <div class="input-group">
            <input class="input--style-3" type="text" v-model="form.login"  placeholder="Login" name="name">
        </div>
        <div class="input-group">
            <input class="input--style-3" type="password" v-model="form.password"  placeholder="Password" name="birthday">
        </div>
        <div class="p-t-10">
            <button class="btn btn--pill btn--green" type="submit" @click="Submit()" >Submit</button>
        </div>
        <div class="p-t-20 float-right" >
            <router-link to="/register" >
                s'inscrire
            </router-link>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentStep: 0,
            form: {
                login:'',
                password:'',
            }
        }
    },
    methods: {
         performLogin(){
            this.$store.dispatch('performLoginAction',{
            email:this.form.login,
            password:this.form.password
            }).then(  res => {
            this.isLoding = res
            this.$router.push('/about')
            }).catch( err => {
                console.log(err.message)
                this.$notify({
                group: 'foo',
                title: err.message,
                message: 'le champ login est obligatoiry',
                type: 'error',
                duration: 2000,
              });
        
            })
        },
        Submit() {
            if(this.form.login && this.form.password)
            {
                this.performLogin()
            }
            if(!this.form.login){
            this.$notify({
                group: 'foo',
                title: 'le champ login est obligatoir',
                message: 'le champ login est obligatoiry',
                type: 'error',
                duration: 2000,
              });
            }
            if(!this.form.password){
                this.$notify({
                group: 'foo',
                title: 'le champ password est obligatoir',
                message: 'le champ password est obligatoir',
                type: 'error',
                duration: 2000,
              });
            }
        },
    }
}
</script>

<style>

</style>