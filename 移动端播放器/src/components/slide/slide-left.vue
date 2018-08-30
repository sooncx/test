<template>
  <main>
    <div class="slide" v-if="flag">
      <div class="top">
        <p>登陆网易云，即可免费听音乐</p>
        <span><p>立即登陆</p></span>
      </div>
      <div class="content">
        <ul>
          <li>我的消息</li>
          <li>会员中心</li>
          <li>商城</li>
           <li>游戏推荐</li>
          <li>在线听歌免流量</li>
        </ul>
        <ul>
          <li>我的好友</li>
          <li>附近的人</li>
        </ul>
        <ul>
          <li>个性换肤</li>
          <li>听歌识曲</li>
          <li>定时停止播放</li>
          <li>扫一扫</li>
          <li>音乐闹钟</li>
          <li>驾驶模式</li>
          <li>优惠券</li>
        </ul>
      </div>
      <div class="footer">
        <ul>
          <li>夜间模式</li>
          <li><router-link to=/option>
          <p>设置</p>
         </router-link></li>
          <li>退出</li>
        </ul>
      </div>
    </div>
    <div class="slide2" v-if="flag" @click="change">
      
    </div>
  </main>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg:[''],
    }
  },
    props:['flag'],
  methods:{
    change(){
      this.flag.l=false;
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
  transition: all 2s;
  color: #524E4E;
  text-decoration: none;
}
.slide2{
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top:0;
  right:0;
  height:100%;
  width:20%;
  z-index:10;
  
}
  .slide{
    position: fixed;
    top:0;
    left:0;
    height:100%;
    width:80%;
    z-index:10;
  }
.slide .top{
width: 100%;
height: 25%;
background: url('../../assets/images/veer-164105604.jpg') no-repeat;
background-size: 100% 100%;
position: relative;
}
.slide .top p{
  color: #fff;
  text-align: center;
  position: relative;
  top: 30%;
}
.slide .top span{
  width: 30%;
  padding: 2% 10%;
  border: 1px solid #fff;
  border-radius: 100px;
  position: absolute;
  bottom: 25%;
  left: 50%;
  margin-left: -25%
}
.slide .top span p{
  color: #fff;
  text-align:center;
}
.slide .content{
  background-color: #D5D5D5;
  overflow-y: scroll;
  height: 67%;
}
 .slide .content::-webkit-scrollbar {
        display: none;
  }
.slide .content ul{
  margin-bottom: 5px;
  background-color: #fff;
}
.slide .content ul li{
  padding: 4% 10px;
}

.slide .footer{
  position: fixed;
  background-color: #fff;
  width:80%;
  height: 8%;
  bottom: 0px;
  padding-top: 5px;
  border-top: 1px solid #BFBDBD;
}
.slide .footer ul{
  display: flex;
  height: 100%;
}
.slide .footer ul li{
  width: 33.3%;
  text-align: center;
  position: relative;
 
  padding: 5%;
  font-size: 14px;
}
</style>
