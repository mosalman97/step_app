import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={{width: 350, height: 350}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../lottie/loading.gif')}
        />
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
