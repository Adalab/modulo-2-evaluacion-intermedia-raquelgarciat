'use strict';

//constantes
const playbtn = document.querySelector('.js-playbtn');
const sel = document.querySelector('.js-select');
const amount = document.querySelector('.js-amount');
const msg = document.querySelector('.js-msg')

//funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function compareNumber() {
    const randomNum = getRandomNumber(6);
    const selValue = sel.value;
    console.log(randomNum);
    console.log(selValue);
    if (selValue === randomNum) {
        msg.innerHTML = 'Has ganado el doble de lo apostado!! :D';
    }
    else {
        msg.innerHTML = 'Has perdido lo apostado... D:';
    }
}

function handlerBtnClick() {
  compareNumber();
}

//eventos
playbtn.addEventListener('click', handlerBtnClick);
