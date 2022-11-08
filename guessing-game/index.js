
// import readlineSync from 'readline-sync';

const readline = require('readline');
let secretNumber = 10;
let numAttempts = 5;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomInRange = (min, max) => {
  let diff = Math.ceil(Math.random() * (max - min));
  return diff + min;
};

const askLimit = () => {
  rl.question("Enter the number of turns to guess the number: ", (numOfTurns) => {
    numAttempts = numOfTurns;
    askRange()
  })
}

const askRange = () => {
  rl.question("Enter a max number: ", (maxNum) => {
    rl.question("Enter a min number: ", (minNum) => {
      secretNumber = randomInRange(parseInt(minNum), parseInt(maxNum));
      askGuess();

    })
  })
};

const checkGuess = (currGuess) => {
  if (currGuess > secretNumber) {
    console.log("Too high");
    return false;
  } else if (currGuess < secretNumber) {
    console.log("Too low");
    return false;
  } else {
    console.log("Correct");
    return true;
  }
}

const askGuess = () => {
  rl.question("Enter a guess: ",  (guess) => {
    let won = checkGuess(parseInt(guess));
    numAttempts--;
    if (won) {
      console.log("You win!");
      rl.close();
    } else if (numAttempts === 0) {
      console.log("You lost! You have no more turns left");
      rl.close();
    } else {
      askGuess();
    }
  });
}

askLimit();
