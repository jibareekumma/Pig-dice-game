"use strict";

console.log('You are good to go!!')

const rollDice = document.querySelector('.roll-dice');
const diceImg = document.getElementById('dice-image');
const currentScore0 = document.getElementById('current-score0');
const currentScore1 = document.getElementById('current-score1');
const holdGame = document.querySelector('.hold-game');
const player0 = document.getElementById('player0');
const player1 = document.getElementById('player1');
const score0 = document.getElementById('score0');
const score1 = document.getElementById('score1');
const newGame = document.getElementById('new-game');
const playerName0 = document.querySelector('.name-player0');
const playerName1 = document.querySelector('.name-player1');


let activePlayer = 0;
let currentScoreDisplay = 0;
let playerScore = [0, 0];
// varible to enable the game if its still playing 
let playing = true;

// Beginning the game
currentScore0.textContent = 0;
currentScore1.textContent = 0;


// creating function for initializatin
const gameInit = function(){
        currentScore0.textContent = 0;
        currentScore1.textContent = 0;
        playing = true;
        playerScore = [0,0];
        currentScoreDisplay = 0;
        activePlayer = 0;
}

// creating the switch function
const switchFnx = function(){
    (activePlayer === 0) ?
    activePlayer = 1 : activePlayer = 0;

    //toggling designs between active players 
    player0.classList.toggle('active-player');
    player1.classList.toggle('active-player');
}

// rolling the dice and displaying the score

let player0Name = prompt("Player0, What is your Gaming Name");
let player1Name = prompt("Player1, What is your Gaming name");

 playerName0.textContent = player0Name;
playerName1.textContent = player1Name;

const nameReset = function(){
    let player0Name = prompt("Player0, What is your Gaming Name");
    let player1Name = prompt("Player1, What is your Gaming name");

    playerName0.textContent = player0Name;
    playerName1.textContent = player1Name;
}

diceImg.classList.add('hidden');
// rolling the dice 
rollDice.addEventListener(
    'click',
    function () {
        if(playing){
            //setting the names of players
           

        const diceNmb = Math.trunc(Math.random() * 6 + 1)
        console.log(diceNmb);
        diceImg.classList.remove('hidden')
        diceImg.src = `images/dice-${diceNmb}.png`;

        if (diceNmb !== 1) {
            currentScoreDisplay = currentScoreDisplay + diceNmb;
            document.getElementById(`current-score${activePlayer}`)
            .textContent =
                currentScoreDisplay;
            // currentScore0.textContent = currentScoreDisplay;
        } else {
            document.getElementById(`current-score${activePlayer}`)
            .textContent =
                0;
            //Switching the active player
            currentScoreDisplay = 0;
            switchFnx(); 
        }
        }

    }
)

holdGame.addEventListener(
    'click',
    function(){
        if(playing){
        playerScore[activePlayer] = 
        playerScore[activePlayer] + currentScoreDisplay;

    // displaying the score of the active player
    document.getElementById(`score${activePlayer}`)
    .textContent = 
    playerScore[activePlayer];
    currentScoreDisplay = 0;
    document.getElementById(`current-score${activePlayer}`)
    .textContent =
                0;
                

    // checking if the score is above 100 to determine winner
        if(playerScore[activePlayer] >= 180 ){
            playing = false;
            diceImg.classList.add('hidden');
            document.getElementById(`player${activePlayer}`)
            .classList.add(
                'winner-player'
            )
            document.getElementById(`player${activePlayer}`)
            .classList.remove(
                'active-player'
            )
        }
        else{
             // switching to the next player if the 
             // player doesn't win the game
          switchFnx();
        }
        }
    }
)

newGame.addEventListener(
    'click', function(){
        // initializing the logic back to beginings 
        diceImg.classList.add('hidden');
        // removing the winner class from the winner player
         player0.classList.remove('winner-player');
         player1.classList.remove('winner-player');

            // initialixing the starting conditions for the game
            score0.textContent = 0;
            score1.textContent = 0;

            gameInit();
            nameReset();

            player0.classList.add('active-player')
            player1.classList.remove('active-player');
    }
)


