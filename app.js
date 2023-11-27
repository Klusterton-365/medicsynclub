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


function logout() {
	toastr.info('Are you sure you want to logout?', 'Confirmation', {
	  closeButton: true,
	  timeOut: 0,
	  extendedTimeOut: 0,
	  tapToDismiss: false,
	  preventDuplicates : true,
	  onclick: function (e) {
		if (e.target.classList.contains('toastr-close-button')) {
		  toastr.clear();
		} else {
		  // User clicked outside the notification, perform logout actions
		  sessionStorage.removeItem('user');
		  localStorage.removeItem('token');
		  window.location = "dashboard";
		}
	  }
	});
}