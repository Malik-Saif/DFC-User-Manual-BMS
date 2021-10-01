$(document).ready(function() {
    
    //=========================================
    //					navbar
    //=========================================
    $(".btn-toggle").on("click", function () {
        $(".navbar").toggle();
    });

    $(".btn-sidebar-toggle").on("click", function () {
        $("#aside").toggle();
    });

    $(".aside-link").on("click", function () {
        $(".aside-link").removeClass('active');
        $(".aside-subnav-link").removeClass('active');
        $(this).addClass('active');
    });

    $(".aside-subnav-link").on("click", function () {
        $(".aside-link").removeClass('active');
        $(".aside-subnav-link").removeClass('active');
        $(this).addClass('active');
    });


    $(function() {
        $("#header .nav-link").on("click touch", function() {
            $(".btn-toggle").click();
        });
    });

    $(function() {
        $(".aside-link, .aside-subnav-link").on("click touch", function() {
            $(".btn-sidebar-toggle").click();
        });
    });


    //=========================================
    //					navbar
    //=========================================
    $(document).mouseup(function (e) {
		var container = new Array();
		container.push($('.navbar'));
		container.push($('#aside'));

		$.each(container, function (key, value) {
			if (!$(value).is(e.target) // if the target of the click isn't the container...
				&&
				$(value).has(e.target).length === 0) // ... nor a descendant of the container
			{
				$(value).hide();
			}
		});
	});
});