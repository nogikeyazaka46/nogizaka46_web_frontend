<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div>
      <textarea type="text" v-model="blog_content"/>
    </div>

    <vue-markdown :source="blog_content"></vue-markdown>

    <button v-on:click="saveBlog">保存blog</button>

  </div>
</template>
<style>
</style>
<script>
    import VueMarkdown from 'vue-markdown';

    export default{
        data() {
          return{
            blog_content:''
            }
        },
        components:{
          'vue-markdown': VueMarkdown
        },
        methods:{
          saveBlog(){
            let json = {
              name:"markdown测试",
              content:this.blog_content,
              summary:"summary",
              category:"cate"
	          };
            this.$store.dispatch("saveBlog",json);
          }
        }
    }


</script>
