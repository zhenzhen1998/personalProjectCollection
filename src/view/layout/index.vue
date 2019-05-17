<template>
  <div id="layout" class="container">
    <div class="search">
      <input type="text" class="inputSearch" v-model="searchKey" placeholder="请输入搜索关键字（项目信息，作者）">
    </div>
    <!-- 项目列表 -->
    <ul class="proList clear">
      <li class="proLi fl" v-for="(item,index) in projectList1" :key="index">
        <div class="proInner" :id="index" @click="goProject(index)">
          <a :href="item.linkUrl">
          <img :src="item.imgUrl" class="proImg" alt>
          <p class="proTxt">{{item.txt}}</p>
          <div class="clear authorInfo">
            <img :src="item.authorHeader" class="author fl" alt>
            <p class="authorName">{{item.authorName}}</p>
          </div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { $post } from '../../utils/http.js'
import webconfig from '../../webconfig'
import {mapState} from "vuex";
export default {
  data() {
    return {
      searchKey:'',//搜索关键词
      projectList1:[],
      projectList: [
        {
          id: 0,
          imgUrl: "../../../static/images/1.png",
          txt: "转盘抽奖",
          authorHeader: "../../../static/images/pass2.png",
          authorName: "kitty.zhang",
          linkUrl:'http://zhendemo.esmartwave.com/done/projectCase/sm333-18/index.html'
        },
         {
          id: 1,
          imgUrl: "../../../static/images/2.png",
          txt: "老虎机抽奖",
          authorHeader: "../../../static/images/pass2.png",
          authorName: "kitty.zhang",
          linkUrl:'http://zhendemo.esmartwave.com/YH2438/index.html'
        },
         {
          id: 2,
          imgUrl: "../../../static/images/3.png",
          txt: "动画，上传图片，合成图片",
          authorHeader: "../../../static/images/pass2.png",
          authorName: "kitty.zhang",
          linkUrl:'http://zhendemo.esmartwave.com/done/projectCase/ys307/index.html'
        },
         {
          id: 3,
          imgUrl: "../../../static/images/4.png",
          txt: "动画",
          authorHeader: "../../../static/images/pass2.png",
          authorName: "kitty.zhang",
          linkUrl:'http://zhendemo.esmartwave.com/done/projectCase/sm554/load.html'
        },
      ]
    };
  },
  methods: {
    // goProject:function(index){
    //   this.$router.push({path:'/projectDetail'})
    // }
    async getactive(){
      console.log(this.$store.state.list,1)//访问vuex数据
      let data=await $post('/APIController/ArticleController.ashx',{MethodName:'getArticleList'})
      this.$store.dispatch('getActive',data)
    },
    // async getActive1(){
    //   let data=await $post('/api/H5Handler.ashx',{GetResult:'GetHdInfo',token:'DF88FD10982C7C9C4B892D24040D7B55' })
    // }
  },
  mounted(){
     this.projectList1=this.projectList
     this.getactive()
     //this.getActive1()
  },
  watch:{
    searchKey(val){
      console.log(val)
       this.projectList1=this.projectList.filter(function(vals){
         return vals.txt.indexOf(val)>=0||vals.authorName.indexOf(val)>=0
       })
    }
  }
};
</script>
 <style lang="scss" scoped>
.container {
  padding-top: 1rem;
}
#layout {
  width: 100vw;
  .search{
    width: 7.5rem;
    height: 1.2rem;
    padding-top: .2rem;
    position: fixed;
    top:0;
    left: 0;
    z-index: 100;
    // background: rgba(255,255,255,.8);
    .inputSearch{
      display: block;
      width: 6.8rem;
      height: .8rem;
      margin: 0 auto;
      font-size: .24rem;
      background: url('../../../static/images/search.png') no-repeat;
      background-size: .4rem .4rem;
      background-position: .1rem center;
       background-color: #ececec;
       opacity: .9;
      padding-left: .6rem;
      border-radius: .2rem;
    }
  }
  .proList {
    width: 100%;
    // -moz-column-count: 2; /* Firefox */
    // -webkit-column-count: 2; /* Safari 和 Chrome */
    // column-count: 2;
    // -moz-column-gap: 0.2rem;
    // -webkit-column-gap: 0.2rem;
    padding: 0.2rem 0;
  }
  .proLi {
    width: 3.75rem;
    // height: 7.26rem;
    background-color: #ffffff;
    padding: 0.1rem 0.06rem;

    // margin: 0.2rem;
    // -moz-page-break-inside: avoid;
    // -webkit-column-break-inside: avoid;
    // break-inside: avoid;
  }
  .proInner {
    width: 3.35rem;
    margin: 0 auto;
    box-shadow: 0rem 0.02rem 0.1rem 0rem rgba(0, 0, 0, 0.29);
    border-radius: 0.1rem;
    padding: 0.1rem 0.1rem 0.2rem 0.1rem;
  }
  .proImg {
    width: 99%;
    margin: 0 auto;
  }
  .proTxt {
    font-size: 0.26rem;
    line-height: 0.36rem;
    color: #333;
    margin: 0.1rem 0;
  }
  .authorInfo {
    .author {
      width: 0.6rem;
      height: 0.6rem;
      margin-right: 0.1rem;
    }
    .authorName {
      font-size: 0.22rem;
      height: 0.6rem;
      line-height: 0.6rem;
      color: #666;
    }
  }
}
</style>
 
