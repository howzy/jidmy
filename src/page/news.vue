<template>
  <div class="news">
    <div class="bg"></div>
    <div class="container">
      <section>
        <h3>新闻动态</h3>
        <ul>
          <li v-for="item in newsList">
            <a href="javascript:alert('尽情期待！')">{{item.title}}
              <span>{{item.date}}</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsList: [
        { path: '', title: '礼享商城强势进军，引领新时代', date: '2017/07/17' },
        { path: '', title: '吉鼎名品 — 上海国际连锁加盟展览会', date: '2017/07/17' },
        { path: '', title: '热烈庆祝吉鼎名品在湖南宁乡开业', date: '2017/07/17' },
        { path: '', title: '热烈庆祝吉鼎名品在湖南湘潭开业', date: '2017/07/17' },
        { path: '', title: '热烈庆祝吉鼎名品在浙江海宁开业', date: '2017/07/17' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .bg {
    width: 100%;
    height: 645px;
    background: url('../assets/img/news_bg.jpg') center top no-repeat;
  }
  .container {
    width: 970px;
    margin: 0 auto;
  }
  .news {
    section {
      padding: 50px 0;
    }
    h3 {
      text-align: center;
      font-size: 24px;
      margin-bottom: 20px;
    }
    li {
      font-size: 18px;
      line-height: 18px;
      margin: 15px 0;
      a {
        color: #666;
        display: block;
      }
      span {
        float: right;
        color: #666;
      }
    }
  }
</style>
