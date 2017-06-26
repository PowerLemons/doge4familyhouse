$.ajax({
	url: "https://chain.so/api/v2/get_address_balance/DOGE/ABaii5ioqYvNCsrEKogNFDUroXeLcY4zir/1",
	dataType: "text",
	success: function(data) {
		var json = $.parseJSON(data);
		var balance = json.data.confirmed_balance;

		$(".progress-bar").animate({width: (balance / 1500000 * 100).toString() + "%"}, 2000);
		$('.balance').html("&ETH;" + Math.round(balance).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " of &ETH;1,500,000 donated so far!");
	}
});

$.ajax({
	url: "https://chain.so/api/v2/address/DOGE/ABaii5ioqYvNCsrEKogNFDUroXeLcY4zir",
	dataType: "text",
	success: function(data) {
		var json = $.parseJSON(data);
		var donation = json.data.txs[0].incoming.value;
		var address = json.data.txs[0].incoming.inputs[0].address;
		
		$('.latest-donation').html("<b>LATEST DONATION:</b> &ETH;" + (Math.round(donation * 1000) / 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " by " + address);
	}
});