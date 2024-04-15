import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding1 from './components/Onboarding1'; // Check the path to ensure it's correct
import Login from './components/Login'; // Check the path to ensure it's correct

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding1">
        {/* Screens */}
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// StyleSheet is not used in the current code, consider removing it if not needed
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
