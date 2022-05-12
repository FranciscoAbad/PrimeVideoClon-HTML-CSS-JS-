let btnMenu = document.getElementById('nav__perfil');
let mainNav = document.getElementById('nav__submenu');


btnMenu.addEventListener('click', function(){
  mainNav.classList.toggle('mostrar');
});

let btnMenu3 = document.getElementById('submenu3__activador');
let mainNav3 = document.getElementById('nav__submenu3');
btnMenu3.addEventListener('click', function(){
  mainNav3.classList.toggle('mostrar3');
});

let btnMenu32 = document.getElementById('submenu3__second-activate');
let mainNav32 = document.getElementById('submenu3__second');
btnMenu32.addEventListener('click', function(){
  mainNav32.classList.toggle('mostrar3');
});

let btnMenu2 = document.getElementById('submenu2__active');
let mainNav2 = document.getElementById('nav__submenu2');
btnMenu2.addEventListener('mouseenter', function(){
  mainNav2.classList.toggle('mostrar');
});


mainNav2.addEventListener('mouseleave',function(){
    mainNav2.classList.toggle('mostrar');
});

