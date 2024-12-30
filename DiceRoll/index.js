
buttonEl = document.querySelector('.js-button');
diceAnimation = document.querySelector('.dice');
rollHistory = document.querySelector('.roll-history');
historyList=[];


function convertResult(rollResult)
{
  switch(rollResult)
  {
    case 1:
      return '&#9856;';
    case 2:
      return '&#9857;';
    case 3:
      return '&#9858;';
    case 4:
      return '&#9859;';
    case 5:
      return '&#9860;';
    case 6:
      return '&#9861;';
    default:
      return '';
  }
}

function rollDice()
{
  const result = Math.floor((Math.random()*6) + 1);
  const diceFace = convertResult(result);
  historyList.push(result);
  diceAnimation.innerHTML = diceFace;
  updateRollHistory();
}

function updateRollHistory(){
  rollHistory.innerHTML = "";
  for(let i = 0; i < historyList.length; i++)
  {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i+1}: <span> ${convertResult(historyList[i])}</span>`
    rollHistory.appendChild(listItem);
  }
}

buttonEl.addEventListener('click',()=>{
  diceAnimation.classList.add('roll-animation');
  setTimeout(()=>{
    diceAnimation.classList.remove('roll-animation');
    rollDice();
  },1000);
});