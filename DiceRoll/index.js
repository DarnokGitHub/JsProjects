
buttonEl = document.querySelector('.button-dice');
diceAnimation = document.querySelector('.dice');
rollHistory = document.querySelector('.roll-history');
buttonRes = document.querySelector('.button-reset');
historyList=[];


function convertOutcome(rollOutcome)
{
  switch(rollOutcome)
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
  const outcome = Math.floor((Math.random()*6) + 1);
  const diceFace = convertOutcome(outcome);
  historyList.push(outcome);
  diceAnimation.innerHTML = diceFace;
  updateRollHistory();
}

function updateRollHistory(){
  rollHistory.innerHTML = "";
  for(let i = 0; i < historyList.length; i++)
  {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll nr ${i+1}: <span> ${convertOutcome(historyList[i])}</span>`
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

buttonRes.addEventListener('click',()=>{
  historyList = [];
  updateRollHistory();
})

