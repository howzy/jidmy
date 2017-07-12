<template>
  <swiper :options="swiperOption2" ref="mySwiper2">
    <!-- slides -->
    <swiper-slide><img src="../assets/img/brand_1.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_2.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_3.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_4.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_5.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_6.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_7.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_8.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_9.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_10.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_11.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_12.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_13.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_14.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_15.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_16.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_17.jpg" alt="轮播图"></swiper-slide>
    <swiper-slide><img src="../assets/img/brand_18.jpg" alt="轮播图"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption2: {
        notNextTick: true,
        autoPlay: 1000,
        // loop: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        slidesPerView: 4,
        slidesPerColumn: 3
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  /*width: 790px;*/
}
.swiper-slide {
  img {
    display: block;
    margin: 0 auto;
    margin-bottom: 15px;
  }
}
</style>
