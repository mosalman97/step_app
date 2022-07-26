import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from './src/components/screens/Signin';
import Signup from './src/components/screens/Signup';
import Home from './src/components/screens/Home';
import SinglePage from './src/components/screens/SinglePage';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signin"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Signin} />
        <Stack.Screen name="Signin" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Singlepage" component={SinglePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
