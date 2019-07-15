<template>
  <div class="content">
    <!-- 轮播区 -->
    <div class="banner">
      <div class="banner-content">
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="5000"
        controls
        indicators
        fade
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          v-for="(item,index) in bannerItem"
          :key="index"
          :text="item.title"
          :img-src="item.src"
        ></b-carousel-slide>
      </b-carousel>
      </div>
    </div>
    <!-- 公告板 -->
    <div class="public-content">
      <h4 class="text-center">公告板块</h4>
    <b-list-group>
      <b-list-group-item class="list-item" v-for="(item,i) in public" :key="i" @click="toBlog(item)">{{item.title}}</b-list-group-item>
    </b-list-group>
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
        bannerItem:[
          {title:"Nulla vitae elit libero, a pharetra augue mollis interdum.",src:"https://picsum.photos/1024/480/?image=52"},
          {title:"",src:"https://picsum.photos/1024/480/?image=54"},
          {title:"",src:"https://picsum.photos/1024/480/?image=58"}
        ],
        public:[{title:'Cras justo odio',src:'',id:1},{title:'Dapibus ac facilisis in',src:'',id:2},{title:'ac consectetur ac',src:'',id:3},{title:'Vestibulum at eros',src:'',id:4}]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      toBlog(item){
        this.$router.push({name:'Blog',params:{item:item}} );
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
  width: 100%;
  background:-webkit-linear-gradient(#fff,#e7e7e7);
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
