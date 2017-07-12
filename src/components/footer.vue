<template>
  <div>
    <footer>
      <div class="footer">
        <div class="container">
          <div class="siteinfo">
            <div class="content">
              <div class="nav-left">
                <h3>网站导航</h3>
                <ul>
                  <li v-for="(menu, key) in menuList" :key="key" v-if="menu.path !== '/'">
                    <router-link :to="menu.path">{{menu.name}}</router-link>
                  </li>
                </ul>
              </div>
              <div class="nav-left">
                <h3>联系电话</h3>
                <p>（工作日） 4008-117-998</p>
                <p>（工作日） 0571-86819079</p>
                <p>（非工作日） 17367059226</p>
              </div>
              <div class="nav-left">
                <h3>地址</h3>
                <p>浙江省杭州市下城区白石路318号</p>
                <p>海蓝财富中心南楼1608室</p>
              </div>
              <div class="nav-left">
                <h3>官方微信</h3>
                <p>
                  <img src="../assets/img/wechat.jpg" alt="官方微信">
                </p>
              </div>
            </div>
          </div>
          <div class="copyright">
            <h4>Copyright © <span>2013</span> All Rights Reserved.</h4>
            <h5 class="company">杭州吉鼎贸易有限公司</h5>
            <h6>
              <a href="http://www.miibeian.gov.cn/" target="_blank">
                <span>浙ICP备16030620号-1</span>
                <span>浙ICP证16030620号</span>
                <span>浙公网安备33010502003609</span>
              </a>
            </h6>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {name: '首页', path: '/'},
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
.footer {
  background-color: #fafafa;
  border-top: 1px solid #e6e6e6;
  .container {
    width: 1220px;
    margin: 0 auto;
  }
  .copyright {
    color: #434d55;
    font-size: 12px;
    padding: 40px 0;

    h4, h5 {
      float: left;
      height: 15px;
      line-height: 15px;
      color: #757575;
    }

    h5 {
      margin-left: 3px;
    }
    h6 {
      clear: both;
      padding: 10px 0 0;
      height: 25px;
      a {
        color: #bdbdbd;
        font-size: 12px;
        height: 12px;
        line-height: 1;
      }

      span {
        margin-right: 10px;
        color: #bdbdbd;
        font-size: 12px;
        height: 12px;
        line-height: 1;
      }
    }
  }
}
.siteinfo {
  padding: 40px 0 32px;
  border-bottom: 1px solid #e6e6e6;
  .content::after {
    content: '';
    display: table;
    clear: both;
  }
  .nav-left {
    float: left;
    width: 20%;
    h3 {
      color: #646464;
      font-size: 14px;
      padding: 0 0 14px;
    }
    p, li {
      color: #c3c3c3;
      font-size: 12px;
      padding: 6px 0;
      a {
        color: #c3c3c3;
      }
    }
    img {
      cursor: pointer;
    }
  }
}
</style>
