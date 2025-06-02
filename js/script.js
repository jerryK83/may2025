(function($){
    $(function(){
        $(".jq--scroll-slider").click(function(){
           $("html, body").animate({
               scrollTop: $(".jq--slider").offset().top
           }, 2000);
        });
        
        $(".mobile-icon").click(function(){
           $(".mobile-back").fadeToggle(); 
           $("nav ul").fadeToggle(); 
        });
        
        $(window).resize(function(){
           if ($(window).width() > 600) {
               $("nav ul").removeAttr("style");
           } 
        });
        
        $(".hamburger").click(function(){
           if ($(".hamburger").attr("src") == "images/ikony/hamburger.png") {
               $(".hamburger").attr("src", "images/ikony/crossnew.png");
           }
            else {
                $(".hamburger").attr("src", "images/ikony/hamburger.png");
            }
        });
        
        $(".first-box, .second-box").click(function(){
            const testopacity = $(this).css("opacity");
            if (testopacity == 1) {
                $(this).fadeTo(2000, 0.5);
            }
            
            else {
                $(this).fadeTo(2000, 1);
            }
        });
        
        $(".third-box").click(function(){
            $(this).fadeOut(2000).fadeIn(2000);
        });
        
        $(".sixth-box, .fifth-box").click(function(){
            const testfont = $(this).css("font-size");
            if (testfont === "30px") {
                $(this).animate({
                    "font-size" : "50px"
                }, 2000);
            }
            
            else {
                $(this).animate({
                    "font-size" : "30px"
                }, 2000);
            }
        });
        
        $(".por-one img").click(function(){
           const testmargin = $(this).css("margin-left");
            if (testmargin === "0px") {
                $(this).animate({
                    "margin-left" : "350px"
                },3000);
            }
            
            else {
                $(this).animate({
                    "margin-left" : "0px"
                }, 2000);
            }
        });
        
    });
})(jQuery);