<template>
  <main>
    <div class="slide" >
      <div class="top">
        <router-link to=/recommend>
          <h2><</h2>
         </router-link>
       <div class="text">
         <input type="" name="" placeholder="输入点什么吧！">
       </div>
      </div>
      <div class="content">
         <div class="bar"><p>歌手分类 ></p></div>
         <p class="p">热门搜索</p>
        <ul>
          <li>我的消息</li>
          <li>会员中心</li>
          <li>商城</li>
          <li>游戏推荐</li>
          <li>在线听歌免流量</li>
          <li>会员中心</li>
          <li>商城</li>
          <li>游戏推荐</li>
          <li>会员中心</li>
          <li>商城</li>
          <li>游戏推荐</li>
        </ul>
      </div>
     <!--  <div class="list">
         <ol>
          <li>我的消息</li>
          <li>会员中心</li>
          <li>商城</li>
          <li>游戏推荐</li>
          <li>在线听歌免流量</li>
        </ol>
      </div> -->
      <div @click="ch('tab-container1')">
        button1
      </div>
      <div @click="ch('tab-container2')">
        button2
      </div>
      <div @click="ch('tab-container3')">
        button3
      </div>
<mt-tab-container v-model="active">
  <mt-tab-container-item id="tab-container1">
    <mt-cell v-for="n in 10" :key="n" title="tab-container 1"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container2">
    <mt-cell v-for="n in 5" :key="n" title="tab-container 2"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container3">
    <mt-cell v-for="n in 7" :key="n" title="tab-container 3"></mt-cell>
  </mt-tab-container-item>
</mt-tab-container>
    </div>
  </main>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg:[''],
      active:['']
    }
  },
  methods:{
    ch(mes){
      this.active=mes;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.slide{
    position: fixed;
    top:0;
    left:0;
    height:100%;
    width:100%;
  }
.slide .top{
width: 100%;
height: 10%;
background-color: #DF2E2E;
background-size: 100% 100%;
position: relative;
}
.slide .top h2{
  position: absolute;
  bottom: 25%;
  left: 5%;
  color: #FFFFFF;
}
.slide .top .text{
  border-bottom: 1px solid #FF6262;
  width: 85%;
  position: absolute;
  bottom: 20%;
  right: 3%;
}
.slide .top input{
    background-color: #DF2E2E;
    display: block;
    width: 80%;
    border: none;
    resize: none;
    overflow: auto;
    outline:none;
    padding: 5px 0px;
    word-wrap: break-word;
}
.slide .top input::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: #D69494;
        /* placeholder字体大小  */
         font-size: 12px;
         /* placeholder位置  */
        /* text-align: right; */
     }
.slide .content{
  background-color: #fff;
  height: 40%;
}
.slide .content .bar{
    width: 100%;
    height: 12%;
    border-bottom: 1px solid #C4C4C4;
    text-align: center;
}
.slide .content .bar p{
  padding-top: 2%;
  font-size: 13px;
}
.slide .content .p{
  margin: 3% 2%;
}
.slide .contentn ul {
  margin: 0 auto;
  border: 1px solid;

}
.slide .content ul li{
  float: left;
  margin: 1% 2%;
  border: 1px solid #8B8A8A;
  border-radius: 50px;
  padding: 1% 3%;
  text-align: center;
  font-size: 13px;
}
.slide .list{
  height: 60%;
  background-color: #fff;
}
.slide .list ol{
  
}
.slide .list ol li{
  padding: 3% 0;
  margin-left: 5%;
  border-bottom: 1px solid #CCCACA;
}
</style>
