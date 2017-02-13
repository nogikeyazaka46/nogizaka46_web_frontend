<template>
  <div>
    <template v-for="blog in blogs">
      <div class="post">
        <h2 class="title">
          <router-link :to="{path:'/blog/'+blog.id}">{{blog.name}}</router-link>
        </h2>

        <div class="time">
          <span class="date">{{formatBlogCreatedTime(blog.created_time)}}</span>
        </div>

        <div class="post-body">
          {{blog.summary}}
        </div>
      </div>
    </template>

    <div class="blank">
    </div>

    <div class="pager">
      <div class="pager-wrapper">
        <router-link v-if="shouldShowPre" :to="{path:'/blogs/page/'+(currentPageNo-1)}">older posts →</router-link>
        <router-link v-if="shouldShowNext" :to="{path:'/blogs/page/'+(currentPageNo+1)}">← new posts</router-link>
      </div>
    </div>
  </div>
</template>
<style>
body{
}
.post {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-family: "source-serif-pro", "STSong", "SimSun", "Times New Roman", Times, serif;
}

.title {
  width: 660px;
  max-width: 90%;
  margin: 0 auto;
  padding-top: 40px;
  font-size:25px;
}
.time {
    font-size:20px;
    width: 660px;
    max-width: 90%;
    margin: 0 auto;
    padding-top: 30px;
}
.post-body {
    width: 660px;
    max-width: 90%;
    margin: 0 auto;
    padding-top: 30px;
    font-size:22px;
    color:#3B3B3B ;
}
.pager {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:50px;
}

.pager-wrapper {
    width: 660px;
    max-width: 90%;
    margin: 0 auto;
    padding-top: 30px;
    font-size:30px;
    font-family: 'Tangerine', serif;

}

</style>
<script>
    import {TimeUtils} from '../utils/TimeUtils';

    export default{
      created(){
        this.loadData();
      },
      watch: {
        '$route' (to, from) {
          this.loadData();
        }
      },
      computed:{
        blogs(){
          return this.$store.getters.getBlogs;
        },
        shouldShowPre(){
          return this.$store.getters.getShouldShowPre;
        },
        shouldShowNext(){
          return this.$store.getters.getShouldShowNext;
        },
        currentPageNo(){
          return this.$store.getters.currentPageNo;
        },
      },
      methods:{
        formatBlogCreatedTime(time){
          return TimeUtils.formatTimeYMDHM(time);
        },
        loadData(){
          let currentPageNo=0;
          if(this.$route.params.pageNo){
            currentPageNo = this.$route.params.pageNo;
          }
          this.$store.dispatch("getBlogsByPage",currentPageNo);
        }
      },
    }


</script>
