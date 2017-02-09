<template>
  <div id="app">
    <img class="vue-logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>

import Main from './components/Main'

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
    width: 48px;
    height: 48px;
}




</style>
