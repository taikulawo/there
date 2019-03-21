/* eslint-disable */
$(function () {
    const mobileWidth = 768
    var isMobile = false
    var navBtn = $(".navbar-toggle");
    var navMenu = $(".menu");
    navBtn.on("click", function (e) {
        if (navMenu.is(":visible")) {
            navMenu.hide()
        } else {
            showFlex(navMenu)
        }
        e.stopPropagation()
    });

    $("body").on("click", function (e) {
        if (!navMenu[0].contains(e.target) && isMobile && navMenu.is(':visible')) {
            navMenu.hide()
            e.preventDefault()
        }
    })

    $(window).on("resize", throttle(() => {
        if (window.innerWidth <= mobileWidth) {
            isMobile = true
            return
        }
        isMobile = false
    }, 300));

    (function () {
        var a
    }());

    $(function () {
        let sidebar = $('.sidebar')
        let body = $('body')
        let index = $('.index-posts')
        let postPage = $('.post-page')
        $.fn.replaceClass = function (src, dst) {
            $(this).hasClass(src) ?
                $(this).removeClass(src).addClass(dst)
                :
                $(this).removeClass(dst).addClass(src)
        }
        $('#toggle-sidebar').on('click', function () {
            // index.replaceClass('col-lg-10 col-xl-10', 'col-lg-8 col-xl-8')
            //   postPage.replaceClass('col-lg-10 col-xl-10','col-lg-8 col-xl-8')
            if (sidebar.is(":visible")) {
                sidebar.toggleClass("sidebar-open")
                if (sidebar.hasClass("sidebar-open")) {
                    body.velocity("stop").velocity({
                        paddingLeft: "300px"
                    }, {
                            duration: 200
                        })
                    sidebar.velocity("stop").velocity({
                        translateX: "300px"
                    }, {
                            duration: 200
                        })
                    $(this).velocity("stop").velocity({
                        rotateZ: '180deg',
                    }, {
                            duration: 200
                        })
                } else {
                    body.velocity("stop").velocity({
                        paddingLeft: "0px"
                    }, {
                            duration: 200
                        })
                    sidebar.velocity("stop").velocity({
                        translateX: "0px"
                    }, {
                            duration: 200
                        })
                    $(this).velocity("stop").velocity({
                        rotateZ: '0deg',
                    }, {
                            duration: 200
                        })
                }
            }
        })
    });

    (function () {
        let toggleSite = $(".toggle-info")
        if (toggleSite.length === 0){
            return
        }
        let siteInfo = $(".site-info")
        let siteToc = $(".sidebar-toc")
        toggleSite.on("click", function () {
            if (siteInfo.css("display") === "none") {
                siteInfo.show()
                siteToc.hide()
                return
            }
            siteInfo.hide()
            siteToc.show()
        })
    }());

    $(window).trigger("resize")

    function showFlex(item) {
        item.css("display", "flex")
    }
});