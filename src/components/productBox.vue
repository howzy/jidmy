<template>
  <div class="item-box">
    <header class="title-header">
      <h3>{{title}}</h3>
    </header>
    <div class="item" v-for="product in productList">
      <router-link :to="product.path">
        <div class="item-img">
          <img :src="product.comm_image" alt="产品图片">
        </div>
        <h5 class="title text">{{product.comm_name}}</h5>
        <h6 class="sub-title text">{{product.comm_desc}}</h6>
      </router-link>
      <div class="item-detail">
        <div class="item-btns">
          <router-link :to="product.path">查看详情</router-link>
        </div>
        <div class="item-price">￥ {{product.comm_price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productList: Array,
    title: String
  }
}
</script>

<style lang="scss" scoped>
@import '../style/product.scss';
</style>
