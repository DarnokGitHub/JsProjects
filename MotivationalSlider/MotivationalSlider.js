import { motivations } from "./data/Motivations.js";

const imgEl = document.querySelector('img');
const textEl = document.querySelector('.js-text');
const authorEl = document.querySelector('.text-author');

let count = 0;

renderPage();

function renderPage(){
  const {quote, author, image} = motivations[count];
  imgEl.src = image;
  textEl.innerHTML = quote;
  authorEl.innerHTML = author;
  count++;
  if (count === motivations.length){
    count = 0;
  }
  
  setTimeout(()=>{
    renderPage();
  },6000);
}

