$(window).scroll(scrollHandlerOne);
function scrollHandlerOne({
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $navsection.removeClass('navbar').addclass('navbarscroll'); $navsection.removeClass('navbrandlogo').addclass('navbrandlogoscroll');
            $navsection.removeClass('myscicon').addclass('mysciconscroll');
            $navsection.removeClass('nav-link').addclass('nav-linkscroll');
            $navsection.removeClass('navbar-toggler').addclass('navbar-togglerscroll');
        } else {
            $navsection.removeClass('navbarscroll').addclass('navbar'); $navsection.removeClass('navbrandlogoscroll').addclass('navbrandlogo'); $navsection.removeClass('mysciconscroll').addclass('myscicon');
            $navsection.removeClass('nav-linkscroll').addclass('nav-link'); $navsection.removeClass('navbartogglerscroll').addclass('navbar-toggler');
        }
});