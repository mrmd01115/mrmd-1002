$(function () {
    const $window = $(window);
    const $header = $("header");
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");
    const duration = 300; //0.3초

    $menu.on("mouseenter", function () {
        $(this).addClass("on");
        $header.addClass("active");
        $submenu.stop().slideDown(duration);
    });

    $menu.on("mouseleave", function () {
        $(this).addClass("on");
        $header.removeClass("active");
        $submenu.stop().slideUp(duration);
    });

    $window.on("wheel", function (e) {
        // console.log(e);

        if ((e.originalEvent, wheelDelta > 0)) {
            // 휠을 올렷을때
            $header.removeClass("hide");
        }
        // 휠을 내렷을때
        else {
            $header.addClass("hide");

            // 삼향조건연상자
            // 조건 ? 참일때 동작 : 거짓일때 동작
            e.originalEvent.wheelDelta > 0
                ? $header.removeClass("hide")
                : $header.addClass("hide");
        }
    });
});
