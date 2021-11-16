import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

// Contexts
import {ThemeProvider} from './src/contexts/ThemeContext';
import {AuthProvider} from './src/contexts/AuthContext';
import Home from './src/screens/Home';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
