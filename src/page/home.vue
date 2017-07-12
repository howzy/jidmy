<template>
  <div class="home">
    <!--轮播图-->
    <carousel></carousel>
    <!--合作品牌-->
    <brand-list></brand-list>
  </div>
</template>

<script>
import carousel from '../components/carousel'
import brandList from '../components/brandList'

export default {
  components: {
    carousel,
    brandList
  }
}
</script>
