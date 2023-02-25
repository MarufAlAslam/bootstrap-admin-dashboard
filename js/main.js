$(".notification-btn").click(function () {
  $(".notification-dropdown").toggleClass("show");
});

// toggle sidebar on larger screens when clicking the menu icon > 768px
if ($(window).width() > 768) {
  $(".menuBtn").click(function () {
    $(".menu").toggleClass("show");
    $(".sidebar-holder, .col-lg-9.col-md-8.p-0").toggleClass("active");
  });
}
