$(document).ready(function() {
	chrome.runtime.sendMessage({type: "index-opened"}, data: {}, function(response){
		//TODO: update the view
	});
});
