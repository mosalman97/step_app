import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { SIZES } from '../general/Constants';

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView source={require('./loader.json')} autoPlay loop />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
    container : {
        width:SIZES.wp("50%"),
        height:SIZES.hp("30%")
    }
});
