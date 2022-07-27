import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//components
import Signin from '../components/screens/Signin';
import Signup from '../components/screens/Signup';
import Home from '../components/screens/Home';
import SinglePage from '../components/screens/SinglePage';
import {Context} from './context/Store';

const Auth = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Sigin"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Signin} />
      <Stack.Screen name="Signin" component={Signup} />
    </Stack.Navigator>
  );
};
const Profile = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Singlepage" component={SinglePage} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const {state} = useContext(Context);
  // const [isLogged,setLogged] = useState(false);
  // useEffect(()=>{
  //   state.userData.islogged ? setLogged(true) : setLogged(false)
  // },[])
  // }
  return (
    <NavigationContainer>
      {state.userData.islogged && state.userData.access_token ? (
        <Profile />
      ) : (
        <Auth />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
