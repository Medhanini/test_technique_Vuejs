<template>
  <div >
   <TheAuth :islongin="true" />
  </div>
</template>

<script>

export default {
  name: 'HomeView',
    components:{
      TheAuth:() => import('@/components/TheAuth.vue'),
    }
}
</script>
