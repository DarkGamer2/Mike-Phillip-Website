const track=document.querySelector(".carousel-track");
const slides=Array.from(track.children);
const nextButton=document.querySelector(".carousel__button--right");
const prevButton=document.querySelector(".carousel__button--left");
const dotNav=document.querySelector(".carousel__nav");
const dots=Array.from(dotNav.children);

const slideWidth=slides[0].getBoundingClientRect().width;

const setSlidePosition=slides.forEach((slide, index) => {
    slide.style.left=slideWidth * index + "px";
})

slides.forEach(setSlidePosition);

nextButton.addEventListener("click",() => {
    const currentSlide=track.document.querySelector(".current-slide");
    const nextSlide=currentSlide.nextElementSibling;
    const amountToMove=nextSlide.slide.left;

    track.style.transform='translateX(-' + amountToMove + ')';

    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");

});