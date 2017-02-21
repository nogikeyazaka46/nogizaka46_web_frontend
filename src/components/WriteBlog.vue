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

    <div class="blogImage_uploader_wrapper">
      <span>上传新闻首图:</span>
      <form id="file-upload" method="post" action="http://upload.qiniu.com/"
            enctype="multipart/form-data">

        <input name="key" id="key" v-model="uploadedFileNameInQiniu" type="hidden">
        <input name="token" type="hidden"
               value="fTTrymZ4T669NmSFFfCbzXdf1mHXFDoubEQ81M2T:_xnTg0vGiycLSSHxuThEqsGDrSo=:eyJzY29wZSI6InJhZGFzbSIsImRlYWRsaW5lIjoxMDAwNTA4NzkxMDU0M30=">
        <input id="userfile" name="file" type="file" @change="getUploadedFileName($event.target.value)"/>

      </form>

      <button @click="uploadBlogImage" class="image-uploader-button">上传新闻首图</button>

      <img v-bind:src="imageUrl">
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

.blogImage_uploader_wrapper{
    margin-left:16px;
}

.image-uploader-button{
    position: relative;
    left: 267px;
}

.fileUpload{
  margin-left:16px;
}

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
p {
  margin:1em 0;
  line-height:1.5em;
}
table {
  font-size:inherit;
  font:100%;
  margin:1em;
}
table th{border-bottom:1px solid #bbb;padding:.2em 1em;}
table td{border-bottom:1px solid #ddd;padding:.2em 1em;}
input[type=text],input[type=password],input[type=image],textarea{font:99% helvetica,arial,freesans,sans-serif;}
select,option{padding:0 .25em;}
optgroup{margin-top:.5em;}
pre,code{font:12px Menlo, Monaco, "DejaVu Sans Mono", "Bitstream Vera Sans Mono",monospace;}
pre {
  margin:1em 0;
  font-size:12px;
  background-color:#eee;
  border:1px solid #ddd;
  padding:5px;
  line-height:1.5em;
  color:#444;
  overflow:auto;
  -webkit-box-shadow:rgba(0,0,0,0.07) 0 1px 2px inset;
  -webkit-border-radius:3px;
  -moz-border-radius:3px;border-radius:3px;
}
pre code {
  padding:0;
  font-size:12px;
  background-color:#eee;
  border:none;
}
code {
  font-size:12px;
  background-color:#f8f8ff;
  color:#444;
  padding:0 .2em;
  border:1px solid #dedede;
}
img{border:0;max-width:100%;}
abbr{border-bottom:none;}
a{color:#4183c4;text-decoration:none;}
a:hover{text-decoration:underline;}
a code,a:link code,a:visited code{color:#4183c4;}
h2,h3{margin:1em 0;}
h1,h2,h3,h4,h5,h6{border:0;}
h1{font-size:170%;border-top:4px solid #aaa;padding-top:.5em;margin-top:1.5em;}
h1:first-child{margin-top:0;padding-top:.25em;border-top:none;}
h2{font-size:150%;margin-top:1.5em;padding-top:.5em;}
h3{margin-top:1em;}
hr{border:1px solid #ddd;}
ul{margin:1em 0 1em 2em;}
ol{margin:1em 0 1em 2em;}
ul li,ol li{margin-top:.5em;margin-bottom:.5em;}
ul ul,ul ol,ol ol,ol ul{margin-top:0;margin-bottom:0;}
blockquote{margin:1em 0;border-left:5px solid #ddd;padding-left:.6em;color:#555;}
dt{font-weight:bold;margin-left:1em;}
dd{margin-left:2em;margin-bottom:1em;}
sup {
  font-size: 0.83em;
  vertical-align: super;
  line-height: 0;
}
* {
  -webkit-print-color-adjust: exact;
}
@media screen and (min-width: 914px) {
  body {
    width: 854px;
    margin:0 auto;
  }
}
@media print {
  table, pre {
    page-break-inside: avoid;
  }
  pre {
    word-wrap: break-word;
  }
}
</style>
<script>
    import VueMarkdown from 'vue-markdown';
    import {NetRequest} from '../utils/NetUtils';

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
              addNewBlogResult:false,
              imageUrl:'',
              uploadedFileNameInQiniu:'',
              uploadedFileName:''
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
              category:this.blog_type,
              image_url:this.imageUrl
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
          },
          uploadBlogImage(){
            let file_upload_data = document.getElementById("file-upload");
            NetRequest.sendFormData('http://upload.qiniu.com', new FormData(file_upload_data))
              .then((responseJson)=> {
                console.log("-----成功返回:" + responseJson + "------");
                this.imageUrl = 'http://o7zh7nhn0.bkt.clouddn.com/'+ responseJson.key;
                alert(responseJson.key);
              })
              .catch((error)=> {
                console.log("-----失败返回---");
              });
          },
          getUploadedFileName(value){
            this.uploadedFileNameInQiniu = Math.random().toString(36).substr(2) + value.match(/\.?[^.\/]+$/);
          }
        }
    }
</script>
