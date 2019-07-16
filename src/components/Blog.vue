<template>
  <div class="content">
      <div class="container-fluid">
        <h3 class="text-center">ALTAiR BLOG</h3>
        <!-- 列表 -->
        <div class="row">
            <div class="col-xs-6 col-md-3 commodity"  v-for="(item,index) in list" :key="index">
                <div class="thumbnail commodity-left">
                    <img :src="item.src" alt="">
                </div>
                <div class="commodity-right">
                    <span class="commodity-time">{{item.time}}</span>
                    <div class="commodity-content">{{item.content}}</div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
          list:[
            {title:"标题",src: require('../assets/logo.png'),content:"这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区这是内容区",time:"2019.07.15"},
            {title:"标题",src: require('../assets/logo.png'),content:"这是内容区",time:"2019.07.15"},
            {title:"标题",src: require('../assets/logo.png'),content:"这是内容区",time:"2019.07.15"},
            {title:"标题",src: require('../assets/logo.png'),content:"这是内容区",time:"2019.07.15"},
            {title:"标题",src: require('../assets/logo.png'),content:"这是内容区",time:"2019.07.15"},
            {title:"标题",src: require('../assets/logo.png'),content:"这是内容区",time:"2019.07.15"},
          ],
      }
    },
    created(){
        // console.log(this.$route.params.item)
    },
    mounted(){
        
    },
    methods: {
       
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
    padding-top: 8px;
}
.commodity{
    display: flex;
    padding: 15px;
    cursor:pointer
}
.commodity-time{
    padding: 2px;
    font-size: 14px;
    border: 1px solid #333;
}
.commodity-left img{
    width: 150px;
    height: 150px;
}
.commodity-right{
    flex: 1;
    width: 70%;
    margin-left: 10px;
}
.commodity-content{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
}
</style>
