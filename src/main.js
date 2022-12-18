$('#valueNif').on("focusout", function(){
	if ($(this).val().length !== 9) {
		$('.error-nif').removeClass('d-none')
	} else {
		$('.error-nif').addClass('d-none')
	}
});