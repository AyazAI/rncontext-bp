import React, {useState, createContext, useContext} from 'react';

const ThemeContext = createContext();

export const themes = {
  dark: {
    type: 'dark',
    background: '#433',
    color: '#333',
  },
  light: {
    type: 'light',
    background: '#666',
    color: '#989',
  },
};

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState({
    darkMode: false,
    palette: themes.light,
  });
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
