<template>
  <div id="app">
    <top-menu></top-menu>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import topMenu from './components/topMenu'
import foot from './components/footer'

export default {
  name: 'app',
  components: {
    topMenu,
    foot
  }
}
</script>

<style lang="scss">
@import './style/common';

body {
  background-color: #ededed;
}
</style>
