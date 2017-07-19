<template>
  <div class="product">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><a href=""><img src="../assets/img/bg1.jpg" alt="轮播图"></a></swiper-slide>
      <swiper-slide><a href=""><img src="../assets/img/bg2.jpg" alt="轮播图"></a></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="container">
      <product-box :title="'新品首发'" :productList="newCommList"></product-box>
      <product-box :title="'人气推荐'" :productList="hotCommList"></product-box>
      <product-box :title="'精品推荐'" :productList="bestSaleCommList"></product-box>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import productBox from '../components/productBox'

export default {
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
      },
      newCommList: [
        { comm_name: '丹尼尔惠灵顿男士手表时尚男表', comm_desc: '丹尼尔惠灵顿男士手表时尚男表', comm_image: '/static/product_1.jpg', comm_price: 1350, path: '/product' },
        { comm_name: '丹尼尔惠灵顿男士手表时尚男表', comm_desc: '丹尼尔惠灵顿男士手表时尚男表', comm_image: '/static/product_1.jpg', comm_price: 1350, path: '/product' },
        { comm_name: '丹尼尔惠灵顿男士手表时尚男表', comm_desc: '丹尼尔惠灵顿男士手表时尚男表', comm_image: '/static/product_1.jpg', comm_price: 1350, path: '/product' },
        { comm_name: '丹尼尔惠灵顿男士手表时尚男表', comm_desc: '丹尼尔惠灵顿男士手表时尚男表', comm_image: '/static/product_1.jpg', comm_price: 1350, path: '/product' }
      ],
      hotCommList: [
        { comm_name: '丹尼尔惠灵顿男士手表时尚男表', comm_desc: '丹尼尔惠灵顿男士手表时尚男表', comm_image: '/static/product_1.jpg', comm_price: 1350, path: '/product' },
        { comm_name: '丹尼尔惠灵顿男士手表时尚男表', comm_desc: '丹尼尔惠灵顿男士手表时尚男表', comm_image: '/static/product_1.jpg', comm_price: 1350, path: '/product' },
        { comm_name: '丹尼尔惠灵顿男士手表时尚男表', comm_desc: '丹尼尔惠灵顿男士手表时尚男表', comm_image: '/static/product_1.jpg', comm_price: 1350, path: '/product' },
        { comm_name: '丹尼尔惠灵顿男士手表时尚男表', comm_desc: '丹尼尔惠灵顿男士手表时尚男表', comm_image: '/static/product_1.jpg', comm_price: 1350, path: '/product' }
      ],
      bestSaleCommList: [
        { comm_name: '丹尼尔惠灵顿男士手表时尚男表', comm_desc: '丹尼尔惠灵顿男士手表时尚男表', comm_image: '/static/product_1.jpg', comm_price: 1350, path: '/product' },
        { comm_name: '丹尼尔惠灵顿男士手表时尚男表', comm_desc: '丹尼尔惠灵顿男士手表时尚男表', comm_image: '/static/product_1.jpg', comm_price: 1350, path: '/product' },
        { comm_name: '丹尼尔惠灵顿男士手表时尚男表', comm_desc: '丹尼尔惠灵顿男士手表时尚男表', comm_image: '/static/product_1.jpg', comm_price: 1350, path: '/product' },
        { comm_name: '丹尼尔惠灵顿男士手表时尚男表', comm_desc: '丹尼尔惠灵顿男士手表时尚男表', comm_image: '/static/product_1.jpg', comm_price: 1350, path: '/product' }
      ]
    }
  },
  components: {
    swiper,
    swiperSlide,
    productBox
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  width: 100%;
  height: 645px;
}
.container {
  width: 1220px;
  min-height: 600px;
  padding: 0 0 25px;
  margin: 0 auto;
}
</style>
