<template>
  <div id="home">
    <!-- <h2>首页</h2> -->
      <nav-bar class="home-nav"><div  slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners" />
      <recommend-view :recommend="recommends"/>
      <featurn-view />
      <tab-control class="tab-control"
       :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        />
      <good-list  :goods="showGoods"/>
  </div>
</template>

<script>
  // 公共
  import NavBar from  'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodList from '../../components/content/goods/GoodList.vue'

  // 子
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import FeaturnView from './childComps/FeaturnView.vue'


  import {getHomemultidata,getHomeGoods} from 'network/home'

  export default {
    name: "Home",
    components:{
      NavBar,
      TabControl,
      GoodList,
      HomeSwiper,
      RecommendView,
      FeaturnView,

    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop'
      }
    },
    created(){
      //1.请求多个数据
       this.getHomemultidata(),
        //2.请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new'),
        this.getHomeGoods('sell')
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      //数据请求
      //1.请求多个数据
      getHomemultidata(){
        getHomemultidata().then(res=>{
          console.log(res)
           this.banners  =res.data.banner.list,
           this.recommends=res.data.recommend.list
         })
      },
       //2.请求商品数据
      getHomeGoods(type){
        const page=this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page+=1;
        })
      },

      // 事件监听
      //1.
      tabClick(index){
        switch(index){
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='new'
            break
          case 2:
             this.currentType='sell'
             break
        }
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    padding-bottom: 50px;
  }
  .home-nav{
    background: lightpink;
    color: white;
    font-weight: bold;
    position: fixed;
    /* left:0; */
    top: 0;
    z-index: 100;
    width: 100%;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
