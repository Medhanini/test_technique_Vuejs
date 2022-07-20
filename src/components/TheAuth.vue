<template>
  <div class="" >
         <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w780">
            <div class="card card-3">
                <div class="card-heading">
                    <notifications group="foo" />
                </div>
                <div class="card-body">
                    <TheLoginForm v-if="islongin" />
                    <TheRgisterForm v-else />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        islongin: {
            type: Boolean
        }
    },
  components:{
    TheRgisterForm:() => import('@/components/TheRgisterForm.vue'),
    TheLoginForm:() => import('@/components/TheLoginForm.vue'),
    }
}
</script>

<style>

</style>