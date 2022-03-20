'use strict';

// storing elements in variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const playerOneScoreEl = document.getElementById('score--0');
const playerTwoScoreEl = document.getElementById('score--1');
const playerOneCurrentScoreEl = document.getElementById('current--0');
const playerTwoCurrentScoreEl = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnrollEl = document.querySelector('.btn--roll');
const btnholdEl = document.querySelector('.btn--hold');


playerOneScoreEl.textContent = 0;
playerTwoScoreEl.textContent= 0;
diceEl.classList.add('hidden');

let currentScore = 0
let activePlayer = 0;

btnrollEl.addEventListener('click', function(){
    let dice = Math.trunc(Math.random()*6+1);

    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

    if(dice !== 1){
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    }else{
        document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
})
