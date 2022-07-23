import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  AsyncStorage,
} from 'react-native';
import {SIZES} from '../general/Constants';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlesubmit = () => {
    axios
      .post('https://traveller.talrop.works/api/v1/auth/register/', {
        username,
        email,
        password,
      })
      .then(response => {
        let data = response.data;
        console.log(data);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          onChangeText={username => setUsername(username)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry
          onChangeText={password => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handlesubmit}>
        <Text style={styles.signin}>Signin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  logocontainer: {
    paddingBottom: 15,
  },
  logo: {
    width: SIZES.wp('80%'),
    height: SIZES.hp('10%'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  input: {
    borderColor: '#2BC871',
    width: SIZES.wp('80%'),
    height: SIZES.hp('8%'),
    marginTop: 15,
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
