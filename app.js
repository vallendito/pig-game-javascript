/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, aroundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none'; //for setting css in JS

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
// event handler

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    // 1.Random Number
    var dice = Math.floor(Math.random()*6)+1;

    // 2. Display the result 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score IF the rolled number was NOT a 1
    if(dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {

        nextPlayer();
        //next player
        // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        // roundScore = 0;

        // document.getElementById('current-0').textContent = '0';
        // document.getElementById('current-1').textContent = '0';

        // document.querySelector('.player-0-panel').classList.toggle('active');
        // document.querySelector('.player-1-panel').classList.toggle('active');

        // // document.querySelector('.player-0-panel').classList.remove('active'); //menghapus class 
        // // document.querySelector('.player-1-panel').classList.add('active');  //menambah class
        
        // document.querySelector('.dice').style.display = 'none';
    }

});

// function Hold

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add CURRENT score to GLOBAL score

    scores[activePlayer] += roundScore;

    // Update the UI

    document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');

    // Check if player won the game

    if(scores[activePlayer] >= 20) {
        document.querySelector('#name-' +activePlayer).textContent = 'Winner!';
    } else {
        //nextPlayer
        nextPlayer();
    }

    
});


function nextPlayer() {
        //next player

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // document.querySelector('.player-0-panel').classList.remove('active'); //menghapus class 
        // document.querySelector('.player-1-panel').classList.add('active');  //menambah class
        
        document.querySelector('.dice').style.display = 'none';
}



// dice = Math.floor(Math.random()*6)+1; //for add one to six ,

//document.querySelector('#current-' + activePlayer).textContent = dice; //textcontent just a text //for take a value in webpages in current score and random value
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+ dice+ '<em>'; include html in web page

//var x = document.querySelector('#score-0').textContent;
//console.log(x); // for get value in text HTML 





