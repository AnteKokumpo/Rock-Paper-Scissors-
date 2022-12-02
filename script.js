// function for starting the game
startGame = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    
// function for playing  game 
playGame = () => {
    const rockBtn = document.querySelector("#rock")
    const paperBtn = document.querySelector("#paper")
    const scissorsBtn = document.querySelector("#scissors")
    const playerOptions = [rockBtn,paperBtn,scissorsBtn];
    const computerOptions = ['rock','paper','scissors']

    playerOptions.forEach(option => {
        option.addEventListener('click',function(){

            const movesLeft = document.querySelector('.movesleft');
            moves++;
            movesLeft.innerText = `Moves Left: ${5-moves}`;
             
            const randomNumber = Math.floor(Math.random()*3);
            const computerItem = computerOptions[randomNumber];

            // Function to check who wins
            winner(option.innerText,computerItem)
             
            // Calling gameOver function after 5 moves
            if(moves == 5){
                gameOver(playerOptions,movesLeft);
            }
        })
    })
}


// function for detect the winner 
winner = (player,computer) => {
    let resultDOM = document.getElementById('result')
    let playerScoreDOM = document.querySelector(".playerScore")
    let computerScoreDOM = document.querySelector(".computerScore")

    playerChoice = player.toLowerCase();
    computerChoice = computer.toLowerCase();
    
    if(playerChoice === computerChoice){
        resultDOM.textContent = 'Tie Game'
        --moves;
    }
    else if(playerChoice == 'rock'){
        if(computerChoice == 'paper'){
            resultDOM.textContent = 'Computer Won';
            computerScore++;
            computerScoreDOM.textContent = computerScore;

        }else{
            resultDOM.textContent = 'Player Won'
            playerScore++;
            playerScoreDOM.textContent = playerScore;
        }
    }
    else if(playerChoice == 'scissors'){
        if(computerChoice == 'rock'){
            resultDOM.textContent = 'Computer Won';
            computerScore++;
            computerScoreDOM.textContent = computerScore;
        }else{
            resultDOM.textContent = 'Player Won';
            playerScore++;
            playerScoreDOM.textContent = playerScore;
        }
    }
    else if(playerChoice == 'paper'){
        if(computerChoice == 'scissors'){
            resultDOM.textContent = 'Computer Won';
            computerScore++;
            computerScoreDOM.textContent = computerScore;
        }else{
            resultDOM.textContent = 'Player Won';
            playerScore++;
            playerScoreDOM.textContent = playerScore;
        }
    }

}

// function for reload button and indicate the win or lose.  
gameOver = (playerOptions,movesLeft) => {

    const moveText = document.querySelector(".move")
    const resultDOM = document.querySelector('#result')
    const reloadBtn = document.querySelector('.reload')

    playerOptions.forEach(option => {
        option.style.display = 'none';
    })

    moveText.innerText = 'Game Over !!! '
    movesLeft.style.display = 'none';
    
    if(playerScore > computerScore){
        // resultDOM.classList.add("resultsuccess")
        resultDOM.innerText = 'You Won!!! :)) '
        resultDOM.style.color = 'green'
    }
    else if(playerScore < computerScore){
        // resultDOM.classList.add("resultfail")
        resultDOM.innerText = 'You Lost The Game :((';
        resultDOM.style.color = 'red'
    }
    else{
        resultDOM.innerText = 'Tie Game'
        resultDOM.style.color = 'white'
    }
    
    reloadBtn.innerText ='Restart'; 
    reloadBtn.style.display = 'flex'
    reloadBtn.classList.add('btn','btn-dark','text-align-center')
    reloadBtn.addEventListener('click',() => {
        window.location.reload();
    })

}

    playGame();
}

// Calling main function
startGame();
