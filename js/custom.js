new WOW().init();

$(function () {
  $('#work').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    },
  });
});

$(function () {
  $(document).ready(function () {
    $("#team-members").owlCarousel({
      items: 3,
      autoplay: true,
      loop: true,
      autoplayHoverPause: true,
    });
  });
});

$(function () {
  $(document).ready(function () {
    $("#artist-testimonials").owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      autoplayHoverPause: true,
    });
  });
});

$(function () {
  $(document).ready(function () {
    $("#clients-list").owlCarousel({
      items: 6,
      smartSpeed: 700,
      autoplay: true,
      loop: true,
    });
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      $("nav").removeClass("navbar-color");
    } else {
      $("nav").addClass("navbar-color");
    }
  });
});

$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();

    var section = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 1250);
  });
});

$(function () {
  $(".home-btn a").click(function (event) {
    event.preventDefault();

    var section = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 1250);
  });
});

$(function () {
  $(".navbar-collapse ul li a").on("click touch", function () {
    $(".navbar-toggler").click();
  });
});