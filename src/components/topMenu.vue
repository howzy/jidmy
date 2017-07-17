<template>
  <div>
    <header class="header has-shadow">
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
        {name: '首页', path: '/'},
        {name: '关于礼享', path: 'about'},
        {name: '新闻动态', path: 'news'},
        {name: '名品展示', path: 'product'},
        {name: '招商加盟', path: 'join'},
        {name: '服务中心', path: 'service'}
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '../style/variable';

  @media screen and (max-width: 1192px) {
    .container {
      max-width: 1152px;
    }
  }
  @media screen and (max-width: 1000px) {
    .container {
      margin: 0 auto;
      max-width: 890px;
    }
  }
  
  .header {
    min-height: 65px;
    background-color: $headerbg;
    display: flex;
    justify-content: center;
    align-items: center;
    &.has-shadow {
      box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
    }
  }
  .nav {
    position: relative;
    background-color: $headerbg;
    z-index: 30;
    width: 100%;

    .container {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
    }
    .nav-item {
      color: #c8c8c8;
      &:hover, &.router-link-exact-active {
        color: #fff;
      }
      img {
        max-height: 2.4rem;
      }
    }
  }
  .nav-list {
    .nav-item {
      padding: 0 25px;
    }
  }
</style>
