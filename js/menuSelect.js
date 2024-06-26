$(document).ready(function() {

	var $menu_id = window.location.hash.substring(1)
	if ($menu_id == "") {
		$menu_id = "menu_" + "home";
	}
	else {
		$menu_id = "menu_" + $menu_id;
	}
	$(".nav-link").each(function() {
		$(this).removeClass("active");
		if ($(this).attr("target-menu") == $menu_id) {
			$(this).addClass("active");
		}

		$(".menu_select").each(function() {
			if ($(this).attr("id") == $menu_id) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	});

	$(".nav-link").click(function() {
		$(".nav-link").removeClass("active");
		$(this).addClass("active");

		menu_id = $(this).attr("target-menu");
		$(".menu_select").each(function() {
			if ($(this).attr("id") == menu_id) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	});

});
