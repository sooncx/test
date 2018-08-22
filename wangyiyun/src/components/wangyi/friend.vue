<template>
  <main>
   
<ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in list">{{ item }}</li></ul>


  </main>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg:['推荐','朋友','电台'],
      navRouter:['my','music','dynamic'],
      cur:false,
      list:['']
    }
  },
  methods:{
    get(){
      this.cur=true;
    },
    loadMore() {
  this.loading = true;
  setTimeout(() => {
    let last = this.list[this.list.length - 1];
    for (let i = 1; i <= 10; i++) {
      this.list.push(last + i);
    }
    this.loading = false;
  }, 2500);
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main{
  height: 100px;
  background-color: #fff;
  margin-top: -60px;
}
</style>
