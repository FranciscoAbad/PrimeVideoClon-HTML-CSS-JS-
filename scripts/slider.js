
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".banner__slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
let sliderTrailer = document.querySelectorAll(".banner__slider-trailer");
let video = document.querySelectorAll(".video__play");
let iterador = 0;
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".banner__slider-section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
  iterador++;
  aux=iterador;
  setTimeout(function(){ sliderTrailerDisplayOn(iterador); }, 3000);
  setTimeout(function(){ sliderTrailerDisplayOff(iterador-1);; }, 600);
  setTimeout(function(){ sliderTrailerDisplayOff(aux); }, 20000);
 if (iterador==3){
  iterador=0;
}

  
  
}

function Prev() {
  let sliderSection = document.querySelectorAll(".banner__slider-section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
  iterador--;
  if (iterador==-1){
    iterador=2;
  }
  aux=iterador;
  setTimeout(function(){ sliderTrailerDisplayOn(iterador); }, 3000);
  setTimeout(function(){ sliderTrailerDisplayOff(iterador+1);; }, 600);
  setTimeout(function(){ sliderTrailerDisplayOff(aux); }, 20000);
  
}




btnRight.addEventListener('click', function(){
  Next();
});



btnLeft.addEventListener('click', function(){
  Prev();
});



function sliderTrailerDisplayOn(iterador){
  
  sliderTrailer[iterador].style.display = "flex"
  
  }
function sliderTrailerDisplayOff(iterador){
  sliderTrailer[iterador].style.display = "none"
    }

  

    setTimeout(function(){ sliderTrailerDisplayOn(iterador); }, 3000);