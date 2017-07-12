<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><a href=""><img src="../assets/img/bg1.jpg" alt="轮播图"></a></swiper-slide>
    <swiper-slide><a href=""><img src="../assets/img/bg2.jpg" alt="轮播图"></a></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: 3000,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect: 'fade'
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
.swiper-slide {
  width: 100%;
  height: 850px;
  a {
    display: flex;
    justify-content: center;
  }
}
</style>
