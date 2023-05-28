let slider__item = document.querySelectorAll('.slider__item');
let slider__arrow_prev = document.querySelector('.slider__arrow_prev');
let slider__arrow_next = document.querySelector('.slider__arrow_next');
let slider__dot = document.querySelectorAll('.slider__dot')
let i = 0;
slider__arrow_next.addEventListener('click', function(){
    slider__item[i].classList.remove('slider__item_active');
    slider__dot[i].classList.remove('slider__dot_active');
    i++
    if(i == 3){
        i = 0;
    }
    slider__item[i].classList.add('slider__item_active');
    slider__dot[i].classList.add('slider__dot_active');
})
slider__arrow_prev.addEventListener('click', function(){
    slider__item[i].classList.remove('slider__item_active');
    slider__dot[i].classList.remove('slider__dot_active');
    if(i == 0){
        i = 3;
    }
    i--;
    slider__dot[i].classList.add('slider__dot_active');
    slider__item[i].classList.add('slider__item_active');
})

for(let n = 0; n < 3; n++){
    slider__dot[n].addEventListener('click', function(){
        slider__item[i].classList.remove('slider__item_active');
        slider__dot[i].classList.remove('slider__dot_active');
        slider__dot[n].classList.add('slider__dot_active');
        slider__item[n].classList.add('slider__item_active');
        i = n
    })
}