let fstScreen = document.getElementById('fstscreen');
let secScreen = document.getElementById('secscreen');
let thdScreen = document.getElementById('thdscreen');
let frtScreen = document.getElementById('frtscreen');


let fstBtn = document.getElementById('fstbtn');
let secBtn = document.getElementById('secbtn');
let thdBtn = document.getElementById('thdbtn');


let fstSkip = document.getElementById('fstskip');
let secSkip = document.getElementById('secskip');
let thdSkip = document.getElementById('thdskip');
let backBtn = document.getElementById('backbtn');

fstBtn.addEventListener('click', function(e) {
	e.preventDefault();
	fstScreen.style.display = "none";
	secScreen.style.display = "block";
})

fstSkip.addEventListener('click', function(e) {
	e.preventDefault();
	fstScreen.style.display = "none";
	frtScreen.style.display = "block";
})

secBtn.addEventListener('click', function(e) {
	e.preventDefault();
	secScreen.style.display = "none";
	thdScreen.style.display = "block";
})

secSkip.addEventListener('click', function(e) {
	e.preventDefault();
	secScreen.style.display = "none";
	frtScreen.style.display = "block";
})

thdBtn.addEventListener('click', function(e) {
	e.preventDefault();
	thdScreen.style.display = "none";
	frtScreen.style.display = "block";
})

thdSkip.addEventListener('click', function(e) {
	e.preventDefault();
	thdScreen.style.display = "none";
	frtScreen.style.display = "block";
})

backBtn.addEventListener('click', function(e) {
	e.preventDefault();
	frtScreen.style.display = "none";
	fstScreen.style.display = "block";
})