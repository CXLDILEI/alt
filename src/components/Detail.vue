<template>
  <div class="content">
      <!-- 轮播区 -->
      <h4>详情</h4>
      <div class="banner">
        <div class="banner-content">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="5000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            fade
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
      <!-- 表格 -->
      <b-container class="tab-list">
        <b-row class="myTabs" v-for="(item,index) in list" :key="index">
          <b-col class="myTabs-title myTabs-item" cols="4">{{item.title}}</b-col>
          <b-col class="myTabs-content myTabs-item" cols="8">{{item.content}}</b-col>
        </b-row>
      </b-container>
      <!-- 图片列表 -->
      <b-container class="img-list">
        <b-row>
          <b-col>
            <img src="https://picsum.photos/1024/480/?image=54" alt="">
          </b-col>
        </b-row>
      </b-container> 
  </div>
</template>

<script>
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
        list: [
          { content: '40', title: 'Dickerson'},
          { content: '21', title: 'Larsen'},
          { content: '89', title: 'Geneva'},
          { content: '38', title: 'Jami'}
        ]
      }
    },
    created(){

    },
    mounted(){
        
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
    }
}
</script>

<style scoped>
h4{
  padding-top: 8px;
  text-align: center;
  position: relative;
}
h4:after{
  position: absolute;
  display: block;
  content: "";
  top: 45px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background-color: aqua;
}
.banner-content{
  margin-top: 20px;
}
.banner{
  width: 100%;
  /* background:-webkit-linear-gradient(#fff,#e7e7e7); */
}
.tab-list{
  margin-top: 20px;
}
.myTabs{
  display: flex;
  width: 80vw;
  margin: 0 auto;
}
.myTabs-item{
  padding: 10px;
  margin-bottom: 1px;
}
.myTabs-title{
  background-color: #333;
  color: #fff;
  text-align: center;
}
.myTabs-content{
  background-color: #ededed;
  color: #000;
}
.img-list{
  padding: 20px;
  margin-top: 30px;
}
.img-list img{
  width: 100%;
}
</style>
