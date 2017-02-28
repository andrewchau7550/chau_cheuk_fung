document.getElementById('wikipediaSearch').onkeypress = autoSearch;

function search(inputText) {
	//this is the wikipedia link
	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ inputText +"&format=json&callback=?";
    $.ajax({
		url: url,
		type: 'GET',
		contentType: "application/json; charset=utf-8",
		async: false,
		dataType: "json",
		success: function(data, status, jqXHR) {
			console.log(data);
			$("#output").html();
			$("#output").prepend("results:");
			//print the results
			for(var i=0;i<data[1].length;i++){
				$("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
			}
		}
    })
}

function autoSearch() {
	var inputText = document.getElementById('wikipediaSearch').value;
	if (inputText.length > 0) {
		console.log('auto_search');
		search(inputText);
	}
}