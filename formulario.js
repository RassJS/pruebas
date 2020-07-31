


var inputs = document.querySelectorAll("input")

var label = document.querySelectorAll("label")



inputs.forEach(function(input){
	input.addEventListener("blur", function(e){

		var valor = e.target.value
		var verificar = valor.trim()
		if () {
			e.target.parentNode.children[2].style.display = "block"
		} else {
			e.target.parentNode.children[2].style.display = "none"
		}
		
	})

	
})







