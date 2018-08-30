<template>
  <main>
    <div class="list">
      <ul>
        <li v-for="v in msg6">
          <img :src="v.head" alt="">
          <p>{{v.title}}</p>
          <p>{{v.singer}}</p>
          <div><p>关注</p></div>
        </li>
      </ul>
    </div>
<div  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <div v-for="item in list">
    <div class="con" v-for="(v,index) in msg5" :key="index">
  <div class="up">
     <div class="bg">
      <img :src="v.src" alt="">
      <span><p>{{v.palytimes}}</p></span>
      <span><p>{{v.time}}</p></span>
    </div>
    <div class="head">
      <img :src="v.head" alt="">
      <p>{{v.singer}}</p>
    </div>
  </div>
  <div class="down">
    <p>{{v.title}}</p>
    <ul>
      <li><p>{{v.good}}</p></li>
      <li><p>{{v.talks}}</p></li>
      <li>选项</li>
    </ul>
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
      msg5:[''],
      msg6:[''],
      list:[''],
    }
  },
   mounted(){
      /*console.log(musicObject);*/
      this.$http.get('../../../static/data/tuijian.json',{
        params:{
        }
      }).then(function(res){
        this.msg5=res.data.conts;
        this.msg6=res.data.list;
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
.list{
  width: 100%;
  height: 400%;
  overflow-x: scroll;
}
 .list::-webkit-scrollbar {
        display: none;
  }
.list ul{
  width: 1200px;
  height: 100%;
  display: flex;
  background-color: #DAD7D7;
}
.list ul li{
  height: 90%;
  width: 120px;
  margin: auto 3px;
  border-radius: 2px;
  background-color: #fff;
  position: relative;
  text-align: center;
}
.list ul li img{
  width: 50px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -25px;
  top: 5%;
}
.list ul li p:nth-of-type(1){
  position: relative;
  top: 50%;
  font-size: 13px;
}
.list ul li p:nth-of-type(2){
  position: relative;
  top: 53%;
  font-size: 10px;
}
.list ul li div{
  position: relative;
  top: 60%;
  border: 1px solid #C31010;
  width: 50%;
  margin: 0 auto;
  border-radius: 3px;
}
.list ul li div p{
    color: #C31010;
}
.con{
  width: 100%;
  position: relative;
}
.con .up{
  color: #FFFFFF;
}
.con .up .bg span:nth-of-type(1) p{
  position: absolute;
  bottom: 5%;
  left: 3%;

}
.con .up .bg span:nth-of-type(2) p{
  position: absolute;
  bottom: 5%;
  right: 3%;
}
.con .up .bg{
  position: relative;
}
.con .up .bg img{
  width: 100%;
}
.con .up .head{
}
.con .up .head img{
  border-radius: 50%;
  width: 10%;
  position: absolute;
  top: 3%;
  left: 3%;
}
.con .up .head p{
  position: absolute;
   top: 6%;
  left: 15%;
  font-size: 13px;
}
.con .down{
  color: #646464;
  padding-bottom: 10%;
/*     margin-bottom: 15%;
     border-bottom: 1px solid; */
}
.con .down p{
  font-size: 15px;
  position: absolute;
  bottom: 5%;
  left: 3%;

}
.con .down ul{
  display: flex;
}
.con .down ul li:nth-of-type(1){
  position: absolute;
  right: 22%;
  bottom: 5%;
}
.con .down ul li:nth-of-type(2){
   position: absolute;
  right: 35%;
  bottom: 5%;

}
.con .down ul li:nth-of-type(3){
  position: absolute;
  right: 2%;
  bottom: 5%;
}
.con .down ul li:nth-of-type(1) p{


}
.con .down ul li:nth-of-type(2) p{


}
</style>