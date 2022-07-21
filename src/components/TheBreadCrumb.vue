<template>
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <router-link to="/">
              Home
            </router-link>
            </li>
            <li class="breadcrumb-item"
             v-for="(value , index) in crumbs" 
              :key="index" 
               
            >
            <router-link :to="value.url">
              {{ value.name }}
            </router-link>
            </li>
          </ol>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
 computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.substring(1).split('/')
      const crumbs = []
      let path = ''
      params.forEach((param) => {
        path = `${path}/${param}`
        let data = { name: param , url : path }
        crumbs.push(data)
      })
      return crumbs
    },
  },
}
</script>

<style>

</style>