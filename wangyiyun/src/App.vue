<template>
    <main>
      <v-header></v-header>
      <router-view></router-view>
      <v-footer></v-footer>
    </main>
</template>

<script>
  import index from './components/index.vue'
   import footer from './components/footer.vue'
  export default {
  	components:{
    	'v-header':index,
      'v-footer':footer
  	}
  }
</script>
<style>
  body{
     padding: 0;
     margin:0;
  }
</style>

