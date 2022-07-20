<template>
  <div >
   <TheAuth :islongin="false" />
  </div>
</template>

<script>

export default {
  name: 'RegisterView',
    components:{
      TheAuth:() => import('@/components/TheAuth.vue'),
    }
}
</script>
