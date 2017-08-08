(function ($) {
  new WOW().init();
  
  // 滚动切换顶部导航栏状态
  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  // 轮播图
  var mySwiper = new Swiper('.swiper-container', {
    autoplay: 3000,
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true
  });
})(jQuery);