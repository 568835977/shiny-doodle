$(document).ready(function () {
    $(".d1").mouseover(function () {

        $(this).addClass("d2");
    });
    $(".d1").mouseleave(function () {

        $(this).removeClass("d2");
    });

});