<template>
  <main>
<div class="cyc">
  <mt-swipe :auto="4000">
  <mt-swipe-item v-for="(v,index) in msg3" :key="index">
    <li><img :src="v.src" alt=""></li>
  </mt-swipe-item>
</mt-swipe>
</div>
 <div class="list">
      <ul>
        <li><img src="../../assets/images/fm.png" alt=""><p>{{msg2[0]}}</p></li>
        <li><img src="../../assets/images/tuijian.png" alt=""><p>{{msg2[1]}}</p></li>
        <li><img src="../../assets/images/list.png" alt=""><p>{{msg2[2]}}</p></li>
        <li><img src="../../assets/images/rank.png" alt=""><p>{{msg2[3]}}</p></li>
      </ul>
    </div>

     <div class="content">
      <div v-for="i in 3" :key="i">
        <h3>推荐歌单 ></h3>
      <ul v-for="i in 1" :key="i">
        <li v-for="(v,index) in msg4" :key="index"><img :src="v.src" alt=""><p>{{v.txt}}</p></li>
      </ul>
      </div>
    </div>
<div  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <div v-for="item in list">
    <div class="conts" v-for="(v,index) in msg5" :key="index">
      <div class="png">
        <img :src="v.src" alt="">
      </div>
      <div class="top">
        <img src="../../assets/images/这是一个歌单.png" alt="">
        <img src="../../assets/images/播放.png" alt="">
        <img src="../../assets/images/回复.png" alt="">
        <h3>{{v.title}}</h3>
        <p>{{v.palytimes}}</p>
        <p>{{v.talks}}</p>
      </div>
      <div class="down">
        <img :src="v.head" alt="">
        <img src="../../assets/images/错误.png" alt="">
        <p>{{v.singer}}</p>
      </div>
    </div>
  </div>
  
</div>
    

<!--  <div class="hello">
    <h1 class="page-title"></h1>
    <div class="page-actionsheet-wrapper">
      <button class="mint-button mint-button--default mint-button--large" @click="actionSheet">
        <label class="mint-button-text">点击上拉 action sheet</label>
      </button>
</div>
     <mt-actionsheet
        :actions= "data"
        v-model="sheetVisible">
    </mt-actionsheet>
  </div> -->

  </main>
</template>
<script>
  import Vue from 'vue'



export default {
  name: 'index',
  data () {
    return {
      test:[],
      msg:['推荐','朋友','电台'],
      msg2:['私人FM','开启每日推荐','歌单','排行榜'],
      msg3:[''],
      msg4:[''],
      msg5:[''],
       list:[''],
       loading:false,
      navRouter:['my','music','dynamic'],
      cur:0,
        data: [{
        name: '拍照',
        method : this.getCamera // 调用methods中的函数
      }, {
        name: '从相册中选择', 
        method : this.getLibrary  // 调用methods中的函数
      }],
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
      sheetVisible: false
    }
  },
   mounted(){
      /*console.log(musicObject);*/
      this.$http.get('../../../static/recomment.json',{
        params:{
        }
      }).then(function(res){
        this.msg3=res.data.cyc;
        this.msg4=res.data.list;
        this.msg5=res.data.conts;
      },function(){
      });
    },
methods: {
        loadMore() {
  this.loading = true;
  setTimeout(() => {
    let last = this.list[this.list.length - 1];
    for (let i = 0; i <=0; i++) {
      this.list.push(last + i);
    }
    this.loading = false;
  }, 1000);
}
  }
}

// })
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
main{
  position: relative;
  background-color: #fff;
}
.cyc{
   position: relative;
  overflow: hidden;
  width: 96%;
  height: 120px;
  left: 50%;
  top: -150%;
  margin-left: -48%;
  border-radius: 5px;
  background-color: #fff;
}
.cyc img{
  width: 100%;
  height: 120px;
}
.cyc ul {
    width: 99999px;
    position: relative;
}
.cyc ul li {
    float: left;
}
.cyc ol {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 90px;
    margin-left: -45px;
}
.cyc ol li {
    width: 5px;
    height: 5px;
    background-color: #A49E9E;
    float: left;
    border-radius: 50%;
    cursor: pointer;
    margin:0 3px;
}
.cyc .ol1 {
    background-color: red;
}
.cyc ol li:hover {
    background-color: red;
    color: white;
}
.list{
  border-bottom: 1px solid #DAD9D9;
  padding-bottom: 10px;
  position: relative;
  top: -120%;
  background-color: #fff;
}
.list ul{
  display: flex;
  margin: 0px auto;
}
.list ul li{
  width: 25%;
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
}
.list ul li img{
  width: 50%;
}
.content{
  margin: -30px 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom:110%;
  background-color: #fff;
}
.content h3{
  margin: 0 3px;
  position: relative;
  top: -10px;
}
.content div{

}
.content ul{
  margin: 0px auto;
}
.content p{
  position: relative;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  word-wrap: break-word;
  text-align: left;
  font-size: 11px;
}
.content ul li{
  float: left;
  width: 33.3%;
  margin: 0px auto;
}
.content ul li img{
  width: 95%;
  border-radius: 5px;
  border: 1px solid;
}
.conts{
  position: relative;
  margin-top: -4px;
  bottom: 40px;
  border-top:4px solid #CBCACA;
  border-bottom: 4px solid #CBCACA;
 background-color: #fff;
}
.conts .png{
position: relative;
margin: 10px 10px;
 width: 33.3%;
}
.conts .png img{
   width: 95%;
   border-radius: 5px;
}
.conts .top{
  position: absolute;
  width:60%;
  height:60%;
  right: 0;
  top: 0;
}
.conts .top img:nth-of-type(1){
  position: absolute;
  top: 10px;
  height: 40px;
}
.conts .top img:nth-of-type(2){
  position: absolute;
  height: 20px;
  bottom: 5px;
}
.conts .top img:nth-of-type(3){
  position: absolute;
  height: 22px;
  bottom: 3px;
  left: 60px;
}
.conts .top p:nth-of-type(1){
  position: absolute;
  left: 22px;
  font-size:8px;
  bottom: 8px;
}
.conts .top p:nth-of-type(2){
   position: absolute;
  left: 90px;
  font-size:8px;
  bottom: 8px;
}
.conts .top h3{
  position: absolute;
  left: 50px;
  top: 15px;
}
.conts .down{
  position: absolute;
   width: 60%;
  height: 35%;
  border-top: 1px solid #C7C4C4;
  right: 0;
  bottom: 0;
}
.conts .down img:nth-of-type(1){
  width: 20px;
  border-radius: 50%;
  border: 1px solid;
  margin-top: 5px;
}
.conts .down img:nth-of-type(2){
  width: 15px;
  margin-top: 8px;
  position: absolute;
  right: 10px;
}
.conts .down p{
  font-size: 10px;
  position: absolute;
  top: 5px;
  left: 30px;
}
</style>