// $("ul").on("mouseenter","li",function(){
//   $(this).addClass("hover");
//
//
// });
// $("ul").on("mouseleave","li",function(){
//   $(this).removeClass("hover");
//
// });
//
//
// $("ul").on("mouseenter","li",function(){
//   $(this).addClass("hover");
//
//
// });
// $("ul").on("mouseleave","li",function(){
//   $(this).removeClass("hover");
//
// });


$(".menu-toggle").on("click",function(){
  $(".site-nav").toggleClass("siteNavOpen",500);
  $(this).toggleClass("open");

});
