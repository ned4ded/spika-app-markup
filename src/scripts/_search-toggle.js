export default () => {
	$(".js-search-trigger").on("click", function(e) {
		$(".js-search").addClass("is-open");
		$(".js-search-input").focus();
		$("body").addClass("is-fixed");
	});

	$(".js-search-close").on("click", function(e) {
		$(".js-search").removeClass("is-open");
		$("body").removeClass("is-fixed");
	});
}
