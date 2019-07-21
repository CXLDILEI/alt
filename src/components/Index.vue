<template>
  <div class="content">
    <!-- 顶部图片区 -->
    <b-container>
      <b-row>
        <b-col>
          <img class="index-top-img" src="../assets/index.jpg" alt="">
        </b-col>
      </b-row>
    </b-container>
    <!-- 贩售情报 -->
    <b-container class="intelligence">
      <div class="intelligence-title">
        <h2>NEW ITEM</h2>
        <small>新製品情報</small>
      </div>
      <b-row>
        <b-col class="intelligence-content" cols="12" md="6" v-for="(item,index) in intelList" @click="toDetail(item)" :key="index">
          <img :src="item.imgMain" alt="">
        </b-col>
      </b-row>
    </b-container>
    <!-- 公告板 -->
    <div class="public-content">
      <h4 class="text-center">公告板块</h4>
      <div class="text-center">这是公共内容</div>
    </div>
    <!-- 底部联系 -->
    <div class="bottom">
        <div class="bottom-logo">
          <img class="" src="../assets/logo-ci@2x.png" alt="">
        </div>
        <div class="bottom-info">
          <div class="bottom-info-connection">联系方式</div>
          <ul>
            <li>CATEGORY</li>
            <li>製品一覧</li>
            <li>フィギュア</li>
            <li>アルタイル</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
import { parse, format } from 'path';
export default {
   data() {
      return {
        slide: 0,
        sliding: null,
        // 产品列表
        intelList:[]
      }
    },
    created(){
      const self = this;
      this.$axios.get(self.$url)
        .then(function(res){
          self.form = JSON.parse(decodeURIComponent(res.data.data));
          self.form.forEach((item,index)=>{
            self.intelList.push(item)
          })
        });
    },
    methods: {
      // 跳转详情页
      toDetail(item){
          this.$router.push({name:'Detail',params:{item:item}})
          window.localStorage.setItem('idshop',JSON.stringify(item.idshop))
      }
    },
}
</script>

<style scoped>
@media (max-width: 768px){
  .intelligence-content{
    padding: 0px;
  }
}
@media (min-width: 768px){
  .intelligence-content{
    padding: 5px;
  }
}
.index-top-img{
  width: 100%;
}
.banner{
  width: 100%;
  background:-webkit-linear-gradient(#fff,#e7e7e7);
}
.intelligence-title h2{
  text-align: center
}
.intelligence-title{
  padding: 15px 15px;
}
.intelligence-title small{
  display: block;
  text-align: center;
}
.intelligence-content{
  cursor: pointer;
}
.intelligence img{
  width: 100%;
  border: 1px solid #ddd;
}
.list-item{
  border: none;
  border-style: none none dotted;
  cursor:pointer;
}
.public-content{
  padding:25px;
}
.bottom{
  display: flex;
  width: 100%;
  background-color: #222;
  color: #fffff8;
}

.bottom-info{
  flex: 1;
  width: 300px;
  padding: 0 15px;
}
.bottom-info ul{
  list-style: none;
  padding: 0;
}
.bottom-info ul li{
  font-size: 12px;
}
</style>
