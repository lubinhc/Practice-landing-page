const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const sliders = [...document.querySelectorAll('.testimonial')];
const arrows = [...document.querySelectorAll('.bttn-arrow-3')];
const paragraphs = [...document.querySelectorAll('.para')];
const arrowBots = [...document.querySelectorAll('.arrow-bot')];

arrowLeft.addEventListener('click', ()=> changePosition(-1));
arrowRight.addEventListener('click', ()=> changePosition(1));
const changePosition = (change)=>{
    let value;
    const currentPosition = Number(document.querySelector('.active').dataset.id);
    value = currentPosition;
    value +=change;

    if(value === 0 || value == sliders.length+1){
      value = value === 0 ? sliders.length : 1;
    }

    sliders[currentPosition-1].classList.toggle('active');
    sliders[value-1].classList.toggle('active');
}
arrows.forEach( (arrow, i) =>{
  arrow.addEventListener('click', ()=>{
    paragraphs[i].classList.toggle('block');
    arrowBots[i].classList.toggle('arrow-bot--active');
})
})

