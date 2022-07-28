import React from 'react';
import {View} from 'react-native';
import Loader from './src/assets/lottie/Loader';
import Store from './src/components/context/Store';
import Navigation from './src/components/Navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Store>
        <Navigation />
      </Store>
    </View>

  );
};

export default App;
