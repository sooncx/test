<template>
  <main>
  <div class="foot">
      <ul>
       <li v-for="(v,index) in msg" @click="get(index)">
        <span :class="{class1:index==cur}" @click="ch('id'+index)">{{v}}</span>
      </li>
      </ul>
    </div>
       <mt-tab-container v-model="active">
            <mt-tab-container-item id="id0">
               <v-tuijian></v-tuijian>
            </mt-tab-container-item>
             <mt-tab-container-item id="id1">
                <v-xianchang></v-xianchang>
            </mt-tab-container-item>
             <mt-tab-container-item id="id2">
                <v-fanchang></v-fanchang>
            </mt-tab-container-item>
             <mt-tab-container-item id="id3">
                <v-BGM></v-BGM>
            </mt-tab-container-item>
             <mt-tab-container-item id="id4">
                <v-MV2></v-MV2>
            </mt-tab-container-item>
             <mt-tab-container-item id="id5">
                <v-wudao></v-wudao>
            </mt-tab-container-item>
             <mt-tab-container-item id="id6">
                <v-ACG></v-ACG>
            </mt-tab-container-item>
             <mt-tab-container-item id="id7">
                <v-yanzou></v-yanzou>
            </mt-tab-container-item>
        </mt-tab-container>


       <router-view></router-view>
  </main>
</template>

<script>
  import tuijian from './MV/tuijian.vue';
  import xianchang from './MV/xianchang.vue';
  import fanchang from './MV/fanchang.vue';
  import MV2 from './MV/MV2.vue';
  import wudao from './MV/wudao.vue';
  import ACG from './MV/ACG.vue';
  import yanzou from './MV/yanzou.vue';
  import BGM from './MV/BGM.vue';
export default {
  name: 'index',
  data () {
    return {
      msg:['推荐','现场','翻唱','听BGM','MV','舞蹈','ACG音乐','演奏'],
      router:['tuijian','xianchang','fanchang','BGM','MV2','wudao','ACG','yanzou'],
      cur:0,
      active:[''],
    }
  },
  components:{
        'v-tuijian':tuijian,
        'v-xianchang':xianchang,
        'v-fanchang':fanchang,
        'v-MV2':MV2,
        'v-wudao':wudao,
        'v-yanzou':yanzou,
        'v-ACG':ACG,
        'v-BGM':BGM,
    },
  methods:{
    get(index){
      this.cur=index;
    },
     ch(mes){
      this.active=mes;
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
