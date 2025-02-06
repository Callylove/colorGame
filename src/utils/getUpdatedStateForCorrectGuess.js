// Get Updated State For Correct Guess

export const getUpdatedStateForCorrectGuess = (prevState) => ({
    ...prevState,
    score: prevState.score + 1,
    gameStatus: 'Correct! 🎉',
    statusClass: 'correct'
  });