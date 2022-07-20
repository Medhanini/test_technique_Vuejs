<template>
  <div>
      <div class="p-t-10">
    <h2 class="title">Registration Info</h2>
      </div>
    <form>
        <div v-if="currentStep == 0" >
            <div class="input-group">
                <input class="input--style-3" type="text" v-model="form.login"  placeholder="Login" name="name">
            </div>
            <div class="input-group">
                <input class="input--style-3" type="password" v-model="form.password"  placeholder="Password" name="birthday">
            </div>
        
        </div>
        <div v-if="currentStep == 1" >
            <div class="input-group">
                <input class="input--style-3" type="text" v-model="form.firstName"  placeholder="Nom" name="name">
            </div>
            <div class="input-group">
                <input class="input--style-3" type="text" v-model="form.lastName"  placeholder="Prénom" name="name">
            </div>
            <div class="input-group">
                <input class="input--style-3" type="text" v-model="form.email"  placeholder="Email" name="name">
            </div>
            <div class="input-group">
                <input class="input--style-3" type="text" v-model="form.adress"  placeholder="Adresse" name="name">
            </div>
            <div class="input-group">
                <input class="input--style-3" type="text" v-model="form.phoneNumber"  placeholder="Téléphone" name="name">
            </div>
            <div class="p-t-10">
                <button class="btn btn--pill btn--green" type="submit">Submit</button>
            </div>
        </div>
       
    </form>

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
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentStep: 0,
            errors: [],
            isError: false,
            form: {
                login:'',
                password:'',
                firstName: '',
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
            {this.currentStep++,this.error= !this.error}
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
    }
}
</script>

<style>

</style>