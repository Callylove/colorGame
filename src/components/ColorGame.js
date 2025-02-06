import React, { useState, useEffect } from 'react';
import { generateRandomColor } from '../utils/generateRandomColor';
import { generateColorOptions } from '../utils/generateColorOptions';
import { initialGameState } from '../utils/initialGameState';
import { CORRECT_GUESS_DELAY } from '../constants/data';
import { getUpdatedStateForWrongGuess } from '../utils/getUpdatedStateForWrongGuess';
import { getUpdatedStateForCorrectGuess } from '../utils/getUpdatedStateForCorrectGuess';


const ColorGame = () => {
  // State management
  const [gameState, setGameState] = useState(initialGameState);
  const [targetColor, setTargetColor] = useState('');
  const [colorOptions, setColorOptions] = useState([]);

  // Game state management functions
  const initializeGame = () => {
    const newColor = generateRandomColor();
    setTargetColor(newColor);
    setColorOptions(generateColorOptions(newColor));
  };

  const resetGame = () => {
    setGameState(initialGameState);
    initializeGame();
  };

  // Event handlers
  const handleGuess = (selectedColor) => {
    if (selectedColor === targetColor) {
      setGameState(getUpdatedStateForCorrectGuess);
      
      // Start new round after delay
      setTimeout(() => {
        setGameState(prevState => ({
          ...prevState,
          gameStatus: '',
          statusClass: ''
        }));
        initializeGame();
      }, CORRECT_GUESS_DELAY);
    } else {
      setGameState(getUpdatedStateForWrongGuess);
    }
  };

  // Initialize game on component mount
  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div className="game-container">
      <div className="game-box">
        <h1 className="title">Color Guessing Game</h1>
        
        <p 
          data-testid="gameInstructions"
          className="instructions"
        >
          Can you guess which button matches the color shown below?
        </p>

        <div 
          data-testid="colorBox"
          className="color-box"
          style={{ backgroundColor: targetColor }}
        />

        <p 
          data-testid="gameStatus"
          className={`status ${gameState.statusClass}`}
        >
          {gameState.gameStatus}
        </p>

        <div className="color-grid">
          {colorOptions.map((color, index) => (
            <button
              key={index}
              data-testid="colorOption"
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => handleGuess(color)}
              aria-label={`Color option ${index + 1}`}
            />
          ))}
        </div>

        <div className="game-footer">
          <p 
            data-testid="score"
            className="score"
          >
            Score: {gameState.score}
          </p>
          
          <button
            data-testid="newGameButton"
            className="new-game-btn"
            onClick={resetGame}
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorGame;