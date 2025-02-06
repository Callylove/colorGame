// Generate Random Color
export const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor.padEnd(6, '0');
  };
  