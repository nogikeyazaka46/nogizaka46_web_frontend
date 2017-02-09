<template>
  <div class="hello">
    <!--<aside>-->
    <!--<div class="side-image-wrapper">-->
    <!--<img src="/static/img/avatar.png" class="side-image">-->
    <!--</div>-->
    <!--<div class="accordion">-->
    <!--{% for blog_category in blogs_categories %}-->
    <!--<div class="section">-->
    <!--<input type="radio" name="accordion-1" id="section-{{blog_category[0].category}}" value="toggle"/>-->
    <!--<label for="section-{{blog_category[0].category}}" class="category-title"><span>{{blog_category[0].category}}</span></label>-->

    <!--<div class="content">-->
    <!--<ul>-->
    <!--{% for b in blog_category %}-->
    <!--<li><i class="fa fa-coffee"></i><span><a href="/blog/{{b.id}}"-->
    <!--class="category-blog-name">{{b.name}}</a></span>-->
    <!--</li>-->
    <!--{% endfor %}-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->
    <!--{% endfor %}-->
    <!--</div>-->
    <!--</aside>-->
    <!--<div id='wrap'>-->
    <!--<label id='sideMenuControl' for='sideToggle'>=</label>-->
    <!--</div>-->

    <div class="header-wrap">
      <div class="header center-container">
        <a href="/" title="美乃滋酱の个人博客" class="van-blog-name">美乃滋酱の个人博客</a>

        <div class="links">
          <a href="/archive">archive</a>
          <a href="/blog/0014473261101972d31e0092c81454086e36d443a7673ea000">about</a>
          <router-link :to="{path:'/blogs/writeBlog'}">书写Blog</router-link>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{

  }
}





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #van-blog-name{
  }






</style>
