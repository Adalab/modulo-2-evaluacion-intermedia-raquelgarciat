'use strict';

//constantes
const playbtn = document.querySelector('.js-playbtn');
const sel = document.querySelector('.js-select');
const resultAmount = document.querySelector('.js-result-amount');
const msg = document.querySelector('.js-msg');
const bet = document.querySelector('.js-bet');

//funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function handlerBtnClick() {
  const randomNum = getRandomNumber(6);
  const selValue = parseInt(sel.value);
  const betAmount = parseInt(bet.value);
  let startingAmount = 50;

  console.log(randomNum);

  if (parseInt(selValue) === parseInt(randomNum)) {
    msg.innerHTML = 'Has ganado el doble de lo apostado!! :D';
    let newAmount = startingAmount + (betAmount * 2);
    resultAmount.innerHTML = `Saldo: ${newAmount}$`;
  } else {
    msg.innerHTML = 'Has perdido lo apostado... D:';
    let newAmount = startingAmount - betAmount;
    resultAmount.innerHTML = `Saldo: ${newAmount}$`;
  }
}

//eventos
playbtn.addEventListener('click', handlerBtnClick);
