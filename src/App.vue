<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media (min-width: 768px){ 
  .banner-content{
    padding: 0 300px;
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
