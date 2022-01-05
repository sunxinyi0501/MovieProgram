(function() {
    navitemLine = $(".banner-switch__line"),
    navitem = $(".home-banner__list > li"),
    boxwrap = $(".banner__item"),
    navitemLength = navitem.length;

    var updateTransformStyle = function(i) {
        var style = "rotate(" + i + "deg) translateZ(0)";
        navitemLine.css({
            "display": "block",
            "transform": style,
            "-webkit-transform": style,
            "-moz-transform": style,
            "-ms-transform": style
        });
    };

    var defaultRotate = 1.4324 * (navitemLength - 1);
    updateTransformStyle(defaultRotate);

    $(".home-banner__list > li").on("click", function() {
        var _this = this,
            navitemOrder = $(_this).index();

        $(_this).addClass("cur").siblings().removeClass("cur");
        boxwrap.eq(navitemOrder).animate({"opacity": "1"}, 500).siblings().animate({"opacity": "0"}, 200);

        var updateRotate = (1.4324 * (navitemLength - 1) - navitemOrder * 2.8648);
        updateTransformStyle(updateRotate);

        if(navitemOrder == 3) {
            $(".home-banner__mask").show();
        } else {
            $(".home-banner__mask").hide();
        }
    });
})();
