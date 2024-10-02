$(function () {
    // 대상을 변수로 저장
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");
    const duration = 300; //0.3초

    // 메뉴에 마우스가 들어왔을때
    $menu.on("mouseenter", function () {
        //  stop() : 현재 진행 중인 애니메이션 즉시 중지
        $(this).find($submenu).stop().slideDown();
        $(this).addClass("on");
    });
    // 메뉴에 마우스가 나갔을 때
    $menu.on("mouseenter", function () {
        $submenu.stop().slideUp(duration);
        $menu.removeeClass("on");
    });
});
