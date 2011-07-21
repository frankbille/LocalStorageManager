chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.action == "getLocalStorage") {
		var responseObject = {
			localStorage : []
		};
		for(i = 0; i < localStorage.length; i++) {
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			responseObject.localStorage.push({
				key : key,
				value : value
			});
		}
		sendResponse(responseObject);
	} else if (request.action == "clearLocalStorage") {
		localStorage.clear();
		sendResponse({});
	}
});
