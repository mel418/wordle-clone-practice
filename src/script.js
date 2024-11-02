const wordList = ['apple', 'grape', 'peach', 'berry', 'melon']; 
const correctWord = wordList[Math.floor(Math.random() * wordList.length)];
let currentGuess = '';
let attempts = 0;

console.log(correctWord);

document.getElementById('submit').addEventListener('click', submitGuess);

document.getElementById('guess').addEventListener('input', (e) => {
  currentGuess = e.target.value.toLowerCase();
});

// Allow pressing Enter to submit the guess
document.getElementById('guess').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    submitGuess();
  }
});

function submitGuess() {
  if (currentGuess.length === 5) {
    evaluateGuess(currentGuess);
    currentGuess = '';
    document.getElementById('guess').value = '';
  } else {
    alert('Please enter a 5-letter word.');
  }
}


function evaluateGuess(guess) {
  if (guess === correctWord) {
    // displayCorrectWord();
    document.getElementById('message').textContent = 'Congratulations! You guessed the correct word!';
    // return;
  }
  
  const board = document.getElementById('board');
  const guessArray = guess.split('');

  // create a new row for the guess
  const row = document.createElement('div');
  row.classList.add('row');

  guessArray.forEach((letter, index) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    if (correctWord[index] === letter) {
      cell.classList.add('correct');
    } else if (correctWord.includes(letter)) {
      cell.classList.add('present');
    } else {
      cell.classList.add('absent');
    }

    cell.textContent = letter.toUpperCase();
    row.appendChild(cell);
  });

  board.appendChild(row);
  attempts++;

  if (attempts === 6) {
    document.getElementById('message').textContent = `Game over! The correct word was ${correctWord}.`;
  }
}
