document.addEventListener("DOMContentLoaded",
	function(event){
		document.querySelector("#submit")
		        .addEventListener("click",
		        	function(){
		        		var name=
		        		        document
		        		        .querySelector("#peru").value;
		        		document.querySelector("p")
		        		        .innerHTML="Hello! " + name +".Your response is submitted.</h1>";
		        	})
	});