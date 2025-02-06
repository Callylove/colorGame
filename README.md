# Color Guessing Game

A fun and interactive color guessing game built with React where players need to match colors by selecting the correct option from six choices.

## 🎮 Game Features

- Random color generation for each round
- Six color options to choose from
- Automatic score tracking
- Visual feedback for correct and wrong guesses
- Responsive design for all screen sizes
- Automatic progression to next round on correct guess
- New game reset option

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Callylove/colorGame.git
cd colorGame
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

## 🏗️ Project Structure

```
src/
├── components/
│   └── ColorGame.js      # Main game component
├── utils/
│   └── gameUtils.js      # Utility functions and game logic
├── styles/
│   └── index.css         # Game styles
└── App.js                # Root component
```

## 🎯 Game Requirements

### Core Components

1. **Color Display Box**
   - Shows the target color to match
   - Data attribute: `data-testid="colorBox"`

2. **Color Options**
   - Six clickable color buttons
   - Data attribute: `data-testid="colorOption"`

3. **Game Instructions**
   - Clear instructions for players
   - Data attribute: `data-testid="gameInstructions"`

4. **Game Status**
   - Shows feedback on player guesses
   - Data attribute: `data-testid="gameStatus"`

5. **Score Counter**
   - Tracks correct guesses
   - Data attribute: `data-testid="score"`

6. **New Game Button**
   - Resets the game
   - Data attribute: `data-testid="newGameButton"`

### Game Flow

1. A random color is generated and displayed
2. Player selects from six color options
3. Feedback is provided for the guess
4. Score updates for correct guesses
5. Game automatically advances on correct guess
6. Player can reset game at any time

## 🎨 Styling

The game uses CSS for styling with:
- Clean, modern interface
- Responsive design
- Interactive animations
- Visual feedback for user actions
- Accessible color contrasts

## 🔧 Development

### File Descriptions

1. **ColorGame.js**
   - Main React component
   - Handles game state and user interactions
   - Renders game interface

2. **gameUtils.js**
   - Color generation functions
   - Game state management
   - Utility functions
   - Game constants

3. **index.css**
   - Component styles
   - Animations
   - Responsive design rules

### Key Functions

```javascript
generateRandomColor()     // Generates random hex color
generateColorOptions()    // Creates array of color choices
handleGuess()            // Processes player's guess
resetGame()              // Resets game state
```

## 🧪 Testing

The game includes data-testid attributes for testing:
- colorBox
- colorOption
- gameInstructions
- gameStatus
- score
- newGameButton

## 🔍 Code Quality

- Organized component structure
- Clear function naming
- Proper state management
- Separated concerns
- Consistent code formatting
- Accessibility features
- Responsive design

## 📱 Responsive Design

The game is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.