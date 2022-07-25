import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {SIZES} from '../general/Constants';

const SinglePage = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.contaniner}>
        <View style={styles.head}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttontext}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SinglePage;

const styles = StyleSheet.create({
  contaniner: {
    width: SIZES.wp('90%'),
    alignSelf: 'center',
  },
  logo: {
    width: SIZES.wp('30%'),
    height: SIZES.hp('10%'),
    resizeMode: 'contain',
  },
  button: {
    width: SIZES.wp('30%'),
    height: SIZES.hp('6%'),
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
  },
  buttontext: {
    color: 'white',
    fontSize: SIZES.hp('3%'),
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
