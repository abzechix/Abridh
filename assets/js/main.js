$(function () {
  new WOW().init();

  "use strict"
 $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 500) {
            $(".nav-area").removeClass("sticky");
        } else {
            $(".nav-area").addClass("sticky")
        }
    });
  // tiny slider
  var slider = tns({
    container: ".about-active",
    items: 1,
    slideBy: "page",
    autoplay: true,
    nav: false,
    autoplayTimeout: 5500,
    autoplayButtonOutput: false,
    controlsText: [
      '<i class="slideCtrl fa fa-angle-left prev" aria-hidden="true"></i>',
      '<i class=" slideCtrl fa fa-angle-right next" aria-hidden="true"></i>',
    ],
  });
  $.scrollIt();
});
