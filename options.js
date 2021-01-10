$(function(){
	$("#get_quizlet_button").unbind("click").bind('click', function(){
		var url = $("#quizlet_url_textbox").val() + "../print";
		if(url){
			var obj = {
			  method: 'GET',
			  mode: 'no-cors',
			  headers: {
				  'Access-Control-Request-Headers': 'Authorization',
				  'Content-Type': 'application/json',
				  'Origin': ''
			  },
			  credentials: 'omit'
			};
			
			async function fetchText() {
				/* We want to eventually find 
				<span class="TermText notranslate lang-en">
				
				HOWEVER WE WOULD BE BETTER OFF USING 
				<span class='TermText qWord lang-en'> and <span class='TermText qDef lang-en'>
				which are from url/../print
				*/
				let response = await fetch(url, obj);
				
				console.log("Here is the response from: " + url + response);
				alert("Here is the response from: " + url + "\n" + response.status);
				if (response.status === 200) {
					let data = await response.text();
					console.log(data);
					alert(data)
				}
			}
			fetchText();
			
			/* Fetch API cannot load URL... URL scheme "file" is not supported.
			fetch(url, { mode: 'no-cors'}).then((resp) => resp.json()).then(function(data) {
				console.log(data);
			}) 
			*/
			
			/* VIOLOATES CORS POLICY
			$.get(url, function(data, url_status, jqXHR) {
				alert("URL: " + url + "\nStatus: " + url_status + "\n\nData:\n" + data);
		});
		*/
		
		};
	});
});


