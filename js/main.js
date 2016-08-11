new WOW().init();
$(window).scroll(function() {
	if($(document).scrollTop() > 100) {
		$('header').addClass('fixed animated slideInDown');
	} else {
		$('header').removeClass('fixed animated slideInDown');
	}
});

$(window).scroll(function() {
	if($(document).scrollTop() > 300) {
		$('#free').addClass('fix animated slideInDown');
	} else {
		$('#free').removeClass('fix animated slideInDown');
	}
});				 

$(".fullSlide").hover(function() {
		$(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
	},
	function() {
		$(this).find(".prev,.next").fadeOut()
	});
$(".fullSlide").slide({
	titCell: ".hd ul",
	mainCell: ".bd ul",
	effect: "fold",
	autoPlay: true,
	autoPage: true,
	trigger: "click",
	startFun: function(i) {
		var curLi = jQuery(".fullSlide .bd li").eq(i);
		if(!!curLi.attr("_src")) {
			curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
		}
	}
});

$(function() {
	$(".service ul li").each(function(index) {
		$(this).hover(function() {
			$(".service ul li img:eq(" + index + ")").stop().attr("src","img/b"+(index+1)+".png");
			$(this).css("cursor", "pointer");
		}, function() {
			$(".service ul li img:eq(" + index + ")").stop().attr("src","img/k"+(index+1)+".png");
		})
	})
})
