var maplink = document.querySelector(".contact-button-map");
var mappopup = document.querySelector(".modal-map");
var mapclose = mappopup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var isStorageSupport = true;
var storage = "";
try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}
maplink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.add("modal-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});
mapclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.remove("modal-show");
    // mappopup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        mappopup.classList.remove("modal-error");
        mappopup.offsetWidth = popup.offsetWidth;
        mappopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mappopup.classList.contains("modal-show")) {
            mappopup.classList.remove("modal-show");
            mappopup.classList.remove("modal-error");
        }
    }
});