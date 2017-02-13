<template>
  <div id="app">
    <hello></hello>
    <router-view></router-view>
  </div>
</template>

<script>

import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello
  },
  methods:{

  }
}
</script>

<style>
#app {
    width: 660px;
    max-width: 90%;
    margin: 0 auto;
}

</style>
