<template>
  <div class="hello">

    <div class="header-wrap">

      <img class="nogizaka_logo" src="../assets/logo.png" @click="refresh">

      <div class="center-container">
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

  },
  methods:{
    refresh(){
      this.$router.push({path:'/'});
    }
  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #van-blog-name{
  }
  .center-container{
    float:right;
  }
  .nogizaka_logo{
    width: 120px;
    height: 140px;
  }

  .links{
    margin: 0 auto;
    padding: 40px 0;
  }


</style>
