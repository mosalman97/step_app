import React,{useState} from 'react';
import {SafeAreaView, StyleSheet, View, TextInput,TouchableOpacity,Text} from 'react-native';
import {SIZES} from '../general/Constants';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  return (
    <SafeAreaView>
      <View style={StyleSheet.container}>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Username"
            onChangeText={username => setUsername(username)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            onChangeText={password => setPassword(password)}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.signin}>Signin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {},
  inputcontainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 200,
  },
  input: {
    borderColor: '#2BC871',
    width: SIZES.wp('80%'),
    height: SIZES.hp('8%'),
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 50,
    paddingLeft: 20,
    alignSelf: 'center',
  },
  signin: {
    textTransform: 'capitalize',
    color: 'white',
    fontSize: SIZES.hp('3%'),
  },
  button: {
    backgroundColor: '#0FA76F',
    borderColor: '#0FA76F',
    borderWidth: 1,
    marginTop: 40,
    width: SIZES.wp('50%'),
    height: SIZES.hp('6%'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
