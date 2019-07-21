<template>
  <div class="content">
      <!-- 轮播区 -->
      <h4 class="detail-title">{{title}}</h4>
      <div class="banner">
        <div class="banner-content">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="5000"
            controls
            indicators
            background="#ababab"
            img-width ="500"
            img-height="500"
            fade
            style="text-shadow: 1px 1px 2px #333;"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              :img-src="form.img1"
              img-width ="500"
              img-height="480"
            >
            </b-carousel-slide>
            <b-carousel-slide
              :img-src="form.img2"
              img-width ="500"
              img-height="480"
            >
            </b-carousel-slide>
            <b-carousel-slide
              :img-src="form.img3"
              img-width ="500"
              img-height="480"
            >
            </b-carousel-slide>
            <b-carousel-slide
              :img-src="form.img4"
              img-width ="500"
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
            <img :src="imgShow" alt="">
          </b-col>
        </b-row>
      </b-container>
      <!-- 跳转购买页 -->
      <div class="submit">
        <div class="submit-btn"  target="_blank" @click="toShop">购买</div>
      </div> 
  </div>
</template>

<script>
export default {
    data() {
      return {  
        slide: 0,
        sliding: null,
        // 表格数据
        list: [
        ],
        form:[],
        imgShow:'',
        title:'',
        url:''
      }
    },
    created(){
      const self = this;
      if(this.$route.params.item === undefined){
        self.$axios.get(self.$url)
        .then(function(res){
          let data = JSON.parse(decodeURIComponent(res.data.data));
          data.forEach((item,index)=>{
            if(item.idshop == window.localStorage.getItem('idshop')){
              self.form = item
              self.init()
            }
          })
        });
      }else{
        self.form = this.$route.params.item
        self.init()
      }
    },
    mounted(){
        
    },
    methods: {
      toShop(){
         window.location.href = this.form.buy;
      },
      init(){
        this.list.push(
        {title:'作品名',content:this.form.name},
        {title:'発売月',content:this.form.time},
        {title:'価格',content:this.form.price},
        {title:'サイズ',content:this.form.size},
        {title:'原 型',content:this.form.commodity},
        {title:'彩 色',content:this.form.editer},
        )
        this.imgShow = this.form.imgShow
        this.title = this.form.name
      }
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
  bottom: -8px;
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
.submit-btn{
  text-decoration:none;
  color: #fff;
}
</style>
