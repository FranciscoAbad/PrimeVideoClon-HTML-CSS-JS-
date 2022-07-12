// SELECTORES ----------------------------------------------

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".banner__slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
let sliderTrailer = document.querySelectorAll(".banner__slider-trailer");
let video = document.querySelectorAll(".video__play");
let iterador = 0;
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
const videos= document.querySelectorAll('.videoBanner');


// EVENT LISTENERS ------------------------------------------------------
document.addEventListener('DOMContentLoaded',start());

addVideoEventListeners();
function addVideoEventListeners(){
  for(let i=0;i<videos.length;i++){
    videos[i].addEventListener('ended',Next);
  }
}



slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".banner__slider-section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.1s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 100);
  iterador++;

  setTimeout(function(){ sliderTrailerDisplayOn(iterador); }, 3000);
 
  sliderTrailerDisplayOffTest(iterador);
 if (iterador==3){
  iterador=0;
}

  
  
}

function Prev() {
  let sliderSection = document.querySelectorAll(".banner__slider-section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.1s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 100);
  iterador--;
  if (iterador==-1){
    iterador=2;
  }

  setTimeout(function(){ sliderTrailerDisplayOn(iterador); }, 3000);
  
  sliderTrailerDisplayOffTest(iterador);
}




btnRight.addEventListener('click', function(){
  Next();
});



btnLeft.addEventListener('click', function(){
  Prev();
});



function sliderTrailerDisplayOn(iterador){
  
  sliderTrailer[iterador].style.display = "flex"
  videos[iterador].play();
  
  }
function sliderTrailerDisplayOff(iterador){
  sliderTrailer[iterador].style.display = "none"
  videos[iterador].load();
    }

function sliderTrailerDisplayOffTest(iterador){
  for (let i=0;i<3;i++){
    if(i!=iterador){
      setTimeout(function(){ sliderTrailerDisplayOff(i); }, 10);
      
    }
  }
}



  
   function start(){
    setTimeout(function(){ sliderTrailerDisplayOn(iterador); }, 3000);
   }
    
  
    