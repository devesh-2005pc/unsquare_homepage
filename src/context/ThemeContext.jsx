// src/context/ThemeContext.jsx
import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProviderCustom = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
