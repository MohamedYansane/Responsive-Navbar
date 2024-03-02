$(".menu > ul > li ").click(function (e) {
  //remove active from already selected
  $(this).siblings().removeClass("active");
  //add active to clicked
  $(this).toggleClass("active");
  //if has sub openend it
  $(this).find("ul").slideToggle();
  //close other  submenu if any open
  $(this).siblings().find("ul").slideUp();
  //remove active class of sub menu items
  $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function () {
  $(".sidebar").toggleClass("active");
});
