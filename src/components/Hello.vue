<template>
  <div class="hello">

    <div class="header-wrap">
      <div class="header center-container">
        <a href="http://baike.baidu.com/link?url=jsHPhXNdyJt4Hf4Ro67YiNLGELM1LzO0RngEVl3XYYHvfDJDsBNyN0k_QueNb-MXntHdU7MDWsbFPl3zTJRMCrGMzIDaOkF26J6rprumHmV2ud0sxLrk79Agt601REjc" title="努力,感谢,笑颜">乃木坂</a>

        <div class="links">
          <router-link :to="{path:'/blogs/writeBlog'}">书写</router-link>
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
