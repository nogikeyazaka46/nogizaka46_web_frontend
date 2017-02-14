<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="uploadBlogs">
    <div class="categories">
      名称: <input v-model="blog_name"/>
    </div>
    <div class="category_summaries">
      <span>类别:</span>
      <select v-model="blog_type" class="type-selector">
        <option v-for="category in categories" v-bind:value="category">
          {{ category }}
        </option>
      </select>
    </div>

    <div class="writing">
      <div class="writingBlock">
        <textarea class="writingBlock-text" type="text" v-model="blog_content"/>
      </div>

      <div class="showBlock">
        <vue-markdown class="markdown-view" :source="blog_content"></vue-markdown>
      </div>
    </div>

    <button class="save" v-on:click="saveBlog">保存blog</button>
  </div>
</template>
<style>

.uploadBlogs{
  background-color: bisque;
}

.categories{
    margin-left: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
}

.writingBlock-text{
    width: 100%;
    height: 100%;
    margin-left: 16px;
}

.category_summaries{
    margin-left: 16px;
    margin-bottom: 16px;
}

.writing{
    height: 660px;
}

.writingBlock{
    float: left;
    width: 45%;
    height: 100%;
}

.showBlock{
    float: left;
    width: 45%;
    height: 100%;
    background-color: darkseagreen;
    margin-left: 36px;
}
.type-selector{
border-color: purple;
}

.save{
    margin-top: 36px;
    width: 78px;
    height: 48px;
    background-color: darkorange;
    margin-left: 16px;
    margin-bottom: 16px;
}






</style>
<script>
    import VueMarkdown from 'vue-markdown';

    export default{

        created(){
          this.getCategories();
        },

        data() {
          return{
            blog_name:'',
            blog_type:'',
            blog_content:''
            };
        },
        components:{
          'vue-markdown': VueMarkdown
        },
        computed:{
          categories(){
            return this.$store.getters.getCategories;
          }
        },
        methods:{
          saveBlog(){
            let json = {
              name:this.blog_name,
              content:this.blog_content,
              summary:"summary",
              category:blog_type
	          };
            this.$store.dispatch("saveBlog",json);
          },
          getCategories(){
            this.$store.dispatch("getCategories");
          }
        }
    }



</script>
