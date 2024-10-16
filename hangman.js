// Paste this code into your browser console to work.  If you are not sure what this does, do not paste, if you are, go ahead!
(function() {
    // Creates the screen
    const gameContainer = document.createElement('div');
    gameContainer.style.position = 'fixed';
    gameContainer.style.top = '0';
    gameContainer.style.left = '0';
    gameContainer.style.width = '100%';
    gameContainer.style.height = '100%';
    gameContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    gameContainer.style.display = 'flex';
    gameContainer.style.flexDirection = 'column';
    gameContainer.style.alignItems = 'center';
    gameContainer.style.justifyContent = 'center';
    gameContainer.style.zIndex = '9999';
    gameContainer.style.padding = '20px';
    gameContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    document.body.appendChild(gameContainer);

    // Adds the words to the word list
    const words = ["pneumonoultramicroscopicsilicovolcanoconiosis", "pseudopseudohypoparathyroidism", "chargoggagoggmanchauggagoggchaubunagungamaugg", "supercalifragilisticexpialidocious", "floccinaucinihilipilification"];
    const selectedWord = words[Math.floor(Math.random() * words.length)];
    let guessedLetters = [];
    let incorrectLetters = [];
    let remainingAttempts = 6;

    // Displays words
    const wordDisplay = document.createElement('h1');
    const incorrectLettersDisplay = document.createElement('h3');
    const remainingAttemptsDisplay = document.createElement('h3');
    const inputField = document.createElement('input');
    const guessButton = document.createElement('button');
    const messageDisplay = document.createElement('h2');

    // Adds the guess button
    guessButton.textContent = 'Guess';
    guessButton.style.marginTop = '20px';
    gameContainer.appendChild(wordDisplay);
    gameContainer.appendChild(incorrectLettersDisplay);
    gameContainer.appendChild(remainingAttemptsDisplay);
    gameContainer.appendChild(inputField);
    gameContainer.appendChild(guessButton);
    gameContainer.appendChild(messageDisplay);

    // Creats the w___a effect in hangman games
    function displayWord() {
        wordDisplay.textContent = selectedWord.split('').map(letter => (
            guessedLetters.includes(letter) ? letter : '_'
        )).join(' ');
    }

    // Make a list of all the incorrect letters
    function updateIncorrectLetters() {
        incorrectLettersDisplay.textContent = `Incorrect Letters: ${incorrectLetters.join(', ')}`;
    }

    function updateRemainingAttempts() {
        remainingAttemptsDisplay.textContent = `Attempts Remaining: ${remainingAttempts}`;
    }

    function checkGameOver() {
        if (remainingAttempts <= 0) {
            messageDisplay.textContent = `Game Over! EZ the word is: "${selectedWord}".`;
            guessButton.disabled = true;
        } else if (selectedWord.split('').every(letter => guessedLetters.includes(letter))) {
            messageDisplay.textContent = "Congratulations! ggs!";
            guessButton.disabled = true;
        }
    }

    guessButton.addEventListener('click', () => {
        const letter = inputField.value.toLowerCase();
        inputField.value = '';

        if (letter && !guessedLetters.includes(letter) && !incorrectLetters.includes(letter)) {
            if (selectedWord.includes(letter)) {
                guessedLetters.push(letter);
            } else {
                incorrectLetters.push(letter);
                remainingAttempts--;
            }

            displayWord();
            updateIncorrectLetters();
            updateRemainingAttempts();
            checkGameOver();
        } else {
            alert("You've already guessed that letter STUPID!!!!!!!!!!");
        }
    });

    // Calling functions
    displayWord();
    updateRemainingAttempts();
})();