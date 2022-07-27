import React, {useContext} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//components
import Signin from '../components/screens/Signin';
import Signup from '../components/screens/Signup';
import Home from '../components/screens/Home';
import SinglePage from '../components/screens/SinglePage';
import {Context} from './context/Store';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const {state} = useContext(Context);
  console.log(state,"8787987i67676868")
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Sigin"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Signin} />
        <Stack.Screen name="Signin" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Singlepage" component={SinglePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
