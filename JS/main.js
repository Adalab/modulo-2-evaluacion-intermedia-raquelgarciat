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

function compareNumber() {
  const randomNum = getRandomNumber(6);
  const selValue = sel.value;
  const betAmount = bet.value;
  let startingAmount = 50
  console.log(randomNum);
  if (parseInt(selValue) === parseInt(randomNum)) {
    msg.innerHTML = 'Has ganado el doble de lo apostado!! :D';
    const wonAmount = startingAmount + (betAmount * 2)
    resultAmount.innerHTML = `Saldo: ${wonAmount}$`
  } else {
    msg.innerHTML = 'Has perdido lo apostado... D:';
    const lostAmount = startingAmount - betAmount;
    resultAmount.innerHTML = `Saldo: ${lostAmount}$`;
  }
}

function handlerBtnClick() {
  compareNumber();
}

//eventos
playbtn.addEventListener('click', handlerBtnClick);
