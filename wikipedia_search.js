document.getElementById('wikipediaSearch').onkeypress = autoSearch;

function search(inputText) {
	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + inputText;
	var request = new XMLHttpRequest();

	request.open('GET', url, true);
	request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
	request.onload = function() {
  	if (request.status >= 200 && request.status < 400) {
    	// Success!
			//location.reload();
    	var resp = JSON.parse(request.responseText);
			document.getElementById('output').innerHTML=null;
			console.log(resp);
				for(var i=0;i<resp[1].length;i++){
					document.getElementById('output').innerHTML+="<div><div class='well'><a href="+resp[3][i]+"><h2>" + resp[1][i]+ "</h2>" + "<p>" + resp[2][i] + "</p></a></div></div>";
				}
  	} else {
    	// We reached our target server, but it returned an error
			console.log("error");
  	}
	};
	request.onerror = function() {
  	// There was a connection error of some sort
	};

	request.send();
}
function autoSearch() {
	var inputText = document.getElementById('wikipediaSearch').value;
	if (inputText.length > 0) {
		console.log('auto_search');
		search(inputText);
	}
}
