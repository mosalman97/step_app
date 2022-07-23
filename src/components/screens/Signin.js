import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {SIZES} from '../general/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Signin = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    axios
      .post('https://traveller.talrop.works/api/v1/auth/token/', {
        username,
        password,
      })
      .then(response => {
        let data = response.data;
        AsyncStorage.setItem('data', JSON.stringify(data));
        navigation.navigate("Home")
        
      })
      .catch(error => {
        console.log(error.response.data);
        if (error.response.status === 401) {
          alert(error.response.data.detail);
        }
      });
  };
  return (
    <SafeAreaView>
      <View style={StyleSheet.container}>
        <View style={styles.inputcontainer}>
          <Text style={styles.heading}>Log In</Text>
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
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.signin}>Signin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: SIZES.hp('5%'),
    color: 'black',
    textAlign: 'center',
  },
  inputcontainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 100,
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
    marginTop: 30,
    width: SIZES.wp('50%'),
    height: SIZES.hp('6%'),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
