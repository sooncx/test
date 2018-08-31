<template>
  <main>
    <div class="foot">
      <ul>
       <li v-for="(v,index) in msg" @click="get(index)">
        <router-link :to="'/'+router[index]" :class="{class1:index==cur}">{{v}}</router-link>
      </li>
      </ul>
    </div>
       <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg:['推荐','朋友','电台'],
      router:['recommend','friend','radio'],
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


<style scoped>

*{
    padding: 0;
    margin:0;
    list-style: none;
  }
   main{
    height: 40px;
    margin-top: -1px;
   }
   .foot{
   display: flex;
   color: #EDBDBD;
   background-color: #DF2E2E;
  padding-bottom: 70px;
   }
   .foot ul{
    display: flex;
    width: 90%;
    margin: 5px auto;
   }
   .foot ul li{
     margin: 0 auto;
    box-sizing: border-box;
    font-size: 14px;
   }
   .foot *{
    text-decoration: none;
    color: #DCC7C7;
    padding-bottom: 3px;
   }
   .class1{
     border-bottom: 2px solid #FFFFFF;
     color: #FFFFFF;
   }

</style>
