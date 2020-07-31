

var loader = document.querySelector("img")


if (loader.complete) {
	var xhr = new XMLHttpRequest
	xhr.open("get", "home.html")
	xhr.send();
} else{
	loader.addEventListener("load", function(e){
		console.log("loaded!")
	})
}