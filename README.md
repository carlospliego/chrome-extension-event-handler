
#Event Handler Chrome Extension

Add the following lines to the end of your index.html file

`<div style="display:none;" id="extensionCheck"></div>`

 `	<script>
 		// Connect to chrome Extension if available
 		window.postMessage({
 			type: 'preflight'
 		}, window.location.origin);
 	</script>
 `

 On the client make requests formatted as follows

 `window.postMessage({type: 'incognitoWindow', data: {url: 'http://google.com'}}, 'http://localhost:8080');`
