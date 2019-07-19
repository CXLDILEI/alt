<template>
  <div class="content">
    <!-- 顶部图片区 -->
    <b-container>
      <b-row>
        <b-col>
          <img class="index-top-img" :src="topImg.src" alt="">
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
          <img :src="item.src" alt="">
        </b-col>
      </b-row>
    </b-container>
    <!-- 公告板 -->
    <div class="public-content">
      <h4 class="text-center">公告板块</h4>
    <!-- <b-list-group>
      <b-list-group-item class="list-item" v-for="(item,i) in public" :key="i" @click="toBlog(item)">{{item.title}}</b-list-group-item>
    </b-list-group> -->
      <div class="text-center">{{publicdata.content}}</div>
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
import { parse } from 'path';
export default {
   data() {
      return {
        slide: 0,
        sliding: null,
        // 头部的图片
        topImg:{src:'https://picsum.photos/1024/480/?image=52'},
        // 公告区数据
        publicdata:{title:'公告标题',content:'这是公共内容'},
        // 产品列表
        intelList:[{src:require('../assets/20190521114744_XPBuIdqH.jpg')},{src:require('../assets/20190521114744_XPBuIdqH.jpg')},{src:require('../assets/20190521114744_XPBuIdqH.jpg')},{src:require('../assets/20190521114744_XPBuIdqH.jpg')}]
      }
    },
    created(){
      this.$axios.get('http://14.23.115.53:8688/testProject/getAll.do')
        .then(function(res){
          console.log(JSON.parse(decodeURIComponent(res.data.data)))
        });
    },
    methods: {
      // 跳转详情页
      toDetail(item){
          this.$router.push({name:'Detail',params:{item:item}})
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
