<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="#">
        <img class="logo" src="../assets/logo-ci@2x.png" alt="">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Index</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>
  <!-- 轮播区 -->
  <div class="banner">
    <div class="banner-content">
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        >
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
    </div>
    
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
export default {
   data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  width: 100px; 
}
.banner{
  width: 100%;
  background:-webkit-linear-gradient(#fff,#e7e7e7);
}
.banner-content{
  margin-top: 56px;
}
.bottom{
  display: flex;
  width: 100%;
  padding: 40px;
  background-color: #222;
  color: #fffff8;
}

.bottom-logo img{
  width: 200px;
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
