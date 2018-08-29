<template>
  <main>
    <div class="box">
      <ul>
        <li v-for="(v,i) in msg" ><p>{{v}}</p></li>
      </ul>
    </div>
    <div class="list"">
      <div class="bar" v-for="v in msg2" @click="change">
       {{v}}
      </div>
      <ul v-if="flag">
        <li v-for="i in 3">
          <img src="../assets/images/pic1.jpg" alt="">
          <div class="con">
            <p>我喜欢的音乐</p>
            <p>234首</p>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg:['本地音乐','最近播放','下载管理','我的电台','我的收藏'],
      navRouter:['recommend','friend','radio'],
      msg2:['show'],
      flag:true,
    }
  },
  methods:{
    get(index){
      this.cur=index;
    },
    change(){
      this.flag=!this.flag;
      if(this.flag==true){
        this.msg2[0]="show";
      }
      if(this.flag==false){
        this.msg2[0]="hide";
      }
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
  .box{
  }
  .box ul{

  }
  .box ul li{
    border-bottom: 1px solid #B6B6B6;
    padding: 15px 5px;
    display: flex;
  }
  .box ul li:nth-of-type(5){
    border: none;
  }
  .list{
  }
  .list .bar{
    height: 25px;
    display: flex;
    background-color: #D6D5D5;
  }
  .list ul li{
    position: relative;
    display: flex;
  }
  .list img{
    padding: 3px 5px;
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
  .list .con{
    border-bottom: 1px solid #A8A8A8;
    height: 52px;
    width: 100%;
    margin-left: 10px;
  }
  .list ul li p:nth-of-type(1){
    position: absolute;
    top: 8px;
    left: 70px;
  }
  .list ul li p:nth-of-type(2){
    position: absolute;
    bottom: 8px;
    font-size: 12px;
    left: 70px;
  }
</style>
