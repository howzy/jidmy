<template>
  <div class="join">
    <div class="join_bg"></div>
    <div class="container">
      <h3>招商加盟</h3>
      <div class="rule">
        <div class="item">
          <div class="left">1</div>
          <div class="right">
            <h5 class="title">加盟优势</h5>
            <p class="content">公司秉承信誉至上，合作共赢的原则，携手众多知名品牌，实现互联网OTO的销售模式。给客户最便捷，最优良的服务。</p>
          </div>
        </div>
        <div class="item">
          <div class="left">2</div>
          <div class="right">
            <h5 class="title">市场前景</h5>
            <p class="content">吉鼎不是单纯的买卖产品，而是把握商业模式凝聚在名品里，用商业模式重构一个健康的，全新的商业生态体系，而吉鼎目前在做的，就是资源整合，跨界营销。</p>
          </div>
        </div>
        <div class="item">
          <div class="left">3</div>
          <div class="right">
            <h5 class="title">加盟须知</h5>
            <p class="content">吉鼎名品采用国际标准化连锁经营，并以O2O(线上下单、线下配送)互联网思维+开展业务。因此省去了代理等中间环节，让加盟商拥有超强竞争力及高额利润空间。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .container {
    width: 1220px;
    margin: 0 auto;
    padding: 40px 0;
  }
  .join {
    .join_bg {
      width: 100%;
      height: 645px;
      background: url('../assets/img/join_bg.jpg') center top no-repeat;
    }
    h3 {
      font-size: 24px;
      text-align: center;
    }
    .rule {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item {
        .left {
          width: 45px;
          height: 45px;
          line-height: 45px;
          font-size: 24px;
          color: #fff;
          background: #0090ff;
          border-radius: 50%;
          text-align: center;
          margin-right: 40px;
        }
      }
    }
  }
</style>
