var convnet = localStorage['convnet'];
var convnet_training;

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
	switch(request.type){
		//TODO
		case "index-opened":
		break;
	}
	return true;
});

function addRating (id, rating) {
	//TODO
	sync();
	var train_data = localStorage['train_data'];
	var train_labels = localStorage['train_labels'];
	if (!train_data || !train_labels) {
		train_data = []
		train_labels = []
	}
	train_data.push(getFeaturesOfID(id));
	train_labels.push(rating);
	localStorage.setItem('train_labels') = train_labels;
	localStorage.setItem('train_data') = train_data;
	convnet_training = new convnetjs.MagicNet(train_data, train_labels);
	convnet_training.onFinishBatch(finishedBatch);

	//TODO: better alert
	alert("Training!");
}

function finishBatch {
	localStorage.setItem('convnet') = convnet_training;
	convnet = convnet_training;
	//TODO: better alert
	alert("Finished!");
}

function predictRating (id) {
	//TODO
	return convnet.predict(getFeaturesOfID(id));
}

// Helpers
function getFeaturesOfID(id) {
	// some magical feature extractor
	return id;
}