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
      <button @click="addNewCatogory">添加新的类别</button>
    </div>

    <div v-show="showNewCategory" class="newCategory">
      <input v-model="newCategory"/>
      <button @click="submitNewCategory">提交</button>
      <button @click="cancelNewCategory">取消</button>
    </div>

    <span class="summary-title">summary:</span>
    <input type="text" v-model="blog_summary" class="summary"/>

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

.newCategory{
   margin:16px 0 16px 16px;
}

.summary{
    width: 50%;
    height: 48px;
    background-color: cadetblue;
    margin: 16px;
}

.summary-title{
  margin:0 0 16px 16px;
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
            blog_content:'',
            showNewCategory:false,
            newCategory:'',
            blog_summary:'',
            addNewBlogResult:false
            };
        },
        watch: {
        '$store.getters.getAddNewCategoryResult' () {
            this.cancelNewCategory();
            this.getCategories();
          },
        '$store.getters.getAddNewBlogResult' () {
            alert("添加成功!");
          }
        },
        components:{
          'vue-markdown': VueMarkdown
        },
        computed:{
          categories(){
            return this.$store.getters.getCategories;
          },
          getAddNewCategoryResult(){
            return this.$store.getters.getAddNewCategoryResult;
          },
          getAddNewBlogResult(){
            return this.$store.getters.getAddNewBlogResult;
          }
        },
        methods:{
          saveBlog(){
            let json = {
              name:this.blog_name,
              content:this.blog_content,
              summary:this.blog_summary,
              category:this.blog_type
	          };
            this.$store.dispatch("saveBlog",json);
          },
          getCategories(){
            this.$store.dispatch("getCategories");
          },
          addNewCatogory(){
            this.showNewCategory = !this.showNewCategory;
          },
          submitNewCategory(){
            this.$store.dispatch("addNewCategory",this.newCategory);
          },
          cancelNewCategory(){
            this.showNewCategory = !this.showNewCategory;
          }
        }
    }

</script>
