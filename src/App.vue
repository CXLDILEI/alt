<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand @click="toIndex" style="cursor:pointer;">
        <img class="logo" src="./assets/logo-ci@2x.png" alt="">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Index</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'app',
  components: {
    Index
  },
  methods:{
    toIndex(){
      this.$router.push({name:'Index'})
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content{
  margin-top: 56px;
}
.logo{
  width: 100px; 
}
/* 大于768px */
@media (min-width: 768px){
  .banner-content{
    padding: 0 300px;
  }
  .bottom{
    padding: 40px;
  }
  .bottom-logo img{
  width: 200px;
}
}
/* 小于768px */
@media (max-width: 768px){
  .commodity{
    border-bottom: 1px solid #f7f7f7;
  }
  .bottom{
    padding: 20px;
  }
  .bottom-logo img{
    width: 100px;
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
