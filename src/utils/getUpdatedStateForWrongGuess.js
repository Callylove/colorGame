// Get Updated State For Wrong Guess
export const getUpdatedStateForWrongGuess = (prevState) => ({
    ...prevState,
    gameStatus: 'Wrong! Try again 😅',
    statusClass: 'wrong'
  });