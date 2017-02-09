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

        <a class="next">older posts →</a>

        <a class="pre">← new posts</a>
      </div>

    </div>

  </div>
</template>
<style>
    body{
    }



</style>
<script>

    import {TimeUtils} from '../utils/TimeUtils';

    export default{
      created(){
        this.$store.dispatch("getBlogs");
      },

      computed:{
        blogs(){
          return this.$store.getters.getBlogs;
        },
      },
      methods:{
        formatBlogCreatedTime(time){
          return TimeUtils.formatTimeYMDHM(time);
        },
      }
    }





</script>
