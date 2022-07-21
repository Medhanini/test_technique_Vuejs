<template>
  <div class="about">
    <div class="row" >
      <div class="col" >
        <TheUserInfo :data="user" />
      </div>
    </div>    
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  components:{
      TheUserInfo:() => import('@/components/TheUserInfo.vue'),
    },
  computed: {
    ...mapState({
          user: state => state.auth.user,
    })
    },
}
</script>