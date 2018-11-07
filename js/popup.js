        var link = document.querySelector(".login");
        var сlose = document.querySelector(".modal-content-close");
        var popup = document.querySelector(".modal-content");
        var login = popup.querySelector("[name=login]");
        var password = popup.querySelector("[name=password]");
        var overlay = document.querySelector(".modal-overlay");
        var form = popup.querySelector("form");
        var storage = localStorage.getItem("login");
        link.addEventListener("click", (event) => {
            event.preventDefault();
            popup.classList.add("modal-content-show");
            overlay.classList.add("modal-overlay-active");
            overlay.style.background = 'transparent';
            if (storage) {
                login.value=storage;
                password.focus();
            } else {
                login.focus();
            }
            })
        сlose.addEventListener("click", (event) => {
            event.preventDefault();
            popup.classList.remove("modal-error");
            overlay.classList.remove("modal-overlay-active");
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-content-show-afterfail");});
        overlay.addEventListener("click", (event) => {
            event.preventDefault();
            popup.classList.remove("modal-content-show");
            overlay.classList.remove("modal-overlay-active");
            popup.classList.remove("modal-error");
            popup.classList.remove("modal-content-show-afterfail");
        });
        form.addEventListener("submit", (event) => {
            if (login.value && password.value) {
                localStorage.setItem("login",login.value);
            } else { 
                event.preventDefault();
                popup.classList.add("modal-error");
                setTimeout(function(){ 
                    popup.classList.remove("modal-error");
                    popup.classList.remove("modal-content-show");
                    popup.classList.add("modal-content-show-afterfail"); }, 601);
                // if (login.validity.valueMissing) {
                //     login.setCustomValidity('Имя не может быть пустым');
                // } 
                // if (password.validity.valueMissing) {
                //     password.setCustomValidity('Пароль не может быть пустым');
                // }
            }
        });
        document.addEventListener("keydown", (event) => {
            if (event.keyCode === 27) {
                if (popup.classList.contains("modal-content-show")) {
                    popup.classList.remove("modal-content-show");
                    overlay.classList.remove("modal-overlay-active");
                    popup.classList.remove("modal-error");
                    popup.classList.remove("modal-content-show-afterfail");
                }
            }
        });

        var linkMap = document.querySelector(".js-open-map");
        var linkMapFooter = document.querySelector(".js-open-map-footer");
        var popupMap = document.querySelector(".modal-content-map");
        var сloseMap = popupMap.querySelector(".modal-content-close");
        var overlayMap = document.querySelector(".modal-overlay");
        linkMap.addEventListener("click", (event) => {
            event.preventDefault();
            popupMap.classList.add("modal-content-map-show");
            overlayMap.style.background = 'rgba(0,0,0,0.5)';
            overlayMap.classList.add("modal-overlay-active");
            })
        linkMapFooter.addEventListener("click", (event) => {
            event.preventDefault();
            popupMap.classList.add("modal-content-map-show");
            overlayMap.style.background = 'rgba(0,0,0,0.5)';
            overlayMap.classList.add("modal-overlay-active");
            })
        сloseMap.addEventListener("click", (event) => {
            event.preventDefault();
            overlayMap.classList.remove("modal-overlay-active");
            popupMap.classList.remove("modal-content-map-show")});
            overlayMap.addEventListener("click", (event) => {
            event.preventDefault();
            popupMap.classList.remove("modal-content-map-show");
            overlayMap.classList.remove("modal-overlay-active");
        });
        document.addEventListener("keydown", (event) => {
            if (event.keyCode === 27) {
                if (popupMap.classList.contains("modal-content-map-show")) {
                    popupMap.classList.remove("modal-content-map-show");
                    overlayMap.classList.remove("modal-overlay-active");
                }
            }
        });
