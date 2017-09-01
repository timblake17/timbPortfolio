
////////navbar hover

$(".navBar").on("mouseenter",function(){
  $(this).addClass("hover");
});

  $(".navBar").on("mouseleave",function(){
    $(this).removeClass("hover");
  });


  ////////////

  $(".projectDiv").on("mouseenter",function(){
    $(this).addClass("scale");
  });

    $(".projectDiv").on("mouseleave",function(){
      $(this).removeClass("scale");
    });
