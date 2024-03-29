const targetWord = "apple";
let attempts = 0;

function checkGuess() {
  const guess = document.getElementById("guessInput").value.toLowerCase();

  if (guess.length !== 5) {
    alert("Please enter a 5-letter word.");
    return;
  }

  attempts++;

  if (guess === targetWord) {
    displayResult(`You guessed the word "${targetWord}" in ${attempts} attempts!`);
  } else {
    const result = getResult(targetWord, guess);
    displayResult(`Incorrect guess. Result: ${result}`);
  }
}

function getResult(target, guess) {
  let result = "";

  for (let i = 0; i < target.length; i++) {
    if (target[i] === guess[i]) {
      result += target[i];
    } else if (target.includes(guess[i])) {
      result += "?";
    } else {
      result += "*";
    }
  }

  return result;
}

function displayResult(message) {
  document.getElementById("result").textContent = message;
}
