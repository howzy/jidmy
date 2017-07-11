<template>
  <div>
    <header class="header">
      <nav class="nav">
        <div class="container">
          <div class="nav-logo">
            <router-link class="nav-item" to="/">
              <img src="../assets/img/logo.png" alt="" class="logo">
            </router-link>
          </div>
          <div class="nav-list">
            <router-link class="nav-item" v-for="(menu, key) in menuList" :key="key" :to="menu.path">{{menu.name}}</router-link>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {name: '首页', path: ''},
        {name: '企业文化', path: 'culture'},
        {name: '新闻动态', path: 'news'},
        {name: '名品展示', path: 'product'},
        {name: '招商加盟', path: 'join'},
        {name: '关于礼享', path: 'about'},
        {name: '服务中心', path: 'service'}
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '../style/variable';

  .header {
    min-height: 65px;
    background-color: $headerbg;
  }
  .nav {
    position: relative;
    background-color: $headerbg;
    z-index: 30px;

    .container {
      width: 1220px;
      margin: 0 auto;
    }
    .nav-logo {
      float: left;
    }
    .nav-item {
      color: #fff;
      img {
        max-height: 2.4rem;
      }
    }
    .nav-list {
      float: right;
    }
  }
</style>
