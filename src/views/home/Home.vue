<template>
  <div>
    <!-- <h2>首页</h2> -->
      <nav-bar class="home-nav">
        <div  slot="center">购物街</div>
      </nav-bar>
  </div>
</template>

<script>
  import NavBar from  'components/common/navbar/NavBar'
  import {getHomemultidata} from 'network/home.js'

  export default {
    name: "Home",
    components:{
      NavBar
    },
    created(){
         getHomemultidata().then(res=>{
            console.log(res)
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
