<template>
  <div id="app">
    <img class="vue-logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
    width: 660px;
    max-width: 90%;
    margin: 0 auto;
}

.vue-logo{
    width: 80px;
    height: 80px;
}

</style>
