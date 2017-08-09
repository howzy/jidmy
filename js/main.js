(function ($) {
  new WOW().init();

  // 滚动切换顶部导航栏状态
  var count = 0;
  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    // 首次滚动至该位置触发
    if ($(document).scrollTop() > $('#count').offset().top - $(window).innerHeight() && !count) {
      count = 1;
      numberCountUp("count-1", 20);
      numberCountUp("count-2", 100);
      numberCountUp("count-3", 10000);
      numberCountUp("count-4", 500);
    }
  });

  // 轮播图
  var mySwiper = new Swiper('.swiper-container', {
    autoplay: 3000,
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true
  });

  // 数字增加动画
  function numberCountUp(id, value) {
    var options = {
      useEasing: false, // 缓动效果
      useGrouping: false, // 是否每千位分隔，例如：1,000,000
      separator: ',', // 分隔符
      suffix: '+' // 后缀
    };
    // 参数含义：动画元素id，初始值，最终值，小数位，动画持续时间，参数
    new CountUp(id, 0, value, 0, 2, options).start();
  }

  // 滚动至锚点
  $(function () {
    $('.navbar-nav li a').bind('click', function (event) {
      var $anchor = $(this);
      if ($anchor.attr('href') == '#' || $anchor.attr('href') == '' || $anchor.attr('href') == undefined) return;
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
    $('.page-scroll a').bind('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });
})(jQuery);