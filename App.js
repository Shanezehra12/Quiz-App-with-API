import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Home from './Screens/Home';
import Quiz from './Screens/Quiz';
import Result from './Screens/Result';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Navigation';

const App = () => {
  return (
    
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 16,
  }
})