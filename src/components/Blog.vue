<template>
  <vue-markdown :source="blogContent"></vue-markdown>
</template>
<style>
</style>
<script>
import VueMarkdown from 'vue-markdown';
export default{
    created(){
      console.log(this.$route.params.id);
      this.$store.dispatch("getBlogById",this.$route.params.id);
    },
    computed:{
      blogContent(){
        let blog = this.$store.getters.getBlogContent;
        console.log('博客的详情为:'+blog.content);
        return blog.content;
      },
    },
    components:{
      'vue-markdown': VueMarkdown
    }
}

</script>
