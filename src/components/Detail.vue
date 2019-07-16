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
            img-width ="1024"
            img-height="480"
            fade
            style="text-shadow: 1px 1px 2px #333;"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              v-for="(item,index) in bannerItem"
              :key="index"
              :text="item.title"
              :img-src="item.src"
              img-width ="1024"
              img-height="480"
            >
            </b-carousel-slide>
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
      <!-- 跳转购买页 -->
      <div class="submit">
        <div class="submit-btn" squared >购买<a href=""></a></div>
      </div> 
  </div>
</template>

<script>
export default {
    data() {
      return {  
        slide: 0,
        sliding: null,
        // 轮播数据
        bannerItem:[
          {title:"Nulla vitae elit libero, a pharetra augue mollis interdum.",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563277740226&di=48836d2770f7393616418b546ed338b0&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa77c67ea01f32fe94053b653caefb1dc5783bf6947024-zYrxl3_fw658"},
          {title:"",src:"https://picsum.photos/1024/480/?image=54"},
          {title:"",src:"https://picsum.photos/1024/480/?image=58"}
        ],
        // 表格数据
        list: [
          { content: '40sadfsadfsadfqwerqwrwqrsdfsdafdsafdsafsadfadsf', title: 'DickersonDickerson'},
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
}
.tab-list{
  margin-top: 20px;
}
.myTabs{
  display: flex;
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
  word-wrap: break-word;
  word-break: break-all;
}
.myTabs-content{
  background-color: #ededed;
  color: #000;
  word-wrap: break-word;
  word-break: break-all;
}
.img-list{
  padding: 20px;
  margin-bottom: 35px;
}
.img-list img{
  width: 100%;
}
.submit{
  width: 100%;
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(0,0,0,.8);
  color: #fff;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  z-index: 10;
}
</style>
