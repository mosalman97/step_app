import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

//components
import Signin from '../components/screens/Signin';
import Signup from '../components/screens/Signup';
import Home from '../components/screens/Home';
import SinglePage from '../components/screens/SinglePage';
import {Context} from './context/Store';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Signin} />
      <Stack.Screen name="Signin" component={Signup} />
    </Stack.Navigator>
  );
};
const Profile = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Singlepage" component={SinglePage} />
    </Stack.Navigator>
  );
};

let userDataStored = null;
const Navigation = () => {
  const {state, dispatch} = useContext(Context);
  // console.log(state.userData, '-=-=-=-=-');
  useEffect(() => {
    const fetchUserData = async () => {
      userDataStored = await AsyncStorage.getItem('userData');
      userDataStored = JSON.parse(userDataStored);
      console.log(userDataStored, '==========');
      dispatch({
        type: 'UPDATE_USER_DATA',
        userData: userDataStored,
      });
    };
    fetchUserData();
  }, []);


  return (
    <NavigationContainer>
      {state.userData.islogged ? <Profile /> : <Auth />}
    </NavigationContainer>
  );
};

export default Navigation;
