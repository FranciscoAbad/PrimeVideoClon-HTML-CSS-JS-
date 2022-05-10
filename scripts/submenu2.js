let btnMenu = document.getElementById('nav__perfil');
let mainNav = document.getElementById('nav__submenu');
btnMenu.addEventListener('click', function(){
  mainNav.classList.toggle('mostrar');
});

let btnMenu2 = document.getElementById('submenu2__active');
let mainNav2 = document.getElementById('nav__submenu2');
btnMenu2.addEventListener('mouseenter', function(){
  mainNav2.classList.toggle('mostrar');
});


mainNav2.addEventListener('mouseleave',function(){
    mainNav2.classList.toggle('mostrar');
});

