<template>
  <div id="app">
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import topMenu from './components/topMenu'

export default {
  name: 'app',
  components: {
    topMenu
  }
}
</script>

<style lang="scss">
@import './style/common';

</style>
