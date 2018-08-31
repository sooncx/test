<template>
  <main>
    <div class="con">
      <div class="btn_left" @click="left">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xuanxiang"></use>
          </svg>
      </div>
      <div class="nav">
         <li>
         <!--  因为router[index]是个变量，所以用:to,如果是常量，用
          to，如to/music -->
         <router-link :to="'/'+router[index]" v-for="(v,index) in msg" :key="index" :class="{class1:index==cur}" >
           <svg class="icon" aria-hidden="true">
            <use xlink :href="v"></use>
          </svg>
         </router-link>
         </li>
      </div>
       <router-link to=/slide_right>
          <div class="btn_right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
      </div>
         </router-link>
      <slideleft v-if="change.l" :flag="change"></slideleft>
    </div>


  </main>
</template>

<script>
  import vleft from './slide/slide-left.vue';
export default {
  name: 'index',
  data () {
    return {
      msg:['#icon-yinyue','#icon-netease','#icon-MV-'],
      router:['music','wangyi','mv'],
      cur:0,
      change:{
          l:false,
        }
    }
  },
  methods:{
    left(){
      this.change.l=true;
    },
  },
  components:{
      'slideleft':vleft
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.icon {
   width: 1.5em; height: 1.6em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
   color: #F3F3F3;
   margin: 10px;
}
*{
    padding: 0;
    margin:0;
    list-style: none;
  }
   .con{
    height: 50px;
    background-color: #DF2E2E;
   }
   .nav,.con{
    display: flex;
   }
    .nav{
    width: 50%;
    margin: 10px auto;
   }

   .nav svg{
    width: 33.3%;
    box-sizing: border-box;
    margin: 2px 0px;
   }
   .btn_right,.btn_left{
    margin: 2px 5px;
   }
</style>
