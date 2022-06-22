$(document).ready(function () {
  $(".slider").slick({
    variableWidth: true,
    dots: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
    ],
  });
});
