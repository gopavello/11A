

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-menu');
let body = document.querySelector('body');

burger.onclick = function(){
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('lock');
}


