import "./styles.css";

const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
let number = document.getElementById('number');

increase.addEventListener('click', showConsole_in);
decrease.addEventListener('click', showConsole_de);

function showConsole_in(){
  console.log("increase가 클릭됨");
  let current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
}

function showConsole_de(){
  console.log("decrease가 클릭됨");
  let current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
}
