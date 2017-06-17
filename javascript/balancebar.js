$.ajax({
	url: "https://chain.so/api/v2/get_address_balance/DOGE/DFundmtrigzA6E25Swr2pRe4Eb79bGP8G1/500",
	dataType: "text",
	success: function(data) {
		var json = $.parseJSON(data);
		var balance = (json.data.confirmed_balance);

		$(".progress-bar").animate({width: (balance / 15000000 * 100).toString() + "%"}, 2000);
		$('.balance').html("&ETH;" + Math.round(json.data.confirmed_balance).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " of &ETH;1,500,000 donated so far!");
	}
});