//var worker = new Worker(chrome.extension.getURL('js/MLWorker.js'));
chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
	switch(request.type){
		//TODO
		case "index-opened"
		break;
	}
	return true;
});

function addRating (id, rating) {
	//TODO
}

function predictRating (id, rating) {
	//TODO
}

function sync() {
	
}