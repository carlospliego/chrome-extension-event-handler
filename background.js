(function () {

	/**
	 * Handle events from the client.
	 * @example: Put this in the client ->
	 * window.postMessage({type: 'incognitoWindow', data: {url: `http://google.com}}, 'http://localhost:8080');
	 */
	var EventHandler = {
		'incognitoWindow': function (event) {
			chrome.windows.create(event.data);
		}
	};

	/* globals chrome */
	chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
		if (EventHandler[message.type])EventHandler[message.type](message);
	});
})();
