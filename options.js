'use strict'

$(function(){
	$("#get_quizlet_button").unbind("click").bind('click', function(){
		var url = $("#quizlet_url_textbox").val();
		var request = new XMLHttpRequest();
		request.open("GET", url, true);
		request.send();
		if(url){
			request.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					alert(this.status);
					
					var parser = new DOMParser();
					var doc = parser.parseFromString(request.responseText, "text/html");
					var elem = doc.getElementById("h1");
					alert(elem);
					console.log(elem);
					console.log(doc);
					document.getElementById("quizlet_data").innerHTML = doc;
					
					
					// var response = this.responseXML;
					// var parser = new DOMParser();
					// var xmlDoc = parser.parseFromString(response,"text/xml");
					// var tds = xmlDoc.getElementsByTagName("SetPageTerm-definitionText").innerHTML;
					// document.getElementById("quizlet_data").innerHTML = response;
				}
			};
		};
	});
});


