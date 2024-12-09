let next = document.getElementById("next");
let prev = document.getElementById("prev");

let carousel = document.querySelector('.carousel');
let slider = document.querySelector('.carousel .list');
let thumbnail = document.querySelector('.carousel .thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');

thumbnail.appendChild(thumbnailItems[0])
let timeRunning = 3000;

next.onclick = function(){
    showSlider('next')
}
prev.onclick = function(){
    showSlider('prev')
}

let runTimeOut;

function showSlider(type){
    let sliderItems = slider.querySelectorAll('.carousel .list .item');
    let thumbnailItems = thumbnail.querySelectorAll('.carousel .thumbnail .item');
    if(type === 'next'){
        slider.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        carousel.classList.add('next');
    }else{
        slider.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        carousel.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, timeRunning)
}
