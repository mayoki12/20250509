var nav = function () {
	var $trigger = $('.nav_trigger');
	var $menu = $('.menu');
	var $body = $('body');

	$trigger.on('click', function () {
		if (!$body.hasClass('open')) {
			$body.addClass('open');
			$menu.velocity('stop').velocity({ translateX: [0, '100%'] }, {
				duration: 500,
				easing: [0.19, 1, 0.22, 1]
			});
		} else {
			$body.removeClass('open');
			$menu.velocity('stop').velocity({ translateX: '100%' }, {
				duration: 500,
				easing: [0.19, 1, 0.22, 1]
			});
		}
	});
};

var menu = function () {
	var $trigger = $('.menu .open_trigger');

	$trigger.on('click', function (e) {
		e.preventDefault();
		var $dl = $(this).parents('dl');
		if (!$dl.hasClass('is_open')) {
			$dl.addClass('is_open');
			$dl.find('dd').stop(true).slideDown(300);
		} else {
			$dl.removeClass('is_open');
			$dl.find('dd').stop(true).slideUp(300);
		}
	});
};

$(function () {
	new nav();
	new menu();
});
