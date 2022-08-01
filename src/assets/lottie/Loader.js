import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
const Loader = () => {
  return <View style={styles.container}>
     <LottieView  source={require("./lottiie.json")} autoPlay />
  </View>;
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
