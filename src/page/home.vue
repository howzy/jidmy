<template>
  <div class="home">
    <!--轮播图-->
    <carousel></carousel>
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
  .container {
    width: 1140px;
    margin: 0 auto;
  }
  .title {
    text-align: center;
    padding: 40px 0;
    font-size: 24px;
    color: #666;
  }
  .brand {
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
</style>
