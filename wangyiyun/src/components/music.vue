<template>
  <main>
    music
  </main>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg:['推荐','朋友','电台'],
      navRouter:['recommend','friend','radio'],
      cur:0
    }
  },
  methods:{
    get(index){
      this.cur=index;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
