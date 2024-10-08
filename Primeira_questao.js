let stringInput = "";
let firtsNumber = null;
let operador  = null;

function input (numero){
  console.log("Input function called with number: ", numero)
  stringInput += numero;
  document.getElementById("display").value = stringInput;
}

function  somar  (){
   firtsNumber = parseInt(stringInput);
   operador = "+";
   stringInput = "";
}

function  mult (){
  firtsNumber = parseInt(stringInput);
  operador = "*";
  stringInput = "";
}
function  minus (){
  firtsNumber = parseInt(stringInput);
  operador = "-";
  stringInput = "";
}

function  div (){
  firtsNumber = parseInt(stringInput);
  operador = "/";
  stringInput = "";
}

function calculate() {
  let secondNumber = parseFloat(stringInput);

  let result;
  if (operador === '+') {
    result = firtsNumber + secondNumber;
  } else if (operador === '-') {
    result = firtsNumber - secondNumber;
  } else if (operador === '*') {
    result = firtsNumber * secondNumber;
  } else if (operador === '/') {
    result = firtsNumber / secondNumber;
  }

  document.getElementById('display').value = result;
  stringInput = result.toString();
}
