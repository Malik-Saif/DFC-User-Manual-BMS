$(document).ready(function() {
    //=========================================
    //					navbar
    //=========================================
    $(".btn-toggle").on("click touch", function () {
        $(".navbar").toggle();
    });


    // $(function() {
    //     $("#header .nav-link").on("click touch", function() {
    //         $(".btn-toggle").click();
    //     });
    // });

    $(function() {
        $("#header .dropdown").on("click touch", function() {
            $("#header .sub-menu").toggle();
        });
    });

    $(".btn-sidebar-toggle").on("click touch", function () {
        $("#aside").toggle();
    });

    $(".aside-link").on("click touch", function () {
        $(".aside-link").removeClass('active');
        $(".aside-subnav-link").removeClass('active');
        $(this).addClass('active');
    });

    $(".aside-subnav-link").on("click touch", function () {
        $(".aside-link").removeClass('active');
        $(".aside-subnav-link").removeClass('active');
        $(this).addClass('active');
    });

    $(function() {
        $(".aside-link, .aside-subnav-link").on("click touch", function() {
            $(".btn-sidebar-toggle").click();
        });
    });
});