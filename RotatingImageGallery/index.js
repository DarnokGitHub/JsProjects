const imageContainerEl = document.querySelector('.image-container');

const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');
const spinEl = document.getElementById('spin360');

let x=0;
let timer;

prevEl.addEventListener('click',()=>{
  x += 36;
  clearTimeout(timer);
  updateGallery();
});

nextEl.addEventListener('click',()=>{
  x -= 36;
  clearTimeout(timer);
  updateGallery();
});

spinEl.addEventListener('click',()=>{
  startSpin = x;
  clearTimeout(timer);
  timerSpin = setInterval(()=>
  {
    x-=10;
    console.log(x);
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    if(x <= startSpin - 360)
    {
      clearInterval(timerSpin);
    }
  },10);
  updateGallery();
});

function updateGallery(){
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(()=>
  {
    x -= 36;
    updateGallery();
  },3000);
}

updateGallery();