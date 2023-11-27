window.addEventListener('load', function() {
	const loader = document.getElementById('loader').style.display = "none";
}); 

function loadContents(){
	const user = JSON.parse(sessionStorage.getItem('user'));
	if (! user) {
		window.location = "login.html"
	}
	document.querySelectorAll('.username').forEach(element => {
		element.innerHTML = `${user.username}`;
	});
	document.querySelectorAll('.fullname').forEach(element => {
		element.innerHTML = user.fullname ?? "Update your details";
	});
	document.querySelectorAll('.email').forEach(element => {
		element.innerHTML = `${user.email}`;
	});
}

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

function loadMedicationList(){
	const userId = window.localStorage.getItem('token');
	$.ajax({
		type: 'GET',
		url: `https://klusterthon-365-api.000webhostapp.com/medication/${userId}`,
		success: function(response) {
			if (response.status == false) {
				document.querySelector('#medList').innerHTML += "<span>No medications added yet! Add to get started</span>";
			} else {
				const data = response.data;
				data.forEach(item => {
					document.querySelector('#medList').innerHTML +=  `<div class="rounded-lg p-4 flex flex-col gap-2 bg-gray-200">
					<h1 class="font-bold">${item.medication_name}</h1>
					<span class="flex flex-col gap-1">
						<span>${item.dosage ?? 0} * ${item.reminders_per_day ?? 0} times every ${item.days_interval ?? 0} day[s], for ${item.total_days ?? 0} days </span>
						<span class = 'font-bold'>Special Instructions : ${item.special ?? "none"}</span>
						<span class='font-light'><i> ${item.start_date} </i></span>
					</span>
				</div>`
				});
			}
		},
		error: function(error) {
			console.error('Error:', error);
		}
	});
}
