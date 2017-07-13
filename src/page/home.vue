<template>
  <div class="home">
    <!--轮播图-->
    <carousel></carousel>
    <!-- 四大生态 -->
    <div class="container ecology">
      <h3 class="title">四大生态</h3>
      <ul class="ecology-list">
        <li class="ecology-item">
          <img src="../assets/img/ecology_icon_1.png" alt="">
          <p>线上线下一站式企业</p>
          <p>积分生态商城</p>
        </li>
        <li class="ecology-item">
          <img src="../assets/img/ecology_icon_2.png" alt="">
          <p>低成本，集约化</p>
          <p>产品供应链生态</p>
        </li>
        <li class="ecology-item">
          <img src="../assets/img/ecology_icon_3.png" alt="">
          <p>1 + N 商户</p>
          <p>营销生态</p>
        </li>
        <li class="ecology-item">
          <img src="../assets/img/ecology_icon_4.png" alt="">
          <p>消费就是挣钱，分享就是创业</p>
          <p>消费生态</p>
        </li>
      </ul>
    </div>
    <!-- 我们的优势 -->
    <div class="advantage">
      <h3 class="title">我们的优势</h3>
      <div class="advantage-content">
        <div class="inner">
          <div class="inner-left">
            <p class="inner-title">我们的优势</p>
            <p class="inner-item one">20余年经验铸就坚硬的品牌理念</p>
            <p class="inner-item two">FINAL　QUALITY　OF　INTERNATIONAL</p>
            <p class="inner-item three">ADVANCED　TECHNOLOGY</p>
          </div>
          <div class="inner-right">
            <div class="inner-item">
              <img src="../assets/img/advantage_icon_1.png">
              <div>
                <p class="inner-title">国际品牌认证</p>
                <p>一系列突破性的创新给我了我们公司和我们的产品当之无愧的全球声誉</p>
              </div>
            </div>
            <div class="inner-item">
              <img src="../assets/img/advantage_icon_2.png">
              <div>
                <p class="inner-title">多年礼品经验</p>
                <p>我们多年的礼赠品经验，带给您最好的产品和服务，让您用的放心</p>
              </div>
            </div>
            <div class="inner-item">
              <img src="../assets/img/advantage_icon_3.png">
              <div>
                <p class="inner-title">卓越技术团队</p>
                <p>卓越的技术团队，给您高品质，高质量的产品，给您一个不同的供应商</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--合作品牌-->
    <!-- <brand-list></brand-list> -->
    <div class="container brand">
      <h3 class="title">合作品牌</h3>
      <ul class="brand-list">
        <li class="brand-item"><img src="../assets/img/brand_1.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_2.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_3.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_4.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_5.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_6.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_7.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_8.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_9.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_10.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_11.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_12.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_13.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_14.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_15.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_16.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_17.jpg" alt=""></li>
        <li class="brand-item"><img src="../assets/img/brand_18.jpg" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
import carousel from '../components/carousel'

export default {
  components: {
    carousel
  }
}
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 1220px) {
    .advantage {
      width: 1220px;
    }
  }
  .container {
    width: 1220px;
    margin: 0 auto;
  }
  .title {
    text-align: center;
    padding: 40px 0;
    font-size: 24px;
    color: #666;
  }
  .brand {
    width: 1140px;
    margin: 0 auto;
    .brand-list {
      font-size: 0;
      overflow: hidden;
      padding: 10px 0 40px;
    }
    .brand-item {
      display: inline-block;
      margin: 0 7px 7px 0;
      cursor: pointer;
    }
  }
  .ecology-list {
    display: flex;
    justify-content: space-between;
    padding: 10px 0 40px;
    .ecology-item {
      width: 20%;
      padding: 0 10px;
      text-align: center;
      transition: all .5s ease-in-out;

      img {
        width: 50%;
        margin-bottom: 30px;
      }
      p {
        color: #424242;
        font-size: 15px;
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .advantage-content {
    background-image: url('../assets/img/advantage_bg.png');
    background-position: center top;
    height: 590px;
    position: relative;
    .inner {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 1220px;
      margin: auto;
      height: 470px;
    }
    .inner-left {
      width: 500px;
      position: relative;
      .inner-title {
        font-size: 46px;
        color: #ffe469;
        position: absolute;
        top: 95px;
        left: 160px;
      }
      .inner-item {
        color: #fff;
        position: absolute;
        &.one {
          top: 165px;
          left: 160px;
        }
        &.two {
          top: 365px;
          left: 60px;
        }
        &.three {
          top: 395px;
          left: 155px;
        }
      }
    }
    .inner-right {
      width: 720px;
      height: 100%;
      margin-left: 545px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .inner-item {
        display: flex;
        align-items: center;
      }
      img {
        margin-right: 25px;
        transition: all .5s ease-in-out;
        &:hover {
          transform: rotate(360deg);
        }
      }
      p {
        color: #fff;
        margin: 8px 0;
        &.inner-title {
          font-size: 20px;
          color: #ffe469;
        }
      }
    }
  }
</style>
