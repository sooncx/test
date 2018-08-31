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
      msg:['推荐','现场','翻唱','听BGM','MV','舞蹈','ACG音乐','演奏'],
      router:['tuijian','xianchang','fanchang','BGM','MV2','wudao','ACG','yanzou'],
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
    overflow-x: scroll;
   display: flex;
   color: #EDBDBD;
   background-color: #DF2E2E;
   }
   .foot::-webkit-scrollbar {
        display: none;
    }
   .foot ul{
    display: flex;
    margin: 5px auto;
   }
   .foot ul li{
    width: 70px;
    margin: 0 1px;
    text-align: center;
    font-size: 13px;
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
