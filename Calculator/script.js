
const inputDisplay = document.getElementById('input');

function addToInput(input){
  inputDisplay.value += input;
}

function calculate(){
  try{
    inputDisplay.value = eval(inputDisplay.value);
  }catch(error){
    inputDisplay.value = "Error";
  }
}

function clearInput(){
  inputDisplay.value = '';
}