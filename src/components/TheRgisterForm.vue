<template>
  <div>
      <div class="p-t-10">
    <h2 class="title">Registration Info</h2>
      </div>
        <div v-if="currentStep == 0" >
            <div class="input-group">
                <input class="input--style-3" type="text" v-model="form.login"  placeholder="Login">
            </div>
            <div class="input-group">
                <input class="input--style-3" type="password" v-model="form.password"  placeholder="Password">
            </div>
        
        </div>
        <div v-if="currentStep == 1" >
            <div class="input-group">
                <input class="input--style-3" type="text" v-model="form.name"  placeholder="Nom">
            </div>
            <div class="input-group">
                <input class="input--style-3" type="text" v-model="form.lastName"  placeholder="Prénom">
            </div>
            <div class="input-group">
                <input class="input--style-3" type="email" v-model="form.email"  placeholder="Email">
            </div>
            <div class="input-group">
                <input class="input--style-3" type="text" v-model="form.adress"  placeholder="Adresse">
            </div>
            <div class="input-group">
                <input class="input--style-3" type="text" v-model="form.phoneNumber"  placeholder="Téléphone">
            </div>
            <div class="p-t-10">
                <button class="btn btn--pill btn--green" type="submit" @click="performRegister()">Submit</button>
            </div>
        </div>
       

    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
            <li class="page-item" :class="{disabled : currentStep == 0}">
            <a class="page-link" href="#" @click="prevStep()">Précédent</a>
            </li>
            <li class="page-item" :class="{disabled : currentStep == 1}">
            <a class="page-link " href="#"  @click="nextSept()">Suivant</a>
            </li>
        </ul>
    </nav>
    <div class="p-t-20 float-right" >
            <router-link to="/" >
                Vous avez déjas un compte ?
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
                name: '',
                lastName: '',
                email: '',
                adress: '',
                phoneNumber: '',
            }
        }
    },
    methods: {
        nextSept() {
            if(this.form.login && this.form.password)
            {this.currentStep++}
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
        prevStep() {
            this.currentStep--
        },
        performRegister(){
            if(this.form.name && this.form.lastName && this.form.email && this.form.adress && this.form.phoneNumber)
            {
                
                this.$store.dispatch('performRegisterAction',
                this.form
                ).then( res => {
                this.$router.push('/about',res)
                }).catch( err => {
                    console.log(err.message)
                    this.error = "There was error during Regestration process"
                })

            }
            if(!this.form.name){
            this.$notify({
                group: 'foo',
                title: 'le champ Nom est obligatoir',
                message: 'le champ Nom est obligatoiry',
                type: 'error',
                duration: 2000,
              });
            }
            if(!this.form.lastName){
            this.$notify({
                group: 'foo',
                title: 'le champ Prénom est obligatoir',
                message: 'le champ Prénom est obligatoiry',
                type: 'error',
                duration: 2000,
              });
            }
            if(!this.form.email){
                this.$notify({
                group: 'foo',
                title: 'le champ email est obligatoir',
                message: 'le champ email est obligatoir',
                type: 'error',
                duration: 2000,
              });
            }
            if(!this.form.adress){
            this.$notify({
                group: 'foo',
                title: 'le champ Adresse est obligatoir',
                message: 'le champ Adresse est obligatoiry',
                type: 'error',
                duration: 2000,
              });
            }
            if(!this.form.phoneNumber){
                this.$notify({
                group: 'foo',
                title: 'le champ Téléphone est obligatoir',
                message: 'le champ Téléphone est obligatoir',
                type: 'error',
                duration: 2000,
              });
            }
        }
    }
}
</script>

<style>

</style>