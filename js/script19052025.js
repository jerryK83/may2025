(function($){
    $(function(){
        $(".mobile-icon").click(function(){
            $(".mobile-back").fadeToggle();
            $("nav ul").fadeToggle();
        });
        
        $(".hamburger").click(function(){
           if ($(this).attr("src") == "images/ikony/hamburger.png") {
               $(this).attr("src", "images/ikony/crossnew.png");
           }
            
            else {
                $(this).attr("src", "images/ikony/hamburger.png");
            }
        });
        
        $(window).resize(function(){
            if ($(window).width() > 600) {
                $("nav ul").removeAttr("style");
            }
        });
        
        $(".margin-left").click(function(){
            const testml = parseInt($(this).css("margin-left"));
            if (testml === 1) {
                $(this).animate({
                    "margin-left" : "500px"
                }, 2000);
            }
            
            else {
                $(this).animate({
                    "margin-left" : "1px"
                }, 2000);
            }
            
            
        });
        
        $(".margin-left").click(function(){
            const headertrst = $(this).find("h2");
            if (headertrst.text() === "Margin") {
                headertrst.text("Tam");
            }
            
            else {
                headertrst.text("Margin");
            }
        });
        
        $(".color").click(function(){
            const testcolor = $(this).css("background-color");
            if (testcolor === "rgb(28, 168, 133)") {
                $(this).animate({
                    "backgroundColor" : "rgb(180, 108, 103)"
                }, 2000);
            }
            
            else {
                $(this).animate({
                    "backgroundColor" : "rgb(28, 168, 133)"
                }, 1000);
            }
        });
        
        $(".opacity").click(function(){
            const testopac = parseFloat($(this).css("opacity"));
            if (testopac == 1) {
                $(this).animate({
                    "opacity" : 0.5
                }, 2000);
            }
            
            else {
                $(this).animate({
                    "opacity" : 1
                }, 1000);
            }
        });
        
        $(".opacity").click(function(){
            const testhnhg = $(this).find("h2");
            if (testhnhg.text() == "Opacity 1.0") {
                testhnhg.text("Opacity 0.5")
            }
            
            else {
                testhnhg.text("Opacity 1.0")
            }
        });
        
        $(".jq--scroll-gallery").click(function(){
            $("html, body").animate({
                scrollTop: $(".jq--gallery").offset().top
            }, 2000);
        });
        
    });
})(jQuery);