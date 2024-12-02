import React, { useState, useEffect } from 'react';

function Hangman() {
  const wordList = ["stackoverflow", "github", "frontend", "backend"];
  const [wordPicked, setWordPicked] = useState('');
  const [guess, setGuess] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 6;

  // Seleccionar la palabra al azar solo una vez al montar el componente
  useEffect(() => {
    const pickedWord = wordList[Math.random() * wordList.length | 0];
    setWordPicked(pickedWord);
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  const newGame = () => {
    const pickedWord = wordList[Math.floor(Math.random() * wordList.length)];
    setWordPicked(pickedWord);
    setGuess('');
    setGuessedLetters([]);
    setAttempts(0);
  };

  const handleGuess = () => {
    if (guess) {
      const letter = guess.toLowerCase();
      setGuessedLetters([...guessedLetters, letter]);

      if (!wordPicked.includes(letter)) {
        setAttempts(attempts + 1);
      }
      setGuess('');
    }
  };

  const renderWord = () => {
    return wordPicked.split('').map((letter, index) => (
      <div key={index} className="w-8 h-8 border border-gray-500 flex items-center justify-center">
        {guessedLetters.includes(letter) ? letter : ' '}
      </div>
    ));
  };

  const hasWon = wordPicked.split('').every((letter) => guessedLetters.includes(letter));
  const hasLost = attempts >= maxAttempts;

  return (
    <div className="text-center text-white">
      <h1 className="text-5xl mb-4 font-bold">Hangman game</h1>

      <div className="flex gap-2 justify-center mb-4">
        <p>Type a letter:</p>
        <input
          type="text"
          maxLength="1"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="w-9 h-8 px-3 pb-1 rounded-lg text-black"
          disabled={hasWon || hasLost}
        />
        <button
          onClick={handleGuess}
          className="rounded-xl bg-green-400 px-2 hover:bg-green-800 hover:scale-95 text-black"
          disabled={hasWon || hasLost}
        >
          Guess
        </button>
      </div>

      <div className="flex gap-2 justify-center mt-2">
        {renderWord()}
      </div>

      {hasWon && <p className="text-green-400 mt-4">¡Felicidades, has ganado!</p>}
      {hasLost && <p className="text-red-400 mt-4">¡Has perdido! La palabra era "{wordPicked}"</p>}

      <p className="mt-4">Intentos fallidos: {attempts} / {maxAttempts}</p>
      <button onClick={newGame} className='mt-4 bg-yellow-300 hover:bg-yellow-400 hover:scale-95 px-4 text-lg rounded-xl text-black py-1'>Restart</button>
    </div>
  );
}

export default Hangman;