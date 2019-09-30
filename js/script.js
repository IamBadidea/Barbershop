var userblock = document.querySelector(".user-block");
var signin = document.querySelector(".signin");
var login = document.querySelector("[name=login]");
var password = document.querySelector("[name=password]");
var close = document.querySelector(".btn-close");
var btn_click = document.querySelector(".btn-click");
var map = document.querySelector(".map");
var map_close = document.querySelector(".close-map");
var form = signin.querySelector("form");
var storage = localStorage.getItem("login");

userblock.addEventListener("click", function(evt){
	evt.preventDefault();
	signin.classList.add("signin-view");
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	signin.classList.remove("signin-view");
});

btn_click.addEventListener("click", function(evt) {
	evt.preventDefault();
	map.classList.add("map-view");
});

map_close.addEventListener("click", function(evt) {
	evt.preventDefault();
	map.classList.remove("map-view");
});

form.addEventListener("submit", function(evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
		console.log("Введите что-нбиудь в поля!");
	}
	else {
		localStorage.setItem("login", login.value);
	}
});
