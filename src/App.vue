<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand  @click="go('Index')" style="cursor:pointer;">
        <img class="logo" src="./assets/logo-ci@2x.png" alt="">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav  class="ml-auto">
          <b-nav-item href="#" v-for="(item,index) in indexNav" :key="index" @click="go(item.name)">{{item.title}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      indexNav:[{title:"主页",name:'Index'},{title:"同人贩卖",name:'Blog'},{title:"原创贩卖",name:'Blog'},{title:"投票系统",name:'Blog'}]
    }
  },
  methods:{
    go(name){
      this.$router.push({name:`${name}`})
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


/* 大于768px */
@media (min-width: 768px){
  .content{
    margin-top: 76px;
  }
  .banner-content{
    padding: 0 20vw;
  }
  .bottom{
    padding: 40px;
  }
  .bottom-logo img{
  width: 200px;
}
.logo{
  width: 200px; 
}
}
/* 小于768px */
@media (max-width: 768px){
  .content{
    margin-top: 56px;
  }
  .logo{
    width: 100px; 
  }
  .commodity{
    border-bottom: 1px solid #f7f7f7;
  }
  .bottom{
    padding: 20px;
  }
  .bottom-logo img{
    width: 100px;
  }
  .myTabs{
    font-size: 14px;
  }
}
/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: 992px) {

}

/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width:1200px) { 
  
 }
 @media (max-width: 992px)and(min-width:375px) {
   
}
 /* 小于375 iphone-6,7,8 */
@media (max-width: 375px) {
  
}

</style>
