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

let profileMenu = document.getElementById("profilemenu");
        let mobMenu = document.getElementById("mobile-menu");

        let isOpenedNow = false;
        let isMobOpen = false;
        function profileController() {
            if(isOpenedNow === false) {
                profileMenu.classList.remove("md:hidden");
                profileMenu.classList.add("md:block");
                isOpenedNow = true;
            } else {
                profileMenu.classList.add("md:hidden");
                isOpenedNow = false;
            }
        }
        function mobMenuController() {
            if(isMobOpen === false) {
                mobMenu.classList.remove("hidden");
                isMobOpen = true;
            } else {
                mobMenu.classList.add("hidden");
                isMobOpen = false;
            }
        }

let prevDisplay = document.getElementById('prev-display');
let nextDisplay = document.getElementById('next-display');
let nextBtn = document.getElementById('next-btn');

function showNext(elOne, elTwo) {
	elOne.style.display = "none";
	elTwo.style.display = "block";
}

nextBtn.addEventListener('click', () => showNext(prevDisplay, nextDisplay));

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

document.addEventListener('DOMContentLoaded',()=>{
	const user = JSON.parse(sessionStorage.getItem('user'));
        const usernameDisplay = document.querySelectorAll('.username').forEach(element => {
            element.innerHTML = `${user.username}`;
        });
        const fullnameDisplay = document.querySelectorAll('.fullname').forEach(element => {
            element.innerHTML = user.fullname ?? "Update your details";
        });
        const emailDisplay = document.querySelectorAll('.email').forEach(element => {
            element.innerHTML = `${user.email}`;
        });
})