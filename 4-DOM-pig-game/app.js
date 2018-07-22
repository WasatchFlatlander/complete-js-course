/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gameDone, rolls;
resetGame();

function resetGame(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gameDone = false;
    rolls = [0,0];
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('#name-' + 0).textContent = 'Player 1';
    document.querySelector('#name-' + 1).textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';   
}

function rollDice(){
    for(var i=0; i<1; i++){
        var dice = Math.floor(Math.random()*6) + 1;
//        var diceDom = document.getElementById('dice-' + i);
        document.getElementById('dice-' + i).style.display = 'block';
        document.getElementById('dice-' + i).src = 'dice-' + dice + '.png'; 
        rolls[i] = dice;
    }
}

function otherPlayer(){
    return (activePlayer+1)%2;
}

function switchPlayer(){
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.player-' + otherPlayer() + '-panel').classList.add('active');
    document.querySelector('#current-' + activePlayer).textContent = 0;
    activePlayer = otherPlayer();
    roundScore = 0;
    for(var i=0; i<2;i++) rolls[i] = 0;
}

function isBadRoll(){
    return rolls[0] === 1 || rolls[1]==1;
}



document.querySelector('.btn-roll').addEventListener('click', function(){
    if(!gameDone){
        rollDice();    
        if(!isBadRoll()){
            roundScore += rolls[0]+rolls[1];
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            switchPlayer();
        }
    }
});

function checkForWinner(){
    isWinningScore = scores[activePlayer] >= 10;
    if(isWinningScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
        document.querySelector('#name-' + otherPlayer()).textContent = 'Loser :(';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        gameDone = true;
    }
    return isWinningScore;
}

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(!gameDone){    
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        if(!checkForWinner())
        {
            switchPlayer();    
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', function(){
    resetGame();
});