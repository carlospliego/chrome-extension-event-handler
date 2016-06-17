(function () {
	/* globals chrome */
	window.addEventListener("message", function (event) {
		if (!event || !event.data || !event.data.type) return;

		// Notify Client that you're connected
		if(document.getElementById('extensionCheck')){
			document.getElementById('extensionCheck').innerHTML = 'connected';
		}
		// Pass event to the background
		chrome.runtime.sendMessage(event.data, function (response) {
			// ... debug here
		});
	});
})();
