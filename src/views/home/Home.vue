<template>
  <div>
    <!-- <h2>首页</h2> -->
      <nav-bar class="home-nav"><div  slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners" />
      <recommend-view :recommend="recommends"/>
  </div>
</template>

<script>
  import NavBar from  'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'

   import {getHomemultidata} from 'network/home.js'

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data(){
      return {
        banners:[],
        recommends:[]
      }
    },
    created(){
         getHomemultidata().then(res=>{
           console.log(res)
            this.banners  =res.data.banner.list,
            this.recommends=res.data.recommend.list
          })
    }
  }
</script>

<style scoped>
  .home-nav{
    background: lightpink;
    color: white;
    font-weight: bold;
  }
</style>
