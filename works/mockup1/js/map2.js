var map2link = document.querySelector(".contact-button-map2");
var map2popup = document.querySelector(".modal-map");
var map2close = mappopup.querySelector(".modal-close");
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
map2link.addEventListener("click", function (evt) {
    evt.preventDefault();
    map2popup.classList.add("modal-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});
map2close.addEventListener("click", function (evt) {
    evt.preventDefault();
    map2popup.classList.remove("modal-show");
    // mappopup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        map2popup.classList.remove("modal-error");
        map2popup.offsetWidth = popup.offsetWidth;
        map2popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (map2popup.classList.contains("modal-show")) {
            map2popup.classList.remove("modal-show");
            map2popup.classList.remove("modal-error");
        }
    }
});