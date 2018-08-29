<template>
  <main>
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
      list:[''],
    }
  },
   mounted(){
      /*console.log(musicObject);*/
      this.$http.get('../../../static/data/bgm.json',{
        params:{
        }
      }).then(function(res){
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
.con{
  width: 100%;
  position: relative;
  top: -55px;
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