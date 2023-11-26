window.addEventListener('load', function() {
	const loader = document.getElementById('loader').style.display = "none";
}); 

let menu = document.getElementById("menu");
let isOpened = false;
function menuController() {
	if(isOpened === false) {
		menu.classList.remove("hidden");
		isOpened = true;
	} else {
		menu.classList.add("hidden");
		isOpened = false;
	}
}

  