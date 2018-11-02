$(function(){
    "use strict";
    let savedScrollPosition = 0;
    let navbar = $(".navbar-custom");
    $(window).on("scroll",throttle(function(){
        if(isUp()){
            navbar.addClass("navbar-visible");
        }else{
            navbar.removeClass("navbar-visible");
            $("#go-up").velocity("stop").velocity({
                translateX:-30,
                rotateZ:360,
                opacity:1
            },{
                duration: 200
            });
        }
        navbar.addClass("navbar-fixed");
        if(window.scrollY === 0){
            navbar.removeClass("navbar-fixed navbar-visible");
            $("#go-up").velocity("stop").velocity({
                translateX: 30,
                rotateZ:360,
                opacity:0
            },{
                duration:200
            });
        }
    },200));
    
    (function(){
        let goUp = $("#go-up");
        goUp.on("click",function(){
            $("body").velocity("stop").velocity("scroll",{
                duration: 500,
                easing: "easeOutQuart"
            });
        });
    }());
    
    function isUp(){
        let isUp = false;
        if (window.scrollY > savedScrollPosition){
            isUp = false;
        }else{
            isUp = true;
        }
        savedScrollPosition = window.scrollY;
        return isUp;
    }
});