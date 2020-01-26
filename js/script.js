window.addEventListener('DOMContentLoaded', function(){
    'use strict';
let loginLink = document.querySelector(".login-link"),
    mapLink = document.querySelector(".js-button-map"),
    modalLogin = document.querySelector(".modal-login"),
    modalMap = document.querySelector(".modal-map"),
    mapClose = modalMap.querySelector(".modal-close"),
    loginClose = modalLogin.querySelector(".modal-close"),
    inputLogin = modalLogin.querySelector("[name=login]"),
    inputPassword = modalLogin.querySelector("[name=password]"),
    form = modalLogin.querySelector("form"),
    storage = localStorage.getItem("inputLogin");

loginLink.addEventListener("click", function(evt){
    evt.preventDefault();
    modalLogin.classList.add("modal-show");
   
    if (storage) {
        inputLogin.value = storage;
        inputPassword.focus();
    } else {
        inputLogin.focus();
    }
});

loginClose.addEventListener("click", function(){
    modalLogin.classList.remove("modal-show");
    modalLogin.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt){
    if (!inputLogin.value || !inputPassword.value){
        evt.preventDefault();
        modalLogin.classList.add("modal-error");
        
    } else {
        localStorage.setItem("inputLogin", inputLogin.value);
    }
    
});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27 && modalLogin.classList.contains("modal-show")){
        evt.preventDefault();
        modalLogin.classList.remove("modal-show");
    }
    
   
});

mapLink.addEventListener("click", function(evt){
    evt.preventDefault();
    modalMap.classList.add("modal-show");
   
});

mapClose.addEventListener("click", function(){
    modalMap.classList.remove("modal-show");
    
});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27 && modalMap.classList.contains("modal-show")){
        evt.preventDefault();
        modalLogin.classList.remove("modal-show");
    }
    
   
});
});