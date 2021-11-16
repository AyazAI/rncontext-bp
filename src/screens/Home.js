import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';

// using context
import {useAuth} from '../contexts/AuthContext';
import {themes, useTheme} from '../contexts/ThemeContext';

const Home = () => {
  const AuthContext = useAuth();
  const ThemeContext = useTheme();

  console.log('User in home', AuthContext.state.username);
  console.log('Theme in home', ThemeContext.theme);

  //
  const changeTheme = () => {
    ThemeContext.setTheme({
      darkMode: false,
      palette:
        ThemeContext.theme.palette.type === 'dark' ? themes.light : themes.dark,
    });
  };
  //
  return (
    <SafeAreaView>
      <View>
        <Text>Home Page</Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            padding: 14,
          }}
          onPress={changeTheme}>
          <Text>Change Theme</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
