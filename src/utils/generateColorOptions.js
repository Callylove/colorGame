import { generateRandomColor } from "./generateRandomColor";

// Generate Color Options
export const generateColorOptions = (targetColor) => {
    const colors = new Set([targetColor]);
    
    while (colors.size < 6) {
      colors.add(generateRandomColor());
    }
    
    return Array.from(colors).sort(() => Math.random() - 0.5);
  };
  