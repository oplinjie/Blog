(function($) {
  
    // Cache selectors
    var lastId,
    topMenu = $(".header"),
    topMenuHeight = 60,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      
      if (item.length) { 
         return item; 
      }
    });

    if($(window).width()<=767){
      topMenuHeight = 0;
    }

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = $(this).attr("href");
      var offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
      
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 1200);
      
      e.preventDefault();
    });
    
    // Bind to scroll
    $(window).scroll(function(){

      /* Change navigation header on scroll
      -------------------------------------- */
      if($(window).width() > 767) {
        if ($(this).scrollTop() < 100){
          $('.header').addClass("big-header");        
        }
        else {
          $('.header').removeClass("big-header");
        }  
      } else {
        $('.header').removeClass("big-header");
      }
    });

    //mobile menu and desktop menu
    $(".header").css({"right":-1500});
    $(".header").click(function(){
        $(".header").show();
        $(".header").animate({ "right":0 });
        return false;
    });
    $(window).on("load resize", function(){
        if($(window).width()>767){
          $(".header").css({"right":-1500});

          if ($(window).scrollTop() < 100){
            $('.header').addClass("big-header");        
          }
          else {
            $('.header').removeClass("big-header");
          } 
        }
        else {
          $('.header').removeClass("big-header");
        }
    });

    $("#responsive-menu a").click(function(){
      $("#responsive-menu").hide();
  });

})(jQuery);


$(document).ready(function(){
  if($(window).width() > 767) {
    if ($(window).scrollTop() < 100){
     $('.header').addClass("big-header");
   }
   else {
     $('.header').removeClass("big-header"); 
   }    
 }
});