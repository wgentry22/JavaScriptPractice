function getUserChoice() {
  var userInput = prompt('What is your choice?');
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || 'paper' || 'scissors'){
    return userInput;
  } else {
    console.log('Choice recieved.');
  }
}

function getComputerChoice() {
  var randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0: 
      return 'rock';
      break;
    case 1:
			return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log('Incorrect Input');
      break;
                     }
}

function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice){
    return "The match ends in a tie";
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer has won.';
    } else {
      return 'You have won!';
    }
  }
    if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer has won.';
    } else {
      return 'You have won!';
    }
  }
    if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer has won.';
    } else {
      return 'You have won!';
    }
  }
}

function playGame(){
  userChoice = getUserChoice();
  computerChoice = getComputerChoice();
  console.log('You threw '+ userChoice +'.');
  console.log('The computer threw ' + computerChoice +'.');
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
