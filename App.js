import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Signin from './src/components/screens/Signin';
import Signup from './src/components/screens/Signup';

const App = () => {
  return (
    <SafeAreaView>
      <Signup/>
      {/* <Signin /> */}
    </SafeAreaView>
  );
};

export default App;
