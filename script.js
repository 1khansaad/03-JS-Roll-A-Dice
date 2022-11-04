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

let scores = [0, 0]
let currentScore = 0
let activePlayer = 0;
let playing = true

btnrollEl.addEventListener('click', function(){
    if(playing){ 
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
    }
})

btnholdEl.addEventListener('click', function(){
    if(playing){ 
        scores[`${activePlayer}`] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[`${activePlayer}`]
        currentScore = 0

        if(scores[activePlayer] >= 20){
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden')
        }

        document.getElementById(`current--${activePlayer}`).textContent = 0
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }

})


btnNewEl.addEventListener('click', function(){
    currentScore = 0
    document.getElementById(`current--0`).textContent = 0
    document.getElementById(`current--1`).textContent = 0 
    scores = [0, 0]
    document.getElementById(`score--0`).textContent = 0
    document.getElementById(`score--1`).textContent = 0 
    diceEl.classList.add('hidden');
    const prob = document.querySelector(`.player--${activePlayer === 0 ? 1 : 0 }`)
    prob.classList.remove('player--winner');
    prob.classList.remove(`player--active`)
    playing = true
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

})
