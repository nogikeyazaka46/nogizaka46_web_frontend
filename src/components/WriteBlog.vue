<template xmlns:v-on="http://www.w3.org/1999/xhtml">
<div>
  <div>
    <div class="writing">
      <div class="writingBlock">
        <textarea class="writingBlock-text" type="text" v-model="blog_content"/>
      </div>

      <div class="showBlock">
        <vue-markdown class="markdown-view" :source="blog_content"></vue-markdown>
      </div>
    </div>
  </div>

  <button v-on:click="saveBlog">保存blog</button>
</div>
</template>
<style>
  .writingBlock{
    float: left;
    height: 600px;
    width: 45%;
    margin-right: 60px;
  }
  .writingBlock-text{
    width:100%;
    height:100%;
    border-color: purple;
  }
  .showBlock{
    float:right;
    max-width: 50%;
  }





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
