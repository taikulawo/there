$(function () {
    var imgLists = $(".post-content img");
    for (var i = 0; i < imgLists.length; i++) {
        var $a = $(
            "<a href=\"" +
            imgLists[i].src +
            "\" data-fancybox=\"group\" data-caption=\"" +
            imgLists[i].alt +
            "\" class=\"fancybox\"></a>"
        );
        var alt = imgLists[i].alt;
        var $wrap = $(imgLists[i]).wrap($a);
        if (alt) {
            $wrap.after("<div class=\"img-alt\">" + alt + "</div>");
        }
    }

    $().fancybox({
        selector: "[data-fancybox]",
        loop: true,
        transitionEffect: "slide",
        toolbar:true
    });
});