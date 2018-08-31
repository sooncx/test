<template>
  <main>
    <div class="slide" >
      <div class="top">
        <router-link to=/recommend>
          <span><</span>
         </router-link>
        <p>设置</p>
      </div>
      <div class="content">
        <ul class="ull">
          <li v-for="i in 5">
            <p>某功能</p>
            <div>
              <mt-switch v-model="value"></mt-switch>
            </div>
          </li>
        </ul>
        <ul class="ull">
          <li v-for="i in 5">
            <p>某功能</p>
            <div>
              <mt-switch v-model="value"></mt-switch>
            </div>
          </li>
        </ul>
        <ul class="last">
          <li v-for="i in 5">
            <p>某功能</p>
            <div>
              <mt-switch v-model="value"></mt-switch>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      value:false,
    }
  },
  methods:{

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
}
  .slide{
    position: fixed;
    top:0;
    left:0;
    height:100%;
    width:100%;
    z-index:10;
  }
.slide .top{
width: 100%;
height: 10%;
background-color: red;
background-size: 100% 100%;
position: relative;

}

.slide .top p{
  position: absolute;
top: 0;
bottom: 0;
left: 45px;
width: 50%;
height: 30%;
margin: auto;
color: #fff;
}
.slide .top span{
 position: absolute;
top: 0;
bottom: 0;
left: 20px;
width: 50%;
height: 30%;
margin: auto;
color: #fff;
}




.slide .content{
  background-color: #D5D5D5;
  overflow-y: scroll;
  height: 90%;
}
 .slide .content::-webkit-scrollbar {
        display: none;
  }
.slide .content ul{
 
  background-color: #fff;
}
.slide .content .ull{
   margin-bottom: 5px;
}
.slide .content ul li{
  padding: 4% 0;
  display: flex;
  border-bottom: 1px solid #BBB8B8;
}
.slide .content ul li p{
  position: relative;
top: 0;
bottom: 0;
margin: auto;
margin-left: 10px;
}
.slide .content ul li div{
position: relative;
top: 0;
bottom: 0;
margin: auto;
margin-right: 10px;
}
</style>
