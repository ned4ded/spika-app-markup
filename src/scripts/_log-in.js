export default () => {
	$(".js-login-trigger").on("click", function(e) {
		$(".js-navbar").addClass("is-login");
		$(".js-login-focus").focus();
		$("body").addClass("is-fixed");
	});
}
