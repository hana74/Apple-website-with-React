// import $ from "jquery";
if ($(window).width() <= 768) {
  $(".footer-links-wrapper").addClass("someClass");
} else {
  $(".footer-links-wrapper").removeClass("someClass");
}
$(window).on("resize", function (event) {
  if ($(window).width() <= 768) {
    $(".footer-links-wrapper").addClass("someClass");
  } else {
    $(".footer-links-wrapper").removeClass("someClass");
    $(".footer-links-wrapper ul").show();
  }
});
// Footer collapse functionality
$(document).on("click", ".someClass h3", function () {
  $(this).next("ul").slideToggle();
  // $(this).toggleClass('expanded');
  $(this).toggleClass("addis");
});
// window.matchMedia("(max-device-width: 768px)").matches;
// {
//   document.querySelector(".menu").addEventListener("click", toggleMenu);
//   let menuLink = document.querySelector(".menu a");
//   let dropDown = document.querySelector("ul.dropdown");
//   let header = document.querySelector("header");
//   let isOpen = 0;

//   function toggleMenu() {
//     if (isOpen == 0) {
//       menuLink.classList.toggle("active");
//       header.classList.add("black");
//       dropDown;
//       isOpen++;
//     } else {
//       menuLink.classList.toggle("active");
//       header.classList.remove("black");
//       isOpen--;
//     }
//   }
// }

// if (window.matchMedia('(max-width: 768px)').matches)
// {
//     $(".title").on('click', function()
//     {

//         var el = $(this).next(".list-item");
//         // (el.is(':visible'))

//             el.slideToggle();

//     });
