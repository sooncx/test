<template>
  <main>
    <div class="playbar"  v-for="v in msg">
      <img :src="v.src" alt="">
      <span>
        <p>{{v.song}}</p>
        <p>{{v.singer}}</p>
      </span>
      <span @click='cli'><img :src="src" alt=""></span>
      <span @click="get()"><img src="../assets/images/音乐列表.png" alt=""></span>
    </div>
<mt-popup v-model="flag" position="bottom" class="box" >
    <div class="top">
    </div>
    <div class="list">
      <div class="content" v-for="i in 30">
        <p>歌名</p>
        <p>-歌手</p>
        <span><img src="../assets/images/错误.png" alt=""></span>
      </div>
    </div>
</mt-popup>
  </main>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg:[''],
      flag:false,
      src:"../../static/images/播放 (1).png",
    }
  }, mounted(){
      /*console.log(musicObject);*/
      this.$http.get('../../../static/recomment.json',{
        params:{
        }
      }).then(function(res){
        this.msg=res.data.playbar;
        console.log('')
      },function(){
      });
    },
  methods:{
    get(){
      this.flag=true;
    },
    cli(){
      if(this.src=="../../static/images/播放 (1).png"){
         this.src="../../static/images/播放 (2).png"
       }else if(this.src=="../../static/images/播放 (2).png"){
        this.src="../../static/images/播放 (1).png"
       }
     
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
body{
  position: relative;
}
.playbar{
  box-shadow: 0 30px 200px #0B0B0B;
  z-index: 9;
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
}
.playbar img{
  position: absolute;
  width: 40px;
  top: 50%;
  margin-top: -20px;
  left: 5px;
  border-radius: 5px;
}
.playbar span:nth-of-type(1) p:nth-of-type(1){
  position: absolute;
  top: 7px;
  left: 60px;
  font-size: 12px;
}
.playbar span:nth-of-type(1) p:nth-of-type(2){
  position: absolute;
  top: 28px;
  left: 60px;
  font-size: 12px;
}
.playbar span:nth-of-type(2){
  position: absolute;
  right: 100px;
  bottom: 40%;
}
.playbar span:nth-of-type(2) img{
  width: 30px;
}
.playbar span:nth-of-type(3){
  position: absolute;
  right: 50px;
  bottom: 35%;
}
.playbar span:nth-of-type(3) img{
  width: 30px;
}
.box{
  width: 100%;
  height: 80%;
  color: #7B7B7B;
  border-radius: 15px;
  margin-bottom: -25px;
}
.box .top{
  height: 60px;
  border-bottom: 1px solid #C2C1C1;
}
.list{
  overflow-y: scroll;
  height: 100%;
}
.content{
width: 100%;
height: 40px;

border-bottom: 1px solid #C2C1C1;
display: flex;
position: relative;
line-height: 40px;
}
.content p{
  padding: 0 5px;
}
.content p:nth-of-type(1){
  
}
.content p:nth-of-type(2){
  
}
.content span{
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -15px;
}
.content span img{
  width: 20px;
}
</style>
